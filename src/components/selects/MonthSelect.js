import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// COMPONENTS
import Select from "./Select";

const MonthSelect = ({ defaultValue, options, ...otherProps }) => {
  const { t } = useTranslation();

  const selectOptions = useMemo(() => {
    if (options) return options;

    return [
      { value: 1, label: t("month.jan") },
      { value: 2, label: t("month.feb") },
      { value: 3, label: t("month.mar") },
      { value: 4, label: t("month.apr") },
      { value: 5, label: t("month.may") },
      { value: 6, label: t("month.jun") },
      { value: 7, label: t("month.jul") },
      { value: 8, label: t("month.aug") },
      { value: 9, label: t("month.sep") },
      { value: 10, label: t("month.oct") },
      { value: 11, label: t("month.nov") },
      { value: 12, label: t("month.dec") },
    ]
  }, [options]);

  return <Select options={selectOptions} defaultValue={defaultValue} {...otherProps} />
};

MonthSelect.propTypes = {
  defaultValue: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })),
};

MonthSelect.defaultProps = {
  defaultValue: 1,
  options: null,
}

export default MonthSelect;
