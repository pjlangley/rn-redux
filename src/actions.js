export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function addBook (book) {
  return {
    type: ADD_BOOK,
    payload: { book }
  };
}

export function removeBook (id) {
  return {
    type: REMOVE_BOOK,
    payload: { id }
  };
}
