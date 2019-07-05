// tslint:disable:no-any

/**
 * Obtains the return type of a function type like a native ReturnType from TypeScript
 * but if the return function type is wrapped in Promise it obtains type inside Promise
 * Is using in Sagas for type definitions after invoking `yield`
 * Example:
 *  const documents: ReturnTypeSaga<typeof getDocuments> = yield call(getDocuments);
 */
type ReturnTypeSaga<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => Promise<infer V> ? V :
  T extends (...args: any[]) => infer V ? V : any;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
