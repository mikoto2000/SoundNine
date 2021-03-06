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

    it('getFromUrl', () => {

        const soundPlayInfos = new SoundPlayInfos([
            new SoundPlayInfo("sound1", "file:///path/to/sound1", 1),
            new SoundPlayInfo("sound2", "file:///path/to/sound2", 2),
            new SoundPlayInfo("sound3", "file:///path/to/sound3", 3)
        ]);

        assert.equal(soundPlayInfos.length, 3);

        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound1")?.name, "sound1");
        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound1")?.url, "file:///path/to/sound1");
        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound1")?.playedTime, 1);

        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound2")?.name, "sound2");
        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound2")?.url, "file:///path/to/sound2");
        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound2")?.playedTime, 2);

        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound3")?.name, "sound3");
        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound3")?.url, "file:///path/to/sound3");
        assert.equal(soundPlayInfos.getFromUrl("file:///path/to/sound3")?.playedTime, 3);

    });

    it('map', () => {

        const soundPlayInfos = new SoundPlayInfos([
            new SoundPlayInfo("sound1", "file:///path/to/sound1", 1),
            new SoundPlayInfo("sound2", "file:///path/to/sound2", 2),
            new SoundPlayInfo("sound3", "file:///path/to/sound3", 3)
        ]);

        const expected = [
            ["sound1", "file:///path/to/sound1", 1],
            ["sound2", "file:///path/to/sound2", 2],
            ["sound3", "file:///path/to/sound3", 3]
        ];

        const result = soundPlayInfos.map(soundPlayInfo => {
            return [soundPlayInfo.name, soundPlayInfo.url, soundPlayInfo.playedTime];
        });

        assert.deepEqual(result[0], expected[0]);
        assert.deepEqual(result[1], expected[1]);
        assert.deepEqual(result[2], expected[2]);

    });
})

