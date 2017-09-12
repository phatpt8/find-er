import { all } from 'redux-saga/effects'

function* helloSaga(e) {
    console.log('Hello Sagas!', e)
}

export default function* rootSaga() {
    yield all([
        helloSaga
    ])
}