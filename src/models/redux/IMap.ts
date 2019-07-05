import { Map } from 'immutable';

export interface IMap<T> extends Map<string, T[keyof T]> {
  get<K extends keyof T>(name: K): T[K];
  set<K extends keyof T, V extends T[K]>(name: K, value: V): this;
}
