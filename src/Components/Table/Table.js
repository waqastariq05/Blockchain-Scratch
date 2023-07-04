import React, { useContext } from "react";
import "../Table/Table.css";
import BlockchainContex from "../../Context/blockchainContex";
import { Link } from "react-router-dom";

const Table = () => {
  const context = useContext(BlockchainContex);
  const { blocks } = context;

  return (
    <div class="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Block No</th>
            <th scope="col">PrevHash</th>
            <th scope="col">Hash</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Miner</th>
            <th scope="col">Mined</th>
            <th scope="col">Nonce</th>
            <th scope="col">Transaction</th>
          </tr>
        </thead>
        <tbody>
          {blocks &&
            blocks.map((block) => {
              return (
                <tr key={block.blockNo}>
                  <th scope="row">
                    <Link to={`/detailBlock/${block.blockNo}`}>
                      {block.blockNo}
                    </Link>
                  </th>
                  <td>{block.prevHash.substring(0, 9)}</td>
                  <td>{block.hash.substring(0, 9)}</td>
                  <td>{block.timestamp}</td>
                  <td>{block.name}</td>
                  <td>{block.mineTime + "ms"}</td>
                  <td>{block.nonce}</td>
                  <td>{block.data + " (BTC)"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
