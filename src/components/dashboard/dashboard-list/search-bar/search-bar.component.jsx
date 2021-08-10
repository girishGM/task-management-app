import React from "react";
import { SearchBox } from "../../../shared/search-box/search-box.component";
import { ModelWindow } from "../../../shared/model-window/model-window.component";
import "./search-bar.style.css";

export const SearchBar = (props) => {
  return (
    <div className="row">
      <div className="col-4" style={{ textAlign: "left", paddingTop: "20px" }}>
        {" "}
        Tasks{" "}
      </div>
      <div
        className="col-8"
        style={{ textAlign: "right", marginBottom: "15px" }}
      >
        <SearchBox
          placeholder="search by task name"
          handleChange={props.onClickMethod}
        />
        <ModelWindow buttonText="+New Task" modelHeading="+New Task" />
      </div>
    </div>
  );
};
