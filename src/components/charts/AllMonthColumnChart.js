import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ColumnChart } from "@gooddata/react-components";

const AllMonthColumnChart = ({ measures, projectId, viewBy }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <h1>{t("grossProfitAllMonthTitle")}</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </Fragment>
  );
};

AllMonthColumnChart.propTypes = {
  measures: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectId: PropTypes.string.isRequired,
  viewBy: PropTypes.object.isRequired,
};

export default AllMonthColumnChart;
