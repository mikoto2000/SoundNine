import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';
import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfoManager } from '../../../src/domain/service/SoundPlayInfoManager';
import { SoundPlayInfoManagers } from '../../../src/domain/service/SoundPlayInfoManagers';

import { Repository } from '../../../src/domain/repository/Repository';

describe('SoundPlayInfoManagers.ts', () => {
    it('インスタンス化', () => {
        const sounds = new Sounds([
            Sound.createFromString("sound1", "file:///path/to/sound1"),
            Sound.createFromString("sound2", "file:///path/to/sound2"),
            Sound.createFromString("sound3", "file:///path/to/sound3")
        ]);
        const repository = new MockRepository(1.25);

        const soundPlayInfoManagers = new SoundPlayInfoManagers(sounds, repository);

        assert.equal(soundPlayInfoManagers.length, 3);

        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(0).soundName, "sound1");
        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(0).soundUrl.toString(), "file:///path/to/sound1");
        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(0).playedTime, 1.25);

        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(1).soundName, "sound2");
        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(1).soundUrl.toString(), "file:///path/to/sound2");
        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(1).playedTime, 1.25);

        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(2).soundName, "sound3");
        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(2).soundUrl.toString(), "file:///path/to/sound3");
        assert.equal(soundPlayInfoManagers.getSoundPlayInfoManager(2).playedTime, 1.25);
    });
})

class MockRepository implements Repository {
    playedTime: number;

    constructor(playedTime: number) {
        this.playedTime = playedTime;
    }

    load(sound: Sound) : number {
        return this.playedTime;
    }

    save(sound: Sound, playedTime: number) : void {
        this.playedTime = playedTime;
    }
}


