import { describe, it } from "mocha";
import { assert } from "chai"

import { Sound } from '../../../src/domain/model/Sound';
import { Sounds } from '../../../src/domain/model/Sounds';
import { DataSource } from '../../../src/domain/model/DataSource';
import { DataSources } from '../../../src/domain/model/DataSources';

describe('DataSources.ts', () => {
    it('インスタンス化', () => {
        const url = "file:///path/to/sound";
        const sound = new Sound("name", url);

        const dataSources = new DataSources([
            new DataSource(
                "dataSource1",
                "directory",
                "file:///path/to/datasource1",
                new Sounds([
                    new Sound("sound1", "file:///path/to/sound1"),
                    new Sound("sound2", "file:///path/to/sound2"),
                    new Sound("sound3", "file:///path/to/sound3"),
                ])
            ),
            new DataSource(
                "dataSource2",
                "rss",
                "https://path/to/datasource2",
                new Sounds([
                    new Sound("sound4", "file:///path/to/sound4"),
                    new Sound("sound5", "file:///path/to/sound5"),
                    new Sound("sound6", "file:///path/to/sound6"),
                ])
            )
        ]);

        assert.equal(dataSources.getDataSource(0).name, "dataSource1");
        assert.equal(dataSources.getDataSource(0).type, "directory");
        assert.equal(dataSources.getDataSource(0).url, "file:///path/to/datasource1");
        assert.equal(dataSources.getDataSource(0).sounds.getSound(0).name, "sound1");
        assert.equal(dataSources.getDataSource(0).sounds.getSound(1).name, "sound2");
        assert.equal(dataSources.getDataSource(0).sounds.getSound(2).name, "sound3");

        assert.equal(dataSources.getDataSource(1).name, "dataSource2");
        assert.equal(dataSources.getDataSource(1).type, "rss");
        assert.equal(dataSources.getDataSource(1).url, "https://path/to/datasource2");
        assert.equal(dataSources.getDataSource(1).sounds.getSound(0).name, "sound4");
        assert.equal(dataSources.getDataSource(1).sounds.getSound(1).name, "sound5");
        assert.equal(dataSources.getDataSource(1).sounds.getSound(2).name, "sound6");
    });
})


