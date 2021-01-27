import React, { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Model } from "@gooddata/react-components";

// COMPONENTS
import ByMonthColumnChart from"../../components/charts/ByMonthColumnChart";
import AllMonthColumnChart from"../../components/charts/AllMonthColumnChart";

// CONSTANTS
import { CHART_PARAMS } from "../../constants/chartParams";

const Home = () => {
  const { t } = useTranslation();

  const measures = useMemo(() => [
    Model.measure(CHART_PARAMS.grossProfitMeasure)
      .localIdentifier("m1")
      .alias(t("grossProfit")),
  ], []);

  const viewBy = useMemo(
    () => Model.attribute(CHART_PARAMS.dateAttributeInMonths).localIdentifier("a1"),
    []
  );

  return (
    <Fragment>
      <ByMonthColumnChart measures={measures} projectId={CHART_PARAMS.projectId} year={2016} />
      <AllMonthColumnChart measures={measures} projectId={CHART_PARAMS.projectId} viewBy={viewBy} />
    </Fragment>
  );
}

export default Home;
