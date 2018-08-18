// All search functions take the (sorted) array to search and the term to search for, and return
// either the index where the term was found or -1 if it wasn't found
export type SearchFn = (arr: number[], term: number) => number;
