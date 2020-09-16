import React, { useEffect, useReducer, createContext } from "react";
import { FetchMethod } from "../../enums";
import Token from "../../Helpers/Token";
import User from "../../Helpers/User";
import { ICurrentUser } from "../../interfaces";

interface IContext {
  isLoggedIn: boolean;
  currentUser: ICurrentUser;
  hasToken: boolean;
}

interface IReducer {
  type: string;
  payload: any;
}

export const Context = createContext<any>([]);

export const ContextProvider = (props: any) => {
  const Reducer = (prevState: any, { type, payload }: IReducer) => {
    switch (type) {
      case "isLoggedIn":
        return {
          ...prevState,
          isLoggedIn: payload.isLoggedIn,
        };
      case "currentUser":
        return {
          ...prevState,
          currentUser: payload.currentUser,
        };
      case "hasToken":
        return {
          ...prevState,
          hasToken: payload.hasToken,
        };
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    isLoggedIn: false,
    currentUser: null,
    hasToken: Token.hasAuthToken(),
  });

  const dataSetter = (section: string, data: any) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  useEffect(() => {
    if (state.hasToken && !state.currentUser) {
      processLogin(Token.getAuthToken());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentUser, state.hasToken]);

  // when a user logs in this function is triggered and it saves the users api token
  // to the user's brower local storage and stores the users data in state
  const processLogin = (authToken: any) => {
    Token.saveAuthToken(authToken);
    User.fetchCall("/users", FetchMethod.GET, {
      passedHeaders: { Authorization: `Bearer ${Token.getAuthToken()}` },
    })
      .then((res: any) => {
        dataSetter("currentUser", res.dbUser);
        dataSetter("isLoggedIn", true);
      })
      .catch((err) => processLogout());
  };

  // when a user logs out this function is called and it clears the user's api token from
  // their browsers local storage also it clears the value of currentUser in state
  const processLogout = () => {
    Token.clearAuthToken();
    dataSetter("currentUser", null);
    dataSetter("isLoggedIn", false);
  };

  const value = {
    dataSetter,
    currentUser: state.currentUser,
    hasToken: state.hasToken,
    isLoggedIn: state.isLoggedIn,
    processLogin,
    processLogout,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
