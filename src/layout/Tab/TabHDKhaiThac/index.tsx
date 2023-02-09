import React from "react";
import ActionsQLDSHDKhaiThac from "../../../components/actionpages/qlHDKhaiThacAction";
import TableHDKhaiThac from "../../../components/table/tbHDKhaiThac";
import CtrlQLHDKhaiThac from "../../ControllerPageLayout/CtrlQLHDKhaiThac";
import "./styles.scss";
const TabHDKhaiThac = () => {
  return (
    <div className="TabHDKhaiThac">
      <CtrlQLHDKhaiThac />
      <TableHDKhaiThac />
      <ActionsQLDSHDKhaiThac/>
    </div>
  );
};

export default TabHDKhaiThac;
