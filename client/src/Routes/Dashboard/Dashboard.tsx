import React, {
  useEffect,
  useState,
  useContext,
  FunctionComponent,
} from "react";
import "./Dashboard.css";
import { Context } from "../../Components/Context/Context";
import { DashStats, DashPlatforms } from "./Components";
import { useSearch, useMessage } from "../../Components/";
import { MessageType } from "../../enums";
import { RouteComponentProps } from "@reach/router";

const Dashboard: FunctionComponent<RouteComponentProps> = () => {
  const { currentUser } = useContext(Context);
  const [searchResult, Search] = useSearch("Search by username", "");
  const [message, MessageComponent] = useMessage(
    currentUser
      ? `Welcome Back, ${currentUser.firstname}`
      : `Welcome, New User`,
    MessageType.Welcome
  );

  return (
    <div className="Dashboard">
      <MessageComponent />
      <div className="top-center">
        <Search />
      </div>
      <div className="container">
        <div className="container-item">
          <DashStats />
        </div>
        <div className="container-item">
          <DashPlatforms />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
