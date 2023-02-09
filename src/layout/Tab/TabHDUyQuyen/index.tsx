import React from "react";
import ActionsQLDSHD from "../../../components/actionpages/qlDSHopDongActions";
import TableDSHopDong from "../../../components/table/tbDSHopDong";
import CtrQLDSHopDong from "../../ControllerPageLayout/CtrQLDSHopDong";
import "./styles.scss"

const TabHDUyQuyen = () => {
  return (
    <div className="TabHD-UyQuyen">
      <CtrQLDSHopDong />
      <TableDSHopDong/>
      <ActionsQLDSHD/>
    </div>
  );
};

export default TabHDUyQuyen;
