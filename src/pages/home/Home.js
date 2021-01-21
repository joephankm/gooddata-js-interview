import React, { Fragment } from "react";

// COMPONENTS
import ByMonthColumnChart from"../../components/charts/ByMonthColumnChart";
import AllMonthColumnChart from"../../components/charts/AllMonthColumnChart";

const Home = () => {
  return (
    <Fragment>
      <ByMonthColumnChart year={2016} />
      <AllMonthColumnChart />
    </Fragment>
  );
}

export default Home;
