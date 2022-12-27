import React from "react";

import { AppContext } from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <div className="text-3xl bg-red-800 mt-6">App</div>
    </AppContext>
  );
}

export default App;
