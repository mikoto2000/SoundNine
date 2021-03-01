import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { SoundPlayInfoManager } from '../../../src/domain/service/SoundPlayInfoManager';

import { Repository } from '../../../src/domain/repository/Repository';
import { MockRepository } from './MockRepository';

describe('SoundPlayInfoManager.ts', () => {
    it('インスタンス化', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(1.25);

        const soundPlayInfoManager = new SoundPlayInfoManager(sound, repository);

        assert.equal(soundPlayInfoManager.soundName, "sound1");
        assert.equal(soundPlayInfoManager.soundUrl.toString(), "file:///path/to/sound1");
        assert.equal(soundPlayInfoManager.playedTime, 1.25);
    });

    it('save/load', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(1.25);

        const soundPlayInfoManager = new SoundPlayInfoManager(sound, repository);
        soundPlayInfoManager.playedTime = 2;
        soundPlayInfoManager.save();
        assert.equal(soundPlayInfoManager.playedTime, 2);
    });

    it('load', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(1.25);

        const soundPlayInfoManager = new SoundPlayInfoManager(sound, repository);
        repository.playedTime = 3;
        soundPlayInfoManager.load();
        assert.equal(soundPlayInfoManager.playedTime, 3);
    });
})

