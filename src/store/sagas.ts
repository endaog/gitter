import { Effect, all } from 'redux-saga/effects';


import appSagas from 'containers/App/sagas';


export default function* rootSaga() {
  const effects = [
    ...appSagas,
  ] as Effect[];

  yield all(effects);
}
