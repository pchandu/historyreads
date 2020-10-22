import {
    RECEIVE_ALL_BOOKS, 
    RECEIVE_BOOK
} from '../actions/book_action'

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOK:
            return action.payload;
        case RECEIVE_ALL_BOOKS:
            return action.payload;
        default:
            return state;
    }
};