export const SHOW_NOTIFY = 'SHOW_NOTIFY';
export const HIDE_NOTIFY = 'HIDE_NOTIFY';

export const initialState = {
    notifications: []
};
export default (state = initialState, action) => {
    let _notifications = state.notifications;

    switch (action.type) {
        case SHOW_NOTIFY:
            if (!action.item) return state;
            const _id = Math.floor(Math.random() * 1992);
            const close = () => ({
                type: HIDE_NOTIFY,
                _id
            });
            const _item = {
                ...action.item,
                _id,
                close
            };
            _notifications.push(_item);

            return { status: SHOW_NOTIFY, notifications: _notifications };
        case HIDE_NOTIFY:
            if (!action._id) {
                _notifications.pop();
            } else {
                _notifications = _notifications.filter(n => n._id !== action._id);
            }

            return { status: HIDE_NOTIFY, notifications: _notifications };
        default:
            return state;
    }
}