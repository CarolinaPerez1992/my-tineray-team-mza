import React from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from "../redux/actions/showActions";
import {useEffect} from "react";
import MyCardShows from "../components/MyCardShow";
import NotElementFound from "../components/NotElementFound";

export default function MyShows() {
  const dispatch = useDispatch();
  const { showsUser } = useSelector((state) => state.showReducer);
  const { getShowUser } = showActions;

  let userId = "636e78ac2ebb17b28fb470a2";

  useEffect(() => {
    dispatch(getShowUser(userId));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="cont-card">
        {showsUser.length > 0 ? (
          showsUser.map((cadaShow, id) => {
            return <MyCardShows datos={cadaShow} key={id} id={cadaShow._id} />;
          })
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
