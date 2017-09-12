import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import container from 'actions/container.reducer';
import theme from 'actions/theme.reducer';


const reducers = combineReducers({
    // reducers
    router: routerReducer,
    container,
    theme
});

export default reducers;