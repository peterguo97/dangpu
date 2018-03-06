import * as userService from '../services/test.js';

export default {

  namespace: 'admin',

  state: {
    list: [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload: detail }, { call, put }) { 
      const { data } = yield call(userService.fetch, {detail});       
      yield put({ type: 'save', payload: data });
    },
  },

  reducers: {
    save(state,{payload: {data: list}}) {
      return { ...state, list };
    },
  }
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname, querry }) => {
  //       if(pathname === '/admin') {
  //         dispatch({ type:'fetch', payload: querry});
  //       }
  //     });
  //   }
  // }
};
