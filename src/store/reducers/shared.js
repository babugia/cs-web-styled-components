const shared = (state = { selectedMenu: 'Feed' }, action) => {
  switch (action.type) {
    case 'SET_MENU_SELECTED':
      return {
        ...state,
        selectedMenu: action.payload
      };
    default:
      return state;
  }
};

export default shared;
