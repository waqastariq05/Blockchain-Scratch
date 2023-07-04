import React, { useState } from "react";
import "../AddBlockForm/AddBlockForm.css";

const AddBlockForm = (props) => {
  const [mineBlock, setMineBlock] = useState({
    minerName: "",
    transaction: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/mine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: mineBlock.minerName,
        data: mineBlock.transaction,
      }),
    });
    const json = await response.json();
    setMineBlock({ minerName: "", transaction: "" });

    // Alert
    if (json.Success) {
      props.showAlert(
        "Mine Block Successfully",
        "success",
        "fa-solid fa-circle-check text-success"
      );
    }
  };

  const onChange = (event) => {
    setMineBlock({ ...mineBlock, [event.target.name]: event.target.value });
  };

  return (
    <div className="addBlock pad-56">
      <div className="top">
        <h2>Mining A New Block</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="minerName" class="form-label">
            Miner Name
          </label>
          <input
            type="text"
            class="form-control"
            id="minerName"
            name="minerName"
            value={mineBlock.minerName}
            onChange={onChange}
          />
        </div>
        <div class="mb-3">
          <label for="transaction" class="form-label">
            Enter Transaction
          </label>
          <textarea
            class="form-control"
            id="transaction"
            rows="3"
            name="transaction"
            value={mineBlock.transaction}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button type="submit" class="btn">
          Mining
        </button>
      </form>
    </div>
  );
};

export default AddBlockForm;
