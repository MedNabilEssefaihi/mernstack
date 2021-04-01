/* path /add */
import React, { useState } from "react";
// package
const axios = require("axios");

const AddUser = () => {
  const [rapportInfo, setRapportInfo] = useState({
    projet: "",
    consultant: [],
    client: [],
    kilo_depart: null,
    kilo_retour: null,
    tache_effectuee: "",
  });

  console.log(rapportInfo);

  const OnSubmit = (event) => {
    event.preventDefault();
    // send data to back-end
    axios
      .post("/rapports/add", rapportInfo)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    setRapportInfo({
      projet: "",
      consultant: [],
      client: [],
      kilo_depart: null,
      kilo_retour: null,
      tache_effectuee: "",
    });
  };

  return (
    <div className="addUser-form-container">
      <h2>Ajouter un nouvel utilisateur</h2>
      <form onSubmit={OnSubmit}>
        {/* projet */}
        <div className="form-group">
          <label>projet: </label>
          <input
            type="text"
            required
            className="form-control"
            value={rapportInfo.projet}
            onChange={(e) => {
              setRapportInfo({ ...rapportInfo, projet: e.target.value });
            }}
          />
        </div>
        {/* consultant */}
        <div className="form-group">
          <label>consultant: </label>
          <select
            placeholder="here"
            required
            className="form-control"
            value={rapportInfo.consultant}
            onChange={(e) => {
              setRapportInfo({ ...rapportInfo, consultant: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Select your option
            </option>
            {[1, 2].map(function (type, index) {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>

        {/* client */}
        <div className="form-group">
          <label>client: </label>
          <select
            placeholder="here"
            required
            className="form-control"
            value={rapportInfo.client}
            onChange={(e) => {
              setRapportInfo({ ...rapportInfo, client: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Select your option
            </option>
            {[1, 2].map(function (type, index) {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>

        {/* kilo_depart */}
        <div className="form-group">
          <label>Départ (Kilométre): </label>
          <input
            type="password"
            required
            minlength="8"
            className="form-control"
            value={rapportInfo.kilo_depart}
            onChange={(e) => {
              setRapportInfo({ ...rapportInfo, kilo_depart: e.target.value });
            }}
          />
        </div>
        {/* kilo_retour */}
        <div className="form-group">
          <label>Retour (Kilométre): </label>
          <input
            type="password"
            required
            minlength="8"
            className="form-control"
            value={rapportInfo.kilo_retour}
            onChange={(e) => {
              setRapportInfo({ ...rapportInfo, kilo_retour: e.target.value });
            }}
          />
        </div>

        {/* tache_effectuee */}
        <div className="form-group">
          <label>Tache effectuée: </label>
          <input
            type="text"
            // style={{ height: "142px" }}
            className="form-control"
            value={rapportInfo.kilo_retour}
            onChange={(e) => {
              setRapportInfo({ ...rapportInfo, kilo_retour: e.target.value });
            }}
          />
        </div>

        <div className="form-group">
          <br />
          <input
            type="submit"
            value="Ajouter un nouveau rapport"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
