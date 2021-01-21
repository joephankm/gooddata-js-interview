import React, { Fragment, useMemo } from "react";
import { ColumnChart, Model } from "@gooddata/react-components";

// CONSTANTS
import { CHART_PARAMS } from "../../constants/chartParams";

const AllMonthColumnChart = () => {
  const measures = useMemo(() => [
    Model.measure(CHART_PARAMS.grossProfitMeasure)
      .localIdentifier("m1")
      .alias("$ Gross Profit"),
  ], []);

  const viewBy = useMemo(
    () => Model.attribute(CHART_PARAMS.dateAttributeInMonths).localIdentifier("a1"),
    []
  );

  return (
    <Fragment>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={CHART_PARAMS.projectId}
        />
      </div>
    </Fragment>
  );
};

export default AllMonthColumnChart;
