import uuid from 'uuid/v4';

import { ADD_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [{
    id: uuid(),
    name: 'East of Eden',
    author: 'John Steinbeck'
  }]
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [
          ...state.books,
          {
            ...action.payload.book,
            id: uuid(),
          }
        ],
      };

    case REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default booksReducer;
