import { describe, it } from "mocha";
import { assert } from "chai"

import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';
import { DataSource } from '../../../src/domain/model/DataSource';

import { Repository } from '../../../src/domain/repository/Repository';
import { MockRepository } from './MockRepository';

describe('DataSource.ts', () => {
    it('インスタンス化', () => {
        const soundPlayInfos = new SoundPlayInfos([
            new SoundPlayInfo("sound1", "file:///path/to/sound1", 1.25),
            new SoundPlayInfo("sound2", "file:///path/to/sound2", 2.25),
            new SoundPlayInfo("sound3", "file:///path/to/sound3", 3.25)
        ]);

        const repository = new MockRepository(soundPlayInfos);

        const dataSource = DataSource.createFromRepository(repository);

        assert.equal(dataSource.length, 3);

        assert.equal(dataSource.get(0).name, "sound1");
        assert.equal(dataSource.get(0).url, "file:///path/to/sound1");
        assert.equal(dataSource.get(0).playedTime, 1.25);

        assert.equal(dataSource.get(1).name, "sound2");
        assert.equal(dataSource.get(1).url, "file:///path/to/sound2");
        assert.equal(dataSource.get(1).playedTime, 2.25);

        assert.equal(dataSource.get(2).name, "sound3");
        assert.equal(dataSource.get(2).url, "file:///path/to/sound3");
        assert.equal(dataSource.get(2).playedTime, 3.25);
    });

    it('saveAll', () => {
        const soundPlayInfos = new SoundPlayInfos([
            new SoundPlayInfo("sound1", "file:///path/to/sound1", 1.25),
            new SoundPlayInfo("sound2", "file:///path/to/sound2", 1.25),
            new SoundPlayInfo("sound3", "file:///path/to/sound3", 1.25)
        ]);

        const repository = new MockRepository(soundPlayInfos);

        const dataSource = DataSource.createFromRepository(repository);
        dataSource.get(0).playedTime = 125;
        dataSource.get(1).playedTime = 225;
        dataSource.get(2).playedTime = 325;
        dataSource.save();

        assert.equal(dataSource.length, 3);

        assert.equal(dataSource.get(0).name, "sound1");
        assert.equal(dataSource.get(0).url, "file:///path/to/sound1");
        assert.equal(dataSource.get(0).playedTime, 125);

        assert.equal(dataSource.get(1).name, "sound2");
        assert.equal(dataSource.get(1).url, "file:///path/to/sound2");
        assert.equal(dataSource.get(1).playedTime, 225);

        assert.equal(dataSource.get(2).name, "sound3");
        assert.equal(dataSource.get(2).url, "file:///path/to/sound3");
        assert.equal(dataSource.get(2).playedTime, 325);
    });
})

