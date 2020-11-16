import { actions } from "../constants";

export const initialState = {
    loading: false,
    stage: 0
};


export const GData = (state = initialState, action) => {
    switch (action.type) {
        case actions.loading:
            return { ...state, loading: action.payload }
        case actions.stage:
            return { ...state, stage: action.payload }
        default:
            return state
    }
}
