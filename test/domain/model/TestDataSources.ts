import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';
import { DataSource } from '../../../src/domain/model/DataSource';
import { DataSources } from '../../../src/domain/model/DataSources';

describe('DataSources.ts', () => {
    it('インスタンス化', () => {
        const url = new URL("file:///path/to/sound");
        const sound = new Sound("name", url);

        const dataSources = new DataSources([
            DataSource.createFromString(
                "dataSource1",
                "directory",
                "file:///path/to/datasource1",
                new Sounds([
                    Sound.createFromString("sound1", "file:///path/to/sound1"),
                    Sound.createFromString("sound2", "file:///path/to/sound2"),
                    Sound.createFromString("sound3", "file:///path/to/sound3"),
                ])
            ),
            DataSource.createFromString(
                "dataSource2",
                "rss",
                "https://path/to/datasource2",
                new Sounds([
                    Sound.createFromString("sound4", "file:///path/to/sound4"),
                    Sound.createFromString("sound5", "file:///path/to/sound5"),
                    Sound.createFromString("sound6", "file:///path/to/sound6"),
                ])
            )
        ]);

        assert.equal(dataSources.getDataSource(0).name, "dataSource1");
        assert.equal(dataSources.getDataSource(0).type, "directory");
        assert.equal(dataSources.getDataSource(0).url.toString(), "file:///path/to/datasource1");
        assert.equal(dataSources.getDataSource(0).sounds.getSound(0).name, "sound1");
        assert.equal(dataSources.getDataSource(0).sounds.getSound(1).name, "sound2");
        assert.equal(dataSources.getDataSource(0).sounds.getSound(2).name, "sound3");

        assert.equal(dataSources.getDataSource(1).name, "dataSource2");
        assert.equal(dataSources.getDataSource(1).type, "rss");
        assert.equal(dataSources.getDataSource(1).url.toString(), "https://path/to/datasource2");
        assert.equal(dataSources.getDataSource(1).sounds.getSound(0).name, "sound4");
        assert.equal(dataSources.getDataSource(1).sounds.getSound(1).name, "sound5");
        assert.equal(dataSources.getDataSource(1).sounds.getSound(2).name, "sound6");
    });
})


