import React from "react";
import { useHistory } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import TableHDKhaiThac from "../../../components/table/tbHDKhaiThac";
import CtrlQLHDKhaiThac from "../../ControllerPageLayout/CtrlQLHDKhaiThac";
import "./styles.scss";
const TabHDKhaiThac = () => {

  const history = useHistory()
  const pathname = history.location.pathname
const handleLoadPageCreate =()=>{
  history.push(`${pathname}/create_hdkt`)
}



const actionsDSHDKhaiThac = [
  {
    linkIcon: (
      <img src={require('../../../assets/image/action-icon/Add.png')} width={32}/>

    ),
    title: "Thêm hợp đồng",
    onClickItem:handleLoadPageCreate
  },
];
  return (
    <div className="TabHDKhaiThac">
      <CtrlQLHDKhaiThac />
      <TableHDKhaiThac />


      <ActionsPages dataRender={actionsDSHDKhaiThac}/>
    </div>
  );
};

export default TabHDKhaiThac;
