import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TacPhamUQActionsPage from "../../../components/actionpages/tacphamUQActionPage";
import TabTacPhamEFooter from "../../../components/footer/tabTacPhamEditFooter";
import TableTabTPUyQuyen from "../../../components/table/tbTPUyQuyen";
import { IParams } from "../../../types";
import CtrlTabTacPhamUYQuyen from "../../ControllerPageLayout/CtrlTabTacPhamUYQuyen";
import "./styles.scss";
const TabTPUyQuyen = () => {
  const [openEdit, SetOpenEdit] = useState(false);
  const {action} :IParams = useParams()
const history = useHistory()
const pathname = history.location.pathname

  const OpenEditTable = (toggle: boolean) => {
    SetOpenEdit(true);
    if(!action){
      history.push(`${pathname}/edit`)
    }

  };
  const CancelEditTable = () => {
    SetOpenEdit(false);
    history.push(pathname.slice(0, pathname.indexOf("/edit")))
  };
  return (
    <div className="TabTPUyQuyen">
      <CtrlTabTacPhamUYQuyen />

      <TableTabTPUyQuyen openTBEdit={openEdit} />
      <TacPhamUQActionsPage setTableEdit={OpenEditTable} />
    
      {
        openEdit ? <TabTacPhamEFooter cancelEdit={CancelEditTable} /> :""
      }
    </div>
  );
};

export default TabTPUyQuyen;
