import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';
import { DataSource } from '../../../src/domain/model/DataSource';

describe('DataSource.ts', () => {
    describe('インスタンス化', () => {
        it('constructor', () => {
            const name = "datasource";
            const type = "datasource type";
            const url = "file:///path/to/datasource";

            const sounds = new Sounds([
                new Sound("sound1", "file:///path/to/sound1"),
                new Sound("sound2", "file:///path/to/sound2"),
                new Sound("sound3", "file:///path/to/sound3"),
            ]);

            const dataSource = new DataSource(name, type, url, sounds);

            assert.equal(dataSource.length, 3);

            assert.equal(dataSource.name, name);
            assert.equal(dataSource.type, type);
            assert.equal(dataSource.url, url);

            assert.equal(dataSource.sounds.getSound(0).name, "sound1");
            assert.equal(dataSource.sounds.getSound(0).url, "file:///path/to/sound1");

            assert.equal(dataSource.sounds.getSound(1).name, "sound2");
            assert.equal(dataSource.sounds.getSound(1).url, "file:///path/to/sound2");

            assert.equal(dataSource.sounds.getSound(2).name, "sound3");
            assert.equal(dataSource.sounds.getSound(2).url, "file:///path/to/sound3");
        });
    });
})

