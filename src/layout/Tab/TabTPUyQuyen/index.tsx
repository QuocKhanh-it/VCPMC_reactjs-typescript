import React, { MouseEventHandler, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import TabTacPhamEFooter from "../../../components/footer/tabTacPhamEditFooter";
import ModalActionHuy from "../../../components/modal/modalActionhuy";
import ModalActionThemBanGhi from "../../../components/modal/modalThemBanGhi";
import TableTabTPUyQuyen from "../../../components/table/tbTPUyQuyen";
import { IParams } from "../../../types";
import CtrlTabTacPhamUYQuyen from "../../ControllerPageLayout/CtrlTabTacPhamUYQuyen";
import "./styles.scss";
const TabTPUyQuyen = () => {
  const [openEdit, SetOpenEdit] = useState(false);
  const [openModalTCBG, SetOpenModalTCBG] = useState(false);
  const [openModalThemBG, SetOpenThemBG] = useState(false);
  const { action }: IParams = useParams();
  const history = useHistory();
  const pathname = history.location.pathname;

  const handleTuChoiBanGhi = () => {
    SetOpenModalTCBG(true);

  };
  const handelCancelModal =()=>{
    SetOpenModalTCBG(false)
  }
const handleCancelThemBG =() =>{
  SetOpenThemBG(false)
}

const handleOpenThemBG = () =>{
  SetOpenThemBG(true)
}





  const actionsTCBG = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
          alt ="Từ chối bản ghi"
        />
      ),
      title: "Từ chối bản ghi",
      onClickItem:handleTuChoiBanGhi
    },
  ];

  const OpenEditTable = () => {
    SetOpenEdit(true);
    if (!action) {
      history.push(`${pathname}/edit`);
    }
  };



  const actionsTPUQ = [
    {
      linkIcon: (
        <img
            src={require("../../../assets/image/action-icon/fi_edit.png")}
            width={32}
            alt= "Chỉnh sửa tác phẩm "
          />
      ),
      title: "Chỉnh sửa tác phẩm",
      onClickItem:OpenEditTable
    },
    {
      linkIcon: (
        <img
        src={require("../../../assets/image/action-icon/notes.png")}
        width={32}
        alt = "Gia hạn hợp đồng"
      />
      ),
      title: "Gia hạn hợp đồng",
      onClickItem: ()=>{}
    },
    {
      linkIcon: (
        <img
        src={require("../../../assets/image/action-icon/history.png")}
        width={32}
        alt ="Hủy hợp đồng"
      />
      ),
      title: "Hủy hợp đồng",
      onClickItem: ()=>{}
    },
    {
      linkIcon: (
        <img
            src={require("../../../assets/image/action-icon/Add.png")}
            width={32}
            alt="Thêm bản ghi"
          />
      ),
      title: "Thêm bản ghi",
      onClickItem:handleOpenThemBG
    },
  ];


  
  const CancelEditTable = () => {
    SetOpenEdit(false);
    history.push(pathname.slice(0, pathname.indexOf("/edit")));
  };
  return (
    <div className="TabTPUyQuyen">
      <CtrlTabTacPhamUYQuyen />

      <TableTabTPUyQuyen openTBEdit={openEdit} />
      {openEdit ? (
        <ActionsPages dataRender={actionsTCBG} />
      ) : (
        <ActionsPages dataRender={actionsTPUQ} />
        // <TacPhamUQActionsPage setTableEdit={OpenEditTable} />
      )}

      {openEdit ? <TabTacPhamEFooter cancelEdit={CancelEditTable} /> : ""}


      <ModalActionHuy
        title ={`Từ chối bản ghi`}
        holder = {`Cho chúng tôi biết lý do bạn muốn từ chối bản ghi này...`}
        txtBtnCancel ={" Hủy"}
        txtBtnSubmit ={ "Lưu"}
        isCancel={handelCancelModal}
        isOpenModal={openModalTCBG}

      />

      <ModalActionThemBanGhi 
      title="Thêm bản ghi mới" 
        isOpenModal ={openModalThemBG}
        isCancel ={handleCancelThemBG}
      />
    </div>
  );
};

export default TabTPUyQuyen;
