import React, { FunctionComponent, useState, Dispatch } from "react";
import "./useSearch.css";

const useSearch = (label: string, defaultState: string) => {
  const [state, setState] = useState(defaultState);
  const id = `use-search-${label.toLowerCase()}`;

  const Search: FunctionComponent = () => (
    <input
      type="text"
      required
      id={id}
      data-testid={id}
      value={state}
      onChange={(ev) => setState(ev.target.value)}
      onBlur={(ev) => setState(ev.target.value)}
      placeholder={label}
    />
  );

  return [state, Search, setState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useSearch;
