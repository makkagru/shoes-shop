const initialState = {
  selectedTab: 0,
  mainCategory: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING_STATUS':
      return {
        ...state,
        loading: !state.loading
      };
    case 'GETTING_MAIN':
      return {
        ...state,
        mainCategory: action.payload
      };
    case 'CHANGE_STATE_INDEX':
      return {
        ...state,
        selectedTab: action.payload
      }

    
    default:
      return state
  }
  
}

export default reducer;