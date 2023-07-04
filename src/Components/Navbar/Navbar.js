import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../Image/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchBlock, setSearchBlock] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchBlock("");
    navigate(`/detailBlock/${searchBlock}`);
  };

  const onChange = (event) => {
    setSearchBlock(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="d-flex text-decoration-none" to="/">
            <img src={logo} alt="logo" className="logo img-fluid me-2" />
            <div className="navbar-brand">
              Block<span>chain</span>
            </div>
          </Link>
          <div className="navbar-nav">
            <form onSubmit={handleSubmit} className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search Block By Enter Block No, Transaction, or Miner Name"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchBlock}
                onChange={onChange}
              />
              <button
                className="btn input-group-text"
                type="submit"
                id="basic-addon2"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div>
            <Link className="btn btn-outline-success" to={"/mineBlock"}>
              <i class="fa-solid fa-pen-to-square me-2"></i>Mine Block
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
