import { ADD_USER, EDIT_USER } from './actions';

const useGlobalState = (state, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state];
        case EDIT_USER:
            return [...state];
        default:
            return state;
    }
};

export default useGlobalState;
