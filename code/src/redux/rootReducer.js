const initialState = {
  data: [],
  caseSensitive: false,
  error: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, caseSensitive: !state.caseSensitive }
    case 'GET-BY-LENGTH':
      const filteredByLength = action.wordsArray.filter(item => item.length > action.filter );
      return { ...state,  data: filteredByLength}
    case 'GET-BY-SUBSTR':
      let filteredBySubstring;
      if (!state.caseSensitive) {
        filteredBySubstring = action.wordsArray.filter((item) => 
          item.toLowerCase().includes(action.filter.toLowerCase())
        );
      } else {
        filteredBySubstring = action.wordsArray.filter(item => item.includes(action.filter));
      }
      return { ...state,  data: filteredBySubstring}
    case 'ERROR':
      const flag = !state.error;
      return { ...state,  error: flag }
    default:
      return state;
  } 
}