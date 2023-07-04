import React, { useContext, useEffect } from "react";
import "../BlockSection/BlockSection.css";
import bitcoin from "../../Image/bitcoin.svg";
import Card from "../Card/Card";
import Table from "../Table/Table";
import BlockchainContex from "../../Context/blockchainContex";
import { Link } from "react-router-dom";

const BlockSection = () => {
  const context = useContext(BlockchainContex);
  const { blocks, getBlocks } = context;

  useEffect(() => {
    getBlocks();
  }, []);

  return (
    <>
      <div className="blockSection pad-56">
        <div className="top d-flex align-items-center">
          <img src={bitcoin} className="img-fluid me-3" />
          <h2>Latest BTC Blocks</h2>
        </div>
        <div className="slider">
          {blocks &&
            blocks.map((block) => {
              return (
                <Link to={`/detailBlock/${block.blockNo}`}>
                  <Card blockNo={block.blockNo} />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="blockSectionBody">
        <Table />
      </div>
    </>
  );
};

export default BlockSection;
