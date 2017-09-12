export const THEME_DAY = 'THEME_DAY';
export const THEME_NIGHT = 'THEME_NIGHT';
export const initialState = {
    themes: THEME_DAY
};
export default (state = initialState, action) => {
    switch (action.type) {
        case THEME_DAY:
            return { themes: THEME_DAY };
        case THEME_NIGHT:
            return { themes: THEME_NIGHT };
        default:
            return state;
    }
}