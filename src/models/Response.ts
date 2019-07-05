import { ResponseStatus } from 'common/constants';
import { ResponseError } from 'models';

export interface Response<T> {
  responseStatus: ResponseStatus;
  errors?: ResponseError[];
  data?: T;
}
