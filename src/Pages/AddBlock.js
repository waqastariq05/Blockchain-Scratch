import React, { useState } from "react";
import AddBlockForm from "../Components/AddBlockForm/AddBlockForm";
import Alert from "../Components/Alert/Alert";
import { useNavigate } from "react-router-dom";

const AddBlock = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  // Show Alert Function
  const showAlert = (messsag, type, icon) => {
    setAlert({
      msg: messsag,
      type: type,
      icon: icon,
    });
    setTimeout(() => {
      setAlert(null);
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <Alert alert={alert} />
      <AddBlockForm showAlert={showAlert} />
    </div>
  );
};

export default AddBlock;
