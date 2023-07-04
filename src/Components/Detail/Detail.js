import React, { useState, useContext, useEffect } from "react";
import "../Detail/Detail.css";
import BlockchainContex from "../../Context/blockchainContex";
import Card from "../Card/Card";

const Detail = () => {
  const context = useContext(BlockchainContex);
  const { blockDetail, getBlockDetail } = context;

  useEffect(() => {
    setTimeout(() => {
      getBlockDetail();
    }, 2000);
  });

  if (!blockDetail) {
    return <div className="pad-56 loading">Loading Block details...</div>;
  }

  if (blockDetail.Success === false) {
    return (
      <div className="pad-56 loading">
        No BLock Found. Enter valid details to search..
      </div>
    );
  }

  if (blockDetail) {
    return (
      <div className="detail pad-56">
        <div className="top">
          <Card />
          <h2>Bitcoin Block {blockDetail.blockNo}</h2>
          <p>Mined on {blockDetail.date}</p>
        </div>
        <div className="body">
          <h4>Details</h4>
          <ul className="row">
            <li className="col-6">Miner Name</li>
            <li className="col-6 text-capitalize">{blockDetail.name}</li>
            <li className="col-6">PrevHash</li>
            <li className="col-6">{blockDetail.prevHash}</li>
            <li className="col-6">Hash</li>
            <li className="col-6">{blockDetail.hash}</li>
            <li className="col-6">Nonce</li>
            <li className="col-6">{blockDetail.nonce}</li>
            <li className="col-6">Transactions</li>
            <li className="col-6">{blockDetail.data} (BTC)</li>
            <li className="col-6">TimeStamp</li>
            <li className="col-6">{blockDetail.timestamp}</li>
            <li className="col-6">Mined Time</li>
            <li className="col-6">{blockDetail.mineTime}ms</li>
            <li className="col-6">Difficulty</li>
            <li className="col-6">{blockDetail.diffculty}</li>
            <li className="col-6">Reward</li>
            <li className="col-6">1 (BTC)</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Detail;
