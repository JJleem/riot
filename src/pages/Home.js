import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { riotAction } from "../redux/actions/riotAction";

const Home = () => {
  const dispatch = useDispatch();
  const { puuids } = useSelector((state) => state);

  useEffect(() => {
    dispatch(riotAction.getDatas());
  }, []);
  // console.log(puuids);
  return <div>{puuids}</div>;
};

export default Home;
