import { BsBoxArrowUpLeft } from "react-icons/bs";
import { CiGrid42 } from "react-icons/ci";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import "./sidebar.style.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">CBDC</h2>
      <ul className="sidebar-links">
        <li className="sidebar-section-options">
          <CiGrid42 /> Dashboard
        </li>
        {/* Transfer Money Section */}
        <li className="sidebar-section-title">
          TRANSFER MONEY
        </li>
        <li className="sidebar-section-options">
          <RiContactsFill /> Contracts
        </li>
        <li className="sidebar-section-options">
          <BsBoxArrowUpLeft /> CBDC ID
        </li>
        {/* Transactions */}
        <li className="sidebar-section-title">
          TRANSACTIONS
        </li>
        <li className="sidebar-section-options">
          <TbNotes /> History
        </li>
        <li className="sidebar-section-options">
          <MdAccountBalanceWallet /> Balance
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;