export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const isInt = (arr: number[]) => arr.every(Number.isInteger);
    
    if (!isInt(collection_1) || !isInt(collection_2) || !isInt(collection_3)) {
        throw new Error("All collections must contain integers only.");
    }

    const ans: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        const val1 = i < collection_1.length ? collection_1[i] : Infinity;
        const val2 = j >= 0 ? collection_2[j] : Infinity;
        const val3 = k < collection_3.length ? collection_3[k] : Infinity;

        if (val1 <= val2 && val1 <= val3) {
            ans.push(val1);
            i++;
        } else if (val2 <= val1 && val2 <= val3) {
            ans.push(val2);
            j--;
        } else {
            ans.push(val3);
            k++;
        }
    }

    return ans;
}
