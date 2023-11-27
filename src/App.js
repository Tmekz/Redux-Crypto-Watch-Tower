import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import Table from "./components/Table";
import GlobalChart from "./components/GlobalChart";
import ToTop from "./components/ToTop";
import axios from "axios";

import { data } from "./db";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  //  ❗❗ probleme DB limite de connexion lors du fetch en ligne sur gecko api ❗❗
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`
  //     )
  //     .then((res) => setCoinsData(res.data));

  //Import les data via le ficheir JS en local car bug avec API en ligne
  useEffect(() => {
    setCoinsData(data);

    // pour déplacer le table-header au scroll down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 145) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
      <ToTop />
    </div>
  );
};

export default App;
