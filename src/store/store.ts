import { Store } from 'redux';

import { isProduction } from 'common/utils/isProduction';

const configureStore: () => Store<{}> = isProduction()
  ? require('./configureStore.production').default // tslint:disable-line:no-require-imports
  : require('./configureStore.development').default; // tslint:disable-line:no-require-imports

export default configureStore();
