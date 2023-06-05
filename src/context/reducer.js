export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, countryLists: action.payload };
    case "GET_DETAIL":
      return{...state, detail: action.payload}
      default:
      return state;
  }
};
