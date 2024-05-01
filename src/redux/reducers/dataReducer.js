const initialState = {
  puuids: {},
  // topRatedMovies: {},
  // upComingMovies: {},
  // loading: true,
  // genereList: [],
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA_REQUEST":
      return {
        ...state,
        // loading: true,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        puuids: payload.puuids,
        // topRatedMovies: payload.topRatedMovies,
        // upComingMovies: payload.upComingMovies,
        // loading: false,
        // genereList: payload.genereList,
      };
    case "GET_DATA_FAILURE":
      return { ...state };
    default:
      return { ...state };
  }
};

export default dataReducer;
