import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';

describe('Sound.ts', () => {
    describe('インスタンス化', () => {
        it('constructor', () => {
            const url = "file:///path/to/sound";
            const sound = new Sound("name", url);

            assert.equal(sound.name, "name");
            assert.equal(sound.url, url);
        });
    });
})

