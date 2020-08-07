import React, { useEffect, useState } from "react";

import { Grid, Paper } from "@material-ui/core";

import Search from "./Search";

import ProfileAPI from "../../../../callAPI/Hre_Profile.api";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {},
  toolbar: {},
  content: {},
}));

const DanhSachNhanVien = (props) => {
  const classes = useStyles();

  const [Filter, setFilter] = useState({});

  const onSearch = async () => {
    try {
      const ListProfile = await ProfileAPI.getListProfile(Filter);
      console.log("DATA", ListProfile);
    } catch (error) {
      console.log("DanhSachNhanVien ProfileAPI ERR", error);
    }
  };

  return (
    <Grid>
      <Grid item>
        <Paper className={classes.search}>
          <Search Filter={Filter} setFilter={setFilter} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.toolbar}>ToolBar</Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.content}>Content</Paper>
      </Grid>
    </Grid>
  );
};

export default DanhSachNhanVien;
