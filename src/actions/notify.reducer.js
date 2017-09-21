export const SHOW_NOTIFY = 'SHOW_NOTIFY';
export const HIDE_NOTIFY = 'HIDE_NOTIFY';
export const initialState = {
    notifications: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFY:
            if (action.item) {

            }

            return { status: SHOW_NOTIFY };
        case HIDE_NOTIFY:
            return { status: HIDE_NOTIFY };
        default:
            return state;
    }
}