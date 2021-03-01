import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';

describe('Sound.ts', () => {
    describe('インスタンス化', () => {
        it('constructor', () => {
            const url = new URL("file:///path/to/sound");
            const sound = new Sound("name", url);

            assert.equal(sound.name, "name");
            assert.equal(sound.url.toString(), url.toString());
        });

        it('createFromURL', () => {
            const url = new URL("file:///path/to/sound");
            const sound = Sound.createFromURL("name", url);

            assert.equal(sound.name, "name");
            assert.equal(sound.url.toString(), url.toString());
        });

        it('createFromString', () => {
            const sound = Sound.createFromString("name", "file:///path/to/sound");

            assert.equal(sound.name, "name");
            assert.equal(sound.url.toString(), "file:///path/to/sound");
        });
    });
})

