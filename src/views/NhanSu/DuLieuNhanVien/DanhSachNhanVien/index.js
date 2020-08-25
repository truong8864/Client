import React, { useEffect, useState } from "react";

import { Grid, Paper } from "@material-ui/core";

import Search from "./Search";
import ToolBar from "./ToolBar";

import ProfileAPI from "../../../../api/hre_profile.api";

import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";

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
  const [RowSelected, setRowSelected] = useState(null)

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
        <Paper variant="outlined" className={classes.search}>
          <Search Filter={Filter} setFilter={setFilter} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.toolbar}>
          <ToolBar RowSelected={RowSelected} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.content}>
          <Content  RowSelected={RowSelected} setRowSelected={setRowSelected}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DanhSachNhanVien;
