import React, { Fragment, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ColumnChart, Model } from "@gooddata/react-components";
import moment from "moment";

// COMPONENTS
import MonthSelect from "../selects/MonthSelect";

// CONSTANTS
import { CHART_PARAMS, DATE_FORMAT } from "../../constants/chartParams";

const ByMonthColumnChart = ({ measures, projectId, defaultMonth, year }) => {
  const { t } = useTranslation();

  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

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
        {t("grossProfitInMonthTitle")}{" "}
        <MonthSelect defaultValue={defaultMonth} onChange={setSelectedMonth} />{" "}
        {year}
      </h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={monthFilters}
          projectId={projectId}
        />
      </div>
    </Fragment>
  );
};

ByMonthColumnChart.propTypes = {
  measures: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectId: PropTypes.string.isRequired,
  defaultMonth: PropTypes.number,
  year: PropTypes.number.isRequired,
};

ByMonthColumnChart.defaultProps = {
  defaultMonth: 1,
};

export default ByMonthColumnChart;
