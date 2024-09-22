import { useState } from "react";
import { MdDoNotDisturb } from "react-icons/md";
import "./walletinfo.style.css";

const WalletNotConnected = () => {
  return (
    <div className="wallet-not-connected-component">
      <MdDoNotDisturb className="wallet-not-connected-icon" />
      <p>Wallet is not connected</p>
    </div>
  );
};

const WalletInfo = () => {
  const [isConnected] = useState(false);
  return (
    <div className="walletinfo-card-main">
      {isConnected ? "Connected" : <WalletNotConnected />}
    </div>
  );
};

export default WalletInfo;
