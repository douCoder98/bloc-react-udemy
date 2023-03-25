const INITIAL_STATES = {
  articles: [],
};

function articleReducer(state = INITIAL_STATES, action) {
  switch (action.type) {
    case "LOADARTICLES":
      return {
        articles: action.payload,
      };
    case "ADDARTICLE":
      const newArr = [...state.articles];
      newArr.unshift(action.payload);
      return {
        articles: newArr,
      };

    default:
      break;
  }

  return state;
}

export default articleReducer;

export const getArticles = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADARTICLES",
        payload: data,
      });
    });
};
