import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';
import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';
import { SoundPlayInfoManagers } from '../../../src/domain/service/SoundPlayInfoManagers';

import { Repository } from '../../../src/domain/repository/Repository';
import { MockRepository } from './MockRepository';

describe('SoundPlayInfoManagers.ts', () => {
    it('インスタンス化', () => {
        const sounds = new Sounds([
            Sound.createFromString("sound1", "file:///path/to/sound1"),
            Sound.createFromString("sound2", "file:///path/to/sound2"),
            Sound.createFromString("sound3", "file:///path/to/sound3")
        ]);

        const soundPlayInfos = new SoundPlayInfos(sounds.map(sound => {
            return new SoundPlayInfo(sound, 1.25);
        }));
        const repository = new MockRepository(soundPlayInfos);

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

