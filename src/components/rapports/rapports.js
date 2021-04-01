/*  path / */
import React from "react";
//components
import { Link } from "react-router-dom";

const ListRapports = () => {
  return (
    <div>
      <Link to="rapports/add">add rapport</Link>
      <p>List rapport</p>
    </div>
  );
};

export default ListRapports;
