import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfoManager } from '../../../src/domain/service/SoundPlayInfoManager';

import { Repository } from '../../../src/domain/repository/Repository';

describe('SoundPlayInfoManager.ts', () => {
    it('インスタンス化', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(1.25);

        const soundPlayInfoManager = new SoundPlayInfoManager(sound, repository);

        assert.equal(soundPlayInfoManager.soundPlayInfo.sound.name, "sound1");
        assert.equal(soundPlayInfoManager.soundPlayInfo.sound.url.toString(), "file:///path/to/sound1");
        assert.equal(soundPlayInfoManager.soundPlayInfo.playedTime, 1.25);
    });

    it('save/load', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(1.25);

        const soundPlayInfoManager = new SoundPlayInfoManager(sound, repository);
        soundPlayInfoManager.soundPlayInfo.playedTime = 2;
        soundPlayInfoManager.save();
        assert.equal(soundPlayInfoManager.soundPlayInfo.playedTime, 2);
    });

    it('load', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(1.25);

        const soundPlayInfoManager = new SoundPlayInfoManager(sound, repository);
        repository.playedTime = 3;
        soundPlayInfoManager.load();
        assert.equal(soundPlayInfoManager.soundPlayInfo.playedTime, 3);
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

