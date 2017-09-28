import { all, put, takeEvery, select } from 'redux-saga/effects'
import { START_CONTAINER } from 'actions/container.reducer';
import { SHOW_NOTIFY, HIDE_NOTIFY } from 'actions/notify.reducer';

export function* incrementAsync(action) {
    // console.log('-->', action);
    // yield put({ type: 'START_CONTAINER_INC' });
}

function* notifySaga(action) {
    const state = yield select();
    console.log('saga', action, state);
}

export function* nightWatch() {
    yield takeEvery(START_CONTAINER, incrementAsync);
    yield takeEvery([
        SHOW_NOTIFY,
        HIDE_NOTIFY
    ], notifySaga);
}

export default function* rootSaga() {
    yield all([
        nightWatch()
    ])
}