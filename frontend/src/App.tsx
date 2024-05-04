import { useState } from "react";
import logo from "./assets/images/logo-universal.png";

import { Greet } from "../wailsjs/go/main/App";
import { Tab, Tabs, TabsExpander } from "@blueprintjs/core";

function App() {
  return (
    <div className="" style={{ padding: "1.618rem", fontFamily: "IBM Plex Sans" }}>
      <h1>Bookie</h1>
      <Tabs id="main" defaultSelectedTabId="bs" large={true} vertical={true}>
        <Tab id="bs" title="Balance Sheet" panel={<h2 className="bp5-heading">Balance Sheet</h2>} />
        <Tab id="pnl" title="Profit & Loss" panel={<h2>Profit & Loss</h2>} />
        <Tab id="acc" title="Accounts" panel={<h2>Accounts</h2>} />
        <Tab id="trx" title="Transactions" panel={<h2>Transactions</h2>} />
        <TabsExpander />
        <Tab id="settings" title="Settings" panel={<h2>Settings</h2>} />
      </Tabs>
    </div>
  );
}

export default App;
