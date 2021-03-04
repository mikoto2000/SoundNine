import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';
import { SoundPlayInfoManager } from '../../../src/domain/service/SoundPlayInfoManager';

import { Repository } from '../../../src/domain/repository/Repository';
import { MockRepository } from './MockRepository';

describe('SoundPlayInfoManager.ts', () => {
    it('インスタンス化', () => {
        const sound = new Sound("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(new SoundPlayInfos([
            new SoundPlayInfo(sound, 1.25)
        ]));

        const soundPlayInfoManager = SoundPlayInfoManager.createFromRepository(sound, repository);

        assert.equal(soundPlayInfoManager.soundName, "sound1");
        assert.equal(soundPlayInfoManager.soundUrl.toString(), "file:///path/to/sound1");
        assert.equal(soundPlayInfoManager.playedTime, 1.25);
    });

    it('save', () => {
        const sound = new Sound("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(new SoundPlayInfos([
            new SoundPlayInfo(sound, 1.25)
        ]));

        const soundPlayInfoManager = SoundPlayInfoManager.createFromRepository(sound, repository);
        soundPlayInfoManager.playedTime = 2;
        soundPlayInfoManager.save();
        assert.equal(soundPlayInfoManager.playedTime, 2);
    });

    it('load', () => {
        const sound = new Sound("sound1", "file:///path/to/sound1");
        const repository = new MockRepository(new SoundPlayInfos([
            new SoundPlayInfo(sound, 1.25)
        ]));

        const soundPlayInfoManager = SoundPlayInfoManager.createFromRepository(sound, repository);
        repository.soundPlayInfos.getSoundPlayInfo(0).playedTime = 3;
        soundPlayInfoManager.load();
        assert.equal(soundPlayInfoManager.playedTime, 3);
    });
})

