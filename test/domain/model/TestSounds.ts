import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';

describe('Sounds.ts', () => {
    it('インスタンス化', () => {
        let sounds = new Sounds([
            Sound.createFromString("sound1", "file:///path/to/sound1"),
            Sound.createFromString("sound2", "file:///path/to/sound2"),
            Sound.createFromString("sound3", "file:///path/to/sound3"),
        ]);

        assert.equal(sounds.getSound(0).name, "sound1");
        assert.equal(sounds.getSound(0).url.toString(), "file:///path/to/sound1");

        assert.equal(sounds.getSound(1).name, "sound2");
        assert.equal(sounds.getSound(1).url.toString(), "file:///path/to/sound2");

        assert.equal(sounds.getSound(2).name, "sound3");
        assert.equal(sounds.getSound(2).url.toString(), "file:///path/to/sound3");
    });
})


