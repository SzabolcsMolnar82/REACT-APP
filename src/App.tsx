import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert is enabled!</Alert>}
        <Button onClick={() => setAlertVisibility(true)}>Test Button</Button>
      </div>
    </>
  );
}

export default App;
