import React from "react";
import { useDispatch, useSelector } from "react-redux";
import tinerariesActions from "../redux/actions/tinerariesActions";
import NotElementFound from "../components/NotElementFound";
import { useEffect } from "react";
import MyCardTinerary from "../components/MyCardTinerary";

export default function MyTinerary() {
  const dispatch = useDispatch();
  const { tinerariesAdmin } = useSelector((state) => state.tineraryReducer);
  const { getTineraryUser } = tinerariesActions;

  let userId = "636e78ac2ebb17b28fb470a2";
  let citiId = "636e9b452367c51ce27eb194"
  

  useEffect(() => {
    dispatch(getTineraryUser(userId));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cont-card">
        {tinerariesAdmin.length > 0 ? (
          tinerariesAdmin.map((cadaPerfil, id) => {
            return (
              <MyCardTinerary
                datos={cadaPerfil}
                key={id}
                id={cadaPerfil._id}
                idAdm={userId}
              />
            );
          })
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
