import { SearchFn } from "../src/search/types";

import { binarySearch } from "../src/search/binary";
import { breadthFirstSearch } from "../src/search/breadthFirst";
import { depthFirstSearch } from "../src/search/depthFirst";

const sortedArray = [-100, -50, -25, 0, 25, 50, 100];

describe.each([
  ["breadth-first search", breadthFirstSearch],
  ["depth-first search", depthFirstSearch],
  ["binary search", binarySearch]
])("%s", (_: string, search: SearchFn) => {
  test("returns -1 on empty array", () => {
    expect(search([], 25)).toEqual(-1);
  });

  test("returns -1 when term not found", () => {
    expect(search([], -40)).toEqual(-1);
    expect(search([], 40)).toEqual(-1);
  });

  test("returns index of found term", () => {
    expect(search(sortedArray, -50)).toBe(1);
    expect(search(sortedArray, 50)).toBe(5);
  });
});
