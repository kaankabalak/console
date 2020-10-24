import React, { useState, forwardRef, useImperativeHandle } from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import { fieldBasic, tooltipHelper } from "../common/styleLibrary";

const styles = (theme: Theme) =>
  createStyles({
    dateInput: {
      "&:not(:last-child)": {
        marginRight: 22,
      },
    },
    ...fieldBasic,
    ...tooltipHelper,
    fieldContainer: {
      ...fieldBasic.fieldContainer,
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "#9c9c9c 1px solid",
      paddingBottom: 10,
      marginTop: 11,
    },
  });

const SelectStyled = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiSelect-icon": {
        color: "#000",
        "&.Mui-disabled": {
          color: "#9c9c9c",
        }
      },
    },
    input: {
      borderBottom: 0,
      fontSize: 12,
    },
  })
)(InputBase);

interface IDateSelectorProps {
  classes: any;
  id: string;
  label: string;
  disableOptions?: boolean;
  tooltip?: string;
}

const DateSelector = forwardRef(({
  classes,
  id,
  label,
  disableOptions = false,
  tooltip = "",
}: IDateSelectorProps, ref: any) => {
  useImperativeHandle(ref, () => ({ resetDate }));

  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const resetDate = () => {
    setMonth("");
    setDay("");
    setYear("");
  }

  const onMonthChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setMonth(e.target.value as string);
  };

  const onDayChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setDay(e.target.value as string);
  };

  const onYearChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setYear(e.target.value as string);
  };

  return (
    <Grid item xs={12} className={classes.fieldContainer}>
      <InputLabel htmlFor={id} className={classes.inputLabel}>
        <span>{label}</span>
        {tooltip !== "" && (
          <div className={classes.tooltipContainer}>
            <Tooltip title={tooltip} placement="top-start">
              <HelpIcon className={classes.tooltip} />
            </Tooltip>
          </div>
        )}
      </InputLabel>
      <div>
        <FormControl disabled={disableOptions} className={classes.dateInput}>
          <Select
            id={`${id}-month`}
            name={`${id}-month`}
            value={month}
            displayEmpty
            onChange={onMonthChange}
            input={<SelectStyled />}
          >
            <MenuItem value="" disabled>
              {"<Month>"}
            </MenuItem>
            <MenuItem value={"1"}>January</MenuItem>
            {/* {options.map((option) => (
              <MenuItem
                value={option.value}
                key={`select-${name}-${option.label}`}
              >
                {option.label}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
        <FormControl disabled={disableOptions} className={classes.dateInput}>
          <Select
            id={`${id}-day`}
            name={`${id}-day`}
            value={day}
            displayEmpty
            onChange={onDayChange}
            input={<SelectStyled />}
          >
            <MenuItem value="" disabled>
              {"<Day>"}
            </MenuItem>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            {/* {options.map((option) => (
              <MenuItem
                value={option.value}
                key={`select-${name}-${option.label}`}
              >
                {option.label}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
        <FormControl disabled={disableOptions} className={classes.dateInput}>
          <Select
            id={`${id}-year`}
            name={`${id}-year`}
            value={year}
            displayEmpty
            onChange={onYearChange}
            input={<SelectStyled />}
          >
            <MenuItem value="" disabled>
              {"<Year>"}
            </MenuItem>
            <MenuItem value={"2020"}>2020</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
            {/* {options.map((option) => (
              <MenuItem
                value={option.value}
                key={`select-${name}-${option.label}`}
              >
                {option.label}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </div>
    </Grid>
  );
});

export default withStyles(styles)(DateSelector);
