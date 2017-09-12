export const START_CONTAINER = 'START_CONTAINER';
export const initialState = {
    loaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case START_CONTAINER:
            return { loaded: true };
        default:
            return state;
    }
}