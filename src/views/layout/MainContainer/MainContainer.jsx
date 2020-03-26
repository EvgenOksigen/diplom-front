import React from "react";

import "./MainContainer.scss";

const MainContainer = ({ children, className }) => (
  <main className={className}>{children}</main>
);

export default MainContainer;
