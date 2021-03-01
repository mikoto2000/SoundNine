import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';

describe('SoundPlayInfo.ts', () => {
    it('インスタンス化', () => {
        const sound = Sound.createFromString("sound1", "file:///path/to/sound1");
        const soundPlayInfo = new SoundPlayInfo(sound, 1.25);

        assert.equal(soundPlayInfo.sound.name, "sound1");
        assert.equal(soundPlayInfo.sound.url.toString(), "file:///path/to/sound1");
        assert.equal(soundPlayInfo.playedTime, 1.25);
    });
})


