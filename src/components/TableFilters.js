import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStableState } from "../action/stable.action";
import { setListDisplay } from "../action/liste.action";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);

  const [showFavList, setShowFavList] = useState(false);

  // fonction redux pour envoyer des données
  const dispatch = useDispatch();

  // on va toggle au click sur le bouuton "avec stable coin" true or false
  //on va toggler au click sur le bouton "aucune liste" true or false
  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [showStable, showFavList]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setShowFavList(false)}
        >
          <p>Aucune liste</p>
        </div>
        <div className={showFavList ? "fav-list active" : "fav-list"} onClick={() => setShowFavList(true)}>
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon-star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
