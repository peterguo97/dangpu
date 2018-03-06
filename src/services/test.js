import { getdata, postdata } from '../utils/request';

export function fetch( {detail}) {
  return getdata(`admin?page=${detail}`);
}

export function handleDelete(url) {
  return postdata(url);
}
