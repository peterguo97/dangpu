import * as userService from '../services/test.js';

export default {

  namespace: 'admin',

  state: {
    list: [
      {
        title: 'Ant Design Title 1',
        url: '/1',
      },
      {
        title: 'Ant Design Title 2',
        url: '/2',
      },
      {
        title: 'Ant Design Title 3',
        url: '/3',
      },
      {
        title: 'Ant Design Title 4',
        url: '/4',
      },
    ],
    data: {
      title: 'downpu',
      description: '这是一个办公软件',
      image:[
        '../assests/1.jpg'
      ]
    },
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
    *delete({ payload: url },{ call, put}){
      const response = yield call(userService.handleDelete, url);
    }
  },

  reducers: {
    save(state,{payload: {data: list}}) {
      return { ...state, list };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if(pathname === '/form') {
          const detail = search.substr(1,search.length);
          dispatch({ type:'fetch', payload: detail});
        }
      });
    }
}
};
