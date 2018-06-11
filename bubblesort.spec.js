describe('Bubble Sort', function () {
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });


    arr = [2, 7, 5, 3, 4, 1];

    it("returns an array", () => {
        expect(Array.isArray(bubbleSort(arr))).toBe(true);
    });


    arr2 = [7, 8, 0, 4, 5];

    it("sorts an unordered array", () => {
        expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 7]);
        expect(bubbleSort(arr2)).toEqual([0, 4, 5, 7, 8]);

    });
});