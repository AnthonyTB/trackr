import React, { useState, FunctionComponent, Dispatch, useEffect } from "react";
import "./useMessage.css";

const useMessage = (defaultState: string, type: string) => {
  const [message, messageUpdater] = useState<string | null>(defaultState);

  useEffect(() => {
    if (message !== null) {
      setTimeout(() => messageUpdater(null), 5000);
    }
  }, [message]);

  const Message: FunctionComponent = () => <h2 className={type}>{message}</h2>;

  return [message, Message, messageUpdater] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useMessage;
