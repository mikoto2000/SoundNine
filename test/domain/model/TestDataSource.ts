import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';
import { DataSource } from '../../../src/domain/model/DataSource';

describe('DataSource.ts', () => {
    describe('インスタンス化', () => {
        it('constructor', () => {
            let name = "datasource";
            let type = "datasource type";
            let url = new URL("file:///path/to/datasource");

            let sounds = new Sounds([
                Sound.createFromString("sound1", "file:///path/to/sound1"),
                Sound.createFromString("sound2", "file:///path/to/sound2"),
                Sound.createFromString("sound3", "file:///path/to/sound3"),
            ]);

            let dataSource = new DataSource(name, type, url, sounds);

            assert.equal(dataSource.name, name);
            assert.equal(dataSource.type, type);
            assert.equal(dataSource.url.toString(), url.toString());

            assert.equal(dataSource.sounds.getSound(0).name, "sound1");
            assert.equal(dataSource.sounds.getSound(0).url.toString(), "file:///path/to/sound1");

            assert.equal(dataSource.sounds.getSound(1).name, "sound2");
            assert.equal(dataSource.sounds.getSound(1).url.toString(), "file:///path/to/sound2");

            assert.equal(dataSource.sounds.getSound(2).name, "sound3");
            assert.equal(dataSource.sounds.getSound(2).url.toString(), "file:///path/to/sound3");
        });

        it('createFromURL', () => {
            let name = "datasource";
            let type = "datasource type";
            let url = new URL("file:///path/to/datasource");

            let sounds = new Sounds([
                Sound.createFromString("sound1", "file:///path/to/sound1"),
                Sound.createFromString("sound2", "file:///path/to/sound2"),
                Sound.createFromString("sound3", "file:///path/to/sound3"),
            ]);

            let dataSource = DataSource.createFromURL(name, type, url, sounds);

            assert.equal(dataSource.name, name);
            assert.equal(dataSource.type, type);
            assert.equal(dataSource.url.toString(), url.toString());

            assert.equal(dataSource.sounds.getSound(0).name, "sound1");
            assert.equal(dataSource.sounds.getSound(0).url.toString(), "file:///path/to/sound1");

            assert.equal(dataSource.sounds.getSound(1).name, "sound2");
            assert.equal(dataSource.sounds.getSound(1).url.toString(), "file:///path/to/sound2");

            assert.equal(dataSource.sounds.getSound(2).name, "sound3");
            assert.equal(dataSource.sounds.getSound(2).url.toString(), "file:///path/to/sound3");
        });

        it('createFromString', () => {
            let name = "datasource";
            let type = "datasource type";
            let url = "file:///path/to/datasource";

            let sounds = new Sounds([
                Sound.createFromString("sound1", "file:///path/to/sound1"),
                Sound.createFromString("sound2", "file:///path/to/sound2"),
                Sound.createFromString("sound3", "file:///path/to/sound3"),
            ]);

            let dataSource = DataSource.createFromString(name, type, url, sounds);

            assert.equal(dataSource.name, name);
            assert.equal(dataSource.type, type);
            assert.equal(dataSource.url.toString(), url);

            assert.equal(dataSource.sounds.getSound(0).name, "sound1");
            assert.equal(dataSource.sounds.getSound(0).url.toString(), "file:///path/to/sound1");

            assert.equal(dataSource.sounds.getSound(1).name, "sound2");
            assert.equal(dataSource.sounds.getSound(1).url.toString(), "file:///path/to/sound2");

            assert.equal(dataSource.sounds.getSound(2).name, "sound3");
            assert.equal(dataSource.sounds.getSound(2).url.toString(), "file:///path/to/sound3");
        });
    });
})


