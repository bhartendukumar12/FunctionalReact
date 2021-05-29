import globalSaga from './GlobalSaga';
/**
 * Registers all the sagas used within the app
 */
export default function* rootSaga() {
  yield [
    globalSaga()
  ];
}
