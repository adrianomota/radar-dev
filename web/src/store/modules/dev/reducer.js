import produce from 'immer';

const INITIAL_STATE = [];
export default function dev(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@dev/DEV_SUCCESS':
      return produce(state, draft => {
        const { data } = action.payload;
        draft.push(data);
      });

    case '@dev/LIST_SUCCESS':
      return produce(state, draft => {
        const { data } = action.payload;
        draft.push(data);
      });

    default:
      return state;
  }
}
