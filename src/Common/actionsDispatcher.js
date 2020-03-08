import allActions from '../store/actions';

export const setMenuSelectedDispatcher = selected => dispatch => {
  dispatch(allActions.setMenuSelected(selected));
};
