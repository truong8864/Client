import React  from "react";

import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& table": {
      "table-layout": "fixed",
    },
    "& th ": {
      "padding":"7px"
    },
    "& td ": {
      "padding":"7px"
    },
  },
}));

const TheLayout = (props) => {

  const classes = useStyles();

  const {IsLogged, setIsLogged} = props
  return (
    <div className={`c-app c-default-layout ${classes.root}`} >
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent IsLogged={IsLogged} setIsLogged={setIsLogged} />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
