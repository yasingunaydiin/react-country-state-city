import React, { ChangeEvent, useEffect, useState } from "react";
import { State } from "../types";
import { GetState } from "../utils";
import Dropdown from "./Dropdown";
type PageProps = {
  containerClassName?: string;
  inputClassName?: string;
  onChange?: (e: State) => void;
  onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: State;
  countryid: number;
  placeHolder?: string;
};

const StateSelect = ({
  containerClassName,
  inputClassName,
  onTextChange,
  defaultValue,
  onChange,
  countryid,
  placeHolder,
}: PageProps) => {
  const [states, setStates] = useState<State[]>([]);
  useEffect(() => {
    if (countryid) {
      setStates(GetState(countryid));
    }
  }, [countryid]);
  return (
    <>
      <div className={containerClassName} style={{ position: "relative" }}>
        <Dropdown
          placeHolder={placeHolder}
          options={states}
          onChange={(value) => {
            if (onChange) {
              onChange(value as State);
            }
          }}
          onTextChange={onTextChange}
          defaultValue={defaultValue}
          inputClassName={inputClassName}
        />
      </div>
    </>
  );
};

export default StateSelect;
