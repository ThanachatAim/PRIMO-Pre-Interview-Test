import { merge } from './merge';

test('merge three arrays', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [8, 6, 4];
    const collection_3 = [2, 7, 9];

    const ans = merge(collection_1, collection_2, collection_3);

    expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('merge empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const ans = merge(collection_1, collection_2, collection_3);

    expect(ans).toEqual([]);
});

test('merge one empty array', () => {
    const collection_1 = [1, 2, 3];
    const collection_2: number[] = [];
    const collection_3 = [4, 5, 6];

    const ans = merge(collection_1, collection_2, collection_3);

    expect(ans).toEqual([1, 2, 3, 4, 5, 6]);
});

test('merge non-integer', () => {
    const collection_1 = [1.5, 2, 3];
    const collection_2 = [4, 3, 2];
    const collection_3 = [4, 5, 6];

    expect(() => merge(collection_1, collection_2, collection_3)).toThrow("All collections must contain integers only.");
});
