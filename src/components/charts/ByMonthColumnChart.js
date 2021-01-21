import React, { Fragment, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ColumnChart, Model } from "@gooddata/react-components";
import moment from "moment";

// COMPONENTS
import MonthSelect from "../selects/MonthSelect";

// CONSTANTS
import { CHART_PARAMS, DATE_FORMAT } from "../../constants/chartParams";

const ByMonthColumnChart = ({ year }) => {
  const [selectedMonth, setSelectedMonth] = useState(1);

  const measures = useMemo(() => [
    Model.measure(CHART_PARAMS.grossProfitMeasure)
      .localIdentifier("m1")
      .alias("$ Gross Profit"),
  ], []);

  const monthFilters = useMemo(() => {
    const monthMoment = moment(`${year}-${selectedMonth}`, 'YYYY-M');
    return [
      Model.absoluteDateFilter(
        CHART_PARAMS.dateAttribute,
        monthMoment.startOf("month").format(DATE_FORMAT),
        monthMoment.endOf("month").format(DATE_FORMAT)
      )
    ]
  }, [selectedMonth, year]);

  return (
    <Fragment>
      <h1>
        $ Gross Profit in month{' '}
        <MonthSelect defaultValue={1} onChange={setSelectedMonth} />{' '}
        {year}
      </h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={monthFilters}
          projectId={CHART_PARAMS.projectId}
        />
      </div>
    </Fragment>
  );
};

ByMonthColumnChart.propTypes = {
  year: PropTypes.number.isRequired,
};

export default ByMonthColumnChart;
