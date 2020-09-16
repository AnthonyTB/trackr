import { RouteComponentProps } from "@reach/router";
import React, { FunctionComponent } from "react";
import "./Boundary.css";

const Boundary: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="Boundary">
      <h1>boundary</h1>
    </div>
  );
};

export default Boundary;
