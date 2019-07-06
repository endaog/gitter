import * as Immutable from 'immutable';

export type DeepIMap<T> =
  T extends (infer R)[] ? IList<R> :
  T extends Map<infer S, infer R> ? Immutable.Map<S, IMap<R>> :
  T extends Set<infer R> ? IList<R> :
  T extends Immutable.Map<infer S, infer R> ? Immutable.Map<S, IMap<R>> :
  T extends object ? IMap<T> :
  T;

interface IList<T> extends Immutable.List<DeepIMap<T>> { }

interface IMap<T> extends Immutable.Map<string, DeepIMap<T[keyof T]>> {
  get<K extends keyof T>(name: K): DeepIMap<T[K]>;
  set<K extends keyof T, V extends DeepIMap<T[K]>>(name: K, value: V): this;

  // TODO: define more overloads to use getIn with path length more than 4
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(
    path: [K1, K2, K3, K4],
  ): DeepIMap<T[K1][K2][K3][K4]>;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(path: [K1, K2, K3]): DeepIMap<T[K1][K2][K3]>;
  getIn<K1 extends keyof T, K2 extends keyof T[K1]>(path: [K1, K2]): DeepIMap<T[K1][K2]>;
  getIn<K1 extends keyof T>(path: [K1]): DeepIMap<T[K1]>;
  getIn(keyPath: any[], notSetValue?: any): any; // tslint:disable-line:no-any
}
