import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../src/domain/Sound';
import { Sounds } from '../src/domain/Sounds';

describe('Sounds.ts', () => {
    it('インスタンス化', () => {
        let url = new URL("file:///path/to/sound");
        let sound = new Sound("name", url);

        let sounds = new Sounds([sound]);

        assert.equal(sounds.getSound(0).name, "name");
        assert.equal(sounds.getSound(0).url.toString(), url.toString());
    });
})


