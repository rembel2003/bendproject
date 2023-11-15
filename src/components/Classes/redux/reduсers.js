import {FETCH_AREAS, FETCH_THINGS} from "./actions";


const initialState = {
    arias: [],
    things: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AREAS:
            return {
                ...state,
                arias: action.payload
            };
        case FETCH_THINGS:
            return {
                ...state,
                things: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;