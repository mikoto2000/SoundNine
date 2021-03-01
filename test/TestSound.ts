import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../src/domain/Sound';

describe('Sound.ts', () => {
    it('インスタンス化', () => {
        let url = new URL("file:///path/to/sound");
        let sound = new Sound("name", url);

        assert.equal(sound.name, "name");
        assert.equal(sound.url.toString(), url.toString());
    });
})

