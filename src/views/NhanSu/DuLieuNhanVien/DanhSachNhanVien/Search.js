import React, { useState } from "react";

import { Autocomplete } from "@material-ui/lab";

import {
  MenuItem,
  FormControl,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    //textAlign: "center",
  },
  date: {
    width: theme.spacing(24),
    marginRight: theme.spacing(2),
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const { Filter, setFilter } = props;

  const [ListOrgStructure, setListOrgStructure] = useState(initOrgStructure);

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Mã nhân viên
          <TextField
            placeholder="Vui lòng nhập"
            value={!Filter.CodeEmp ? "" : Filter.CodeEmp}
            onChange={(event) => {
              if ("" !== event.target.value.trim())
                return setFilter({
                  ...Filter,
                  ...{ CodeEmp: event.target.value.trim() },
                });
              const { CodeEmp, ...FilterNew } = Filter;
              setFilter(FilterNew);
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Tên nhân viên
          <TextField
            value={!Filter.ProfileName ? "" : Filter.ProfileName}
            onChange={(event) => {
              if ("" !== event.target.value.trim())
                return setFilter({
                  ...Filter,
                  ...{ ProfileName: event.target.value.trim() },
                });
              const { ProfileName, ...FilterNew } = Filter;
              setFilter(FilterNew);
            }}
            placeholder="Vui lòng nhập"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Số CMND
          <TextField
            value={!Filter.IDNo1 ? "" : Filter.IDNo1}
            onChange={(event) => {
              if ("" !== event.target.value.trim())
                return setFilter({
                  ...Filter,
                  ...{ IDNo1: event.target.value.trim() },
                });
              const { IDNo1, ...FilterNew } = Filter;
              setFilter(FilterNew);
            }}
            placeholder="Vui lòng nhập"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Thẻ căn cước CD
          <TextField
            value={!Filter.IDNo2 ? "" : Filter.IDNo2}
            onChange={(event) => {
              if ("" !== event.target.value.trim())
                return setFilter({
                  ...Filter,
                  ...{ IDNo2: event.target.value.trim() },
                });
              const { IDNo2, ...FilterNew } = Filter;
              setFilter(FilterNew);
            }}
            placeholder="Vui lòng nhập"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Phòng ban
          {
            <Autocomplete
              filterSelectedOptions
              multiple
              limitTags={3}
              defaultValue={[]}
              options={ListOrgStructure}
              getOptionLabel={(option) =>
                `${option.OrgStructureName}-${option.Code}`
              }
              getOptionSelected={(option, value) => option.ID === value.ID}
              renderInput={(params) => (
                <TextField {...params} size="small" variant="outlined" />
              )}
              onChange={(event, item) => {
                if (0 !== item.length) {
                  console.log(item);
                  setFilter({
                    ...Filter,
                    ...{ OrgStructureID: { $in: item.map((i) => i.ID) } },
                  });
                }
              }}
            />
          }
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Chức vụ
            {
              <TextField
                value={!Filter.PositionID ? "" : Filter.PositionID}
                onChange={(event) => {
                  if ("" !== event.target.value.trim())
                    return setFilter({
                      ...Filter,
                      ...{ PositionID: event.target.value.trim() },
                    });
                  const { PositionID, ...FilterNew } = Filter;
                  setFilter(FilterNew);
                }}
                size="small"
                select
                variant="outlined"
              >
                {GenderValue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Giới tính
            {
              <TextField
                select
                value={!Filter.Gender ? "" : Filter.Gender}
                onChange={(event) => {
                  if ("" !== event.target.value.trim())
                    return setFilter({
                      ...Filter,
                      ...{ Gender: event.target.value.trim() },
                    });
                  const { Gender, ...FilterNew } = Filter;
                  setFilter(FilterNew);
                }}
                size="small"
                variant="outlined"
              >
                {GenderValue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Trạng thái
            {
              <TextField
                value={!Filter.StatusSyn ? "" : Filter.StatusSyn}
                onChange={(event) => {
                  if ("" !== event.target.value.trim())
                    return setFilter({
                      ...Filter,
                      ...{ StatusSyn: event.target.value.trim() },
                    });
                  const { StatusSyn, ...FilterNew } = Filter;
                  setFilter(FilterNew);
                }}
                variant="outlined"
                size="small"
                select
              >
                {StatusSynValue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
          </FormControl>
        </Grid>
      </Grid>
      {
        <Grid className={classes.paper} container spacing={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={5}>
              <FormControl fullWidth>
                Ngày vào làm
                <div style={{ paddingTop: "10px" }}>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    clearable
                    label="Từ ngày"
                    size="small"
                    fullWidth={false}
                    className={classes.date}
                    emptyLabel="Chọn ngày..."
                    format="MM/dd/yyyy"
                    value={
                      !Filter.DateHire
                        ? null
                        : !Filter.DateHire["$gt"]
                        ? null
                        : Filter.DateHire["$gt"]
                    }
                    maxDate={
                      !Filter.DateHire
                        ? new Date()
                        : !Filter.DateHire["$lte"]
                        ? new Date()
                        : Filter.DateHire["$lte"]
                    }
                    onChange={(date) => {
                      if (null !== date)
                        return setFilter({
                          ...Filter,
                          ...{ DateHire: { ...Filter.DateHire, $gt: date } },
                        });
                      if (!Filter.DateHire["$lte"]) {
                        const { DateHire, ...FilterNew } = Filter;
                        return setFilter(FilterNew);
                      }
                      const { $gt, ...DateHireNew } = Filter.DateHire;
                      setFilter({ ...Filter, DateHire: DateHireNew });
                    }}
                  />
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    clearable
                    size="small"
                    fullWidth={false}
                    className={classes.date}
                    minDate={
                      !Filter.DateHire
                        ? 0
                        : !Filter.DateHire["$gt"]
                        ? 0
                        : Filter.DateHire["$gt"]
                    }
                    maxDate={new Date()}
                    label="Đến ngày"
                    emptyLabel="Chọn ngày..."
                    format="MM/dd/yyyy"
                    value={
                      !Filter.DateHire
                        ? null
                        : !Filter.DateHire["$lte"]
                        ? null
                        : Filter.DateHire["$lte"]
                    }
                    onChange={(date) => {
                      if (null !== date)
                        return setFilter({
                          ...Filter,
                          ...{ DateHire: { ...Filter.DateHire, $lte: date } },
                        });
                      if (!Filter.DateHire["$gt"]) {
                        const { DateHire, ...FilterNew } = Filter;
                        return setFilter(FilterNew);
                      }
                      const { $lte, ...DateHireNew } = Filter.DateHire;
                      setFilter({ ...Filter, DateHire: DateHireNew });
                    }}
                  />
                </div>
              </FormControl>
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      }
    </Grid>
  );
};

export default Search;

const GenderValue = [
  {
    value: "",
    label: "None",
  },
  {
    value: "E_MALE",
    label: "Nam",
  },
  {
    value: "E_FEMALE",
    label: "Nữ",
  },
];

const StatusSynValue = [
  {
    value: "",
    label: "None",
  },
  {
    value: "E_HIRE",
    label: "Đang làm việc",
  },
  {
    value: "E_STOP",
    label: "Nghỉ việc",
  },
];

const initOrgStructure = [
  {
    ID: "1",
    OrgStructureName: "1888",
    Code: "18888",
  },
  {
    ID: "2",
    OrgStructureName: "2aaa",
    Code: "2ssaa",
  },
  {
    ID: "3",
    OrgStructureName: "3saa",
    Code: "3ấda",
  },
];
