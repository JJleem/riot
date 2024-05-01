import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

const getDatas = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_DATA_REQUEST",
      });
      const getpuuid = api.get(
        `/임재준/KR1?api_key=RGAPI-6a61f3c4-b19e-4bd3-a7b4-0df0cc36151d`
      );
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
