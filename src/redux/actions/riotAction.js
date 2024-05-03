import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const getDatas = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_DATA_REQUEST",
      });
      const getpuuid = api.get(`?api_key=${API_KEY}`);
      console.log(getpuuid);
      // const topRatedMovieApi = api.get(
      //   `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      // );
      // const upComingMovieApi = api.get(
      //   `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      // );
      // const genereApi = api.get(
      //   `/genre/movie/list?api_key=${API_KEY}&language=ko`
      // );
      const [puuids] = await Promise.all([
        getpuuid,
        // topRatedMovieApi,
        // upComingMovieApi,
        // genereApi,
      ]);
      // console.log(getpuuid, puuids);
      dispatch({
        type: "GET_DATA_SUCCESS",
        payload: {
          getpuuid: puuids.puuid,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_DATA_FAILURE" });
    }
  };
};
export const riotAction = { getDatas };
