import { all, put, takeEvery } from 'redux-saga/effects'
import { START_CONTAINER } from 'actions/container.reducer';

export function* incrementAsync(action) {
    // console.log('-->', action);
    // yield put({ type: 'START_CONTAINER_INC' });
}

export function* nightWatch() {
    yield takeEvery(START_CONTAINER, incrementAsync)
}

export default function* rootSaga() {
    yield all([
        nightWatch()
    ])
}