import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';

describe('Sound.ts', () => {
    describe('インスタンス化', () => {
        it('constructor', () => {
            let url = new URL("file:///path/to/sound");
            let sound = new Sound("name", url);

            assert.equal(sound.name, "name");
            assert.equal(sound.url.toString(), url.toString());
        });

        it('createFromURL', () => {
            let url = new URL("file:///path/to/sound");
            let sound = Sound.createFromURL("name", url);

            assert.equal(sound.name, "name");
            assert.equal(sound.url.toString(), url.toString());
        });

        it('createFromString', () => {
            let sound = Sound.createFromString("name", "file:///path/to/sound");

            assert.equal(sound.name, "name");
            assert.equal(sound.url.toString(), "file:///path/to/sound");
        });
    });
})

