import React  from "react";

import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = (props) => {
  const {IsLogged, setIsLogged} = props
  return (
    <div className="c-app c-default-layout">
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
