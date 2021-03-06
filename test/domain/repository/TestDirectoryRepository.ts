import path from 'path'

import { describe, it } from "mocha";
import { assert } from "chai"

import { Repository } from '../../../src/domain/repository/Repository';
import { DirectoryRepository } from '../../../src/domain/repository/DirectoryRepository';

describe('DirectoryRepository.ts', () => {
    it('インスタンス化', () => {
        const directory = './test/testdata/DirectoryRepository';
        const directoryRepository = new DirectoryRepository(directory);
        const absDirPath = path.resolve('./test/testdata/DirectoryRepository');

        assert.equal(directoryRepository.type, 'directory');
        assert.equal(directoryRepository.url, 'file://' + path.resolve(directory));

        const soundPlayInfos = directoryRepository.soundPlayInfos;

        assert.equal(soundPlayInfos.get(0).name, 'sound1.mp3');
        assert.equal(soundPlayInfos.get(0).url, 'file://' + absDirPath + '/sound1.mp3');
        assert.equal(soundPlayInfos.get(0).playedTime, 0);

        assert.equal(soundPlayInfos.get(1).name, 'sound2.mp3');
        assert.equal(soundPlayInfos.get(1).url, 'file://' + absDirPath + '/sound2.mp3');
        assert.equal(soundPlayInfos.get(1).playedTime, 0);

        assert.equal(soundPlayInfos.get(2).name, 'sound3.mp3');
        assert.equal(soundPlayInfos.get(2).url, 'file://' + absDirPath + '/sound3.mp3');
        assert.equal(soundPlayInfos.get(2).playedTime, 0);
    });
});

