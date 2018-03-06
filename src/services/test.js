import request from '../utils/request';

export function fetch( {detail}) {
  return request(`/api/${detail}`);
}
