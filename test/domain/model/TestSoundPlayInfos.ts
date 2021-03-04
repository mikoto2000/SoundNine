import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';

describe('SoundPlayInfos.ts', () => {
    it('インスタンス化', () => {

        const soundPlayInfos = new SoundPlayInfos([
            new SoundPlayInfo(new Sound("sound1", "file:///path/to/sound1"), 1),
            new SoundPlayInfo(new Sound("sound2", "file:///path/to/sound2"), 2),
            new SoundPlayInfo(new Sound("sound3", "file:///path/to/sound3"), 3)
        ]);

        assert.equal(soundPlayInfos.length, 3);

        assert.equal(soundPlayInfos.getSoundPlayInfo(0).soundName, "sound1");
        assert.equal(soundPlayInfos.getSoundPlayInfo(0).soundUrl, "file:///path/to/sound1");
        assert.equal(soundPlayInfos.getSoundPlayInfo(0).playedTime, 1);

        assert.equal(soundPlayInfos.getSoundPlayInfo(1).soundName, "sound2");
        assert.equal(soundPlayInfos.getSoundPlayInfo(1).soundUrl, "file:///path/to/sound2");
        assert.equal(soundPlayInfos.getSoundPlayInfo(1).playedTime, 2);

        assert.equal(soundPlayInfos.getSoundPlayInfo(2).soundName, "sound3");
        assert.equal(soundPlayInfos.getSoundPlayInfo(2).soundUrl, "file:///path/to/sound3");
        assert.equal(soundPlayInfos.getSoundPlayInfo(2).playedTime, 3);

    });
})



