export  const toggleLoading = () => dispatch => {
  return dispatch({
    type: 'TOGGLE_LOADING_STATUS'
  })
};

export const getMain = () => async (dispatch) => {
  dispatch({
    type: 'TOGGLE_LOADING_STATUS'
  });

  try {
    const response = await fetch(`http://ec2-34-219-117-235.us-west-2.compute.amazonaws.com:8080/categories/main`, {
      method: 'GET',
      headers: { 
        "projectId": "Uun-OVEBx"
      }
    });
    const res = await response.json();

    dispatch({
      type: 'GETTING_MAIN',
      payload: res.data,
    })
  } catch (e) {
    console.log(e);
  }

  return dispatch({
    type: 'TOGGLE_LOADING_STATUS'
  });
}

export const changeIndex = (index) => ({
  type: 'CHANGE_STATE_INDEX',
  payload: index
});

export const changeHeaderToggle = () => dispatch => {
  return dispatch({
    type: 'HEADER_TOGGLE_STATUS'
  })
}