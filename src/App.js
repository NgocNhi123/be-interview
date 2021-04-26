import "./App.css";
import Header from "../src/container/Header/Header";
import Methods from "../src/container/Methods/Methods";
import Dialog from "../src/container/Dialog/Dialog";
import { useState } from "react";
import * as Fetch from "../src/utils/Fetch";
import { URL } from "../src/common/index";

function App() {
  const [showDiaglog, setShowDialog] = useState(false);

  const handleOpenDialog = (amount) => {
    getData(amount);
  };

  async function getData(amount) {
    let data = await Fetch.post(`${URL}/card`, amount);
    if (data && data.data && data.data.success) setShowDialog(true);
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <div className="container">
      {showDiaglog && <Dialog onClick={handleCloseDialog} />}
      <Header />
      <Methods openDialog={handleOpenDialog} />
    </div>
  );
}

export default App;
