import { describe, it } from "mocha";
import { assert } from "chai"

import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';

describe('SoundPlayInfos.ts', () => {
    it('インスタンス化', () => {

        const soundPlayInfos = new SoundPlayInfos([
            new SoundPlayInfo("sound1", "file:///path/to/sound1", 1),
            new SoundPlayInfo("sound2", "file:///path/to/sound2", 2),
            new SoundPlayInfo("sound3", "file:///path/to/sound3", 3)
        ]);

        assert.equal(soundPlayInfos.length, 3);

        assert.equal(soundPlayInfos.get(0).name, "sound1");
        assert.equal(soundPlayInfos.get(0).url, "file:///path/to/sound1");
        assert.equal(soundPlayInfos.get(0).playedTime, 1);

        assert.equal(soundPlayInfos.get(1).name, "sound2");
        assert.equal(soundPlayInfos.get(1).url, "file:///path/to/sound2");
        assert.equal(soundPlayInfos.get(1).playedTime, 2);

        assert.equal(soundPlayInfos.get(2).name, "sound3");
        assert.equal(soundPlayInfos.get(2).url, "file:///path/to/sound3");
        assert.equal(soundPlayInfos.get(2).playedTime, 3);

    });
})



