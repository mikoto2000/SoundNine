import { describe, it } from "mocha";
import { assert } from "chai"

import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';

describe('SoundPlayInfo.ts', () => {
    it('インスタンス化', () => {
        const soundPlayInfo = new SoundPlayInfo("sound1", "file:///path/to/sound1", 1.25);

        assert.equal(soundPlayInfo.name, "sound1");
        assert.equal(soundPlayInfo.url, "file:///path/to/sound1");
        assert.equal(soundPlayInfo.playedTime, 1.25);
    });
})

