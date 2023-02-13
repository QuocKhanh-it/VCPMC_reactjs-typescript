import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ModalLyDoHuyHD from "../../../components/modal/modalLyDoHuyHD";
import TableDSHopDong from "../../../components/table/tbDSHopDong";
import CtrQLDSHopDong from "../../ControllerPageLayout/CtrQLDSHopDong";
import "./styles.scss";

const TabHDUyQuyen = () => {
  const [openModalLDH, SetopenModalLDH] = useState(false);
  const [valueModal, setValueModal] = useState({ soHD: "", lydoHuy: "" });
  const CancelModal = () => {
    SetopenModalLDH(false);
  };
  const OpenModalLyDOHuy = (value: { soHD: string; lydoHuy: string }) => {
    SetopenModalLDH(true);
    setValueModal(value);
    console.log(valueModal);
  };
  const history = useHistory();
  const pathname = history.location.pathname;
  const handleLoadPageCreate = () => {
    history.push(`${pathname}/createhd`);
  };

  const actionsDSHD = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/Add.png")}
          width={32}
        />
      ),
      title: "Thêm hợp đồng",
      onClickItem: handleLoadPageCreate,
    },
  ];
  return (
    <div className="TabHD-UyQuyen">
      <CtrQLDSHopDong />
      <TableDSHopDong handleOpenMDLDH={OpenModalLyDOHuy} />
      <ActionsPages dataRender={actionsDSHD} />

      <ModalLyDoHuyHD
        isOpenModal={openModalLDH}
        isCancel={CancelModal}
        Value={valueModal}
      />
    </div>
  );
};

export default TabHDUyQuyen;
