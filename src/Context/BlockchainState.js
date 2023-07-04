import { useState, useEffect } from "react";
import BlockchainContex from "./blockchainContex";

const BlockchainState = (props) => {
  // Fetch All Blocks
  const [blocks, setBlocks] = useState([]);

  const getBlocks = async () => {
    const response = await fetch("http://localhost:5000/api/blocks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setBlocks(json);
  };

  // Fetch Block Details
  const [blockDetail, setBlockDetail] = useState(null);
  const getBlockDetail = async () => {
    try {
      const blockNo = window.location.pathname.split("/").pop();
      const response = await fetch(
        `http://localhost:5000/api/block/${blockNo}`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setBlockDetail(json);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <BlockchainContex.Provider
      value={{ blocks, getBlocks, blockDetail, getBlockDetail }}
    >
      {props.children}
    </BlockchainContex.Provider>
  );
};

export default BlockchainState;
