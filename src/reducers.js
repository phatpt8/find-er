import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import container from 'actions/container.reducer';
import theme from 'actions/theme.reducer';
import notify from 'actions/notify.reducer';


const reducers = combineReducers({
    // reducers
    router: routerReducer,
    container,
    theme,
    notify
});

export default reducers;