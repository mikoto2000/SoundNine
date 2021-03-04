import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';

describe('Sounds.ts', () => {
    it('インスタンス化', () => {
        const sounds = new Sounds([
            new Sound("sound1", "file:///path/to/sound1"),
            new Sound("sound2", "file:///path/to/sound2"),
            new Sound("sound3", "file:///path/to/sound3"),
        ]);

        assert.equal(sounds.length, 3);

        assert.equal(sounds.getSound(0).name, "sound1");
        assert.equal(sounds.getSound(0).url, "file:///path/to/sound1");

        assert.equal(sounds.getSound(1).name, "sound2");
        assert.equal(sounds.getSound(1).url, "file:///path/to/sound2");

        assert.equal(sounds.getSound(2).name, "sound3");
        assert.equal(sounds.getSound(2).url, "file:///path/to/sound3");
    });
})


