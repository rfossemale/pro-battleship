const initialState = {
  matrix: [],
}
// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ON_SELECT_SQUARE": {
      console.log("reducer called ", action.type);
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
