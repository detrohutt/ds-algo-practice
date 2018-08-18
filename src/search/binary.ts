import { SearchFn } from "./types";

const binarySearchInner = (arr: number[], term: number, left: number, right: number): number => {
  if (arr.length === 0 || left > right) return -1;
  else if (arr.length === 1) return arr[0] === term ? 0 : -1;

  const mid = Math.floor((right - left) / 2) + left;

  if (arr[mid] > term) return binarySearchInner(arr, term, left, mid - 1);
  else if (arr[mid] < term) return binarySearchInner(arr, term, mid + 1, right);
  else return mid;
};

export const binarySearch: SearchFn = (arr, term) =>
  binarySearchInner(arr, term, 0, arr.length - 1);
