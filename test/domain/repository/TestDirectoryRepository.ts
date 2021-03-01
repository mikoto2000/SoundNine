import path from 'path'

import { describe, it } from "mocha";
import { assert } from "chai"

import { Repository } from '../../../src/domain/repository/Repository';
import { DirectoryRepository } from '../../../src/domain/repository/DirectoryRepository';

describe('SoundPlayInfoManager.ts', () => {
    it('インスタンス化', () => {
        const directoryRepository = new DirectoryRepository('./test/testdata/DirectoryRepository');
        const absDirPath = path.resolve('./test/testdata/DirectoryRepository');

        const soundPlayInfos = directoryRepository.soundPlayInfos;

        assert.equal(soundPlayInfos.getSoundPlayInfo(0).soundName, 'sound1.mp3');
        assert.equal(soundPlayInfos.getSoundPlayInfo(0).soundUrl.toString(), 'file://' + absDirPath + '/sound1.mp3');
        assert.equal(soundPlayInfos.getSoundPlayInfo(0).playedTime, 0);

        assert.equal(soundPlayInfos.getSoundPlayInfo(1).soundName, 'sound2.mp3');
        assert.equal(soundPlayInfos.getSoundPlayInfo(1).soundUrl.toString(), 'file://' + absDirPath + '/sound2.mp3');
        assert.equal(soundPlayInfos.getSoundPlayInfo(1).playedTime, 0);

        assert.equal(soundPlayInfos.getSoundPlayInfo(2).soundName, 'sound3.mp3');
        assert.equal(soundPlayInfos.getSoundPlayInfo(2).soundUrl.toString(), 'file://' + absDirPath + '/sound3.mp3');
        assert.equal(soundPlayInfos.getSoundPlayInfo(2).playedTime, 0);
    });
});

