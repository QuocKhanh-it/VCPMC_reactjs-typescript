import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ModalLyDoHuyHD from "../../../components/modal/modalLyDoHuyHD";
import TableDefault from "../../../components/table/tbdefault";
import CtrQLDSHopDong from "../../ControllerPageLayout/CtrQLDSHopDong";
import "./styles.scss";

interface DataType {
  key: number;
  soHD: string;
  nameHD: string;
  nguoiUyQuyen: string;
  quyenSH: string;
  hieuLuc: number;
  ngayTao: string;
  lydoHuy: string;
}
const TabHDUyQuyen = () => {
  const [openModalLDH, SetopenModalLDH] = useState(false);
  const [valueModal, setValueModal] = useState({ soHD: "", lydoHuy: "" });
  const CancelModal = () => {
    SetopenModalLDH(false);
  };
  const OpenModalLyDoHuy = (value: { soHD: string; lydoHuy: string }) => {
    SetopenModalLDH(true);
    setValueModal(value);

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

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "soHD",
      key: "soHD",
    },
    {
      title: "Tên hợp đồng",
      dataIndex: "nameHD",
      key: "nameHD",
    },
    {
      title: "Người uỷ quyền",
      dataIndex: "nguoiUyQuyen",
      key: "nguoiUyQuyen",
    },
    {
      title: "Quyền Sở Hữu",
      dataIndex: "quyenSH",
      key: "quyenSH",
    },
    {
      title: "Hiệu Lực",
      key: " hieuLuc",
      dataIndex: " hieuLuc",
      render: (_, { hieuLuc }) => (
        <>
          {/* 1 => mới
            2=> Còn thời hạn
            3=> hết hạn
            0 => hủy
        */}
          {hieuLuc === 1 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Egreen.png")}
              />
              <p>Mới</p>
            </div>
          ) : hieuLuc === 2 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
              <p>Còn thời hạn</p>
            </div>
          ) : hieuLuc === 3 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/ENot.png")}
              />
              <p>Đã hết hạn</p>
            </div>
          ) : (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Ered.png")}
              />
              <p>Đã hủy</p>
            </div>
          )}
        </>
      ),
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitiethd/${record.key}_${record.soHD}`}>Xem Chi tiết</Link>
        </Space>
      ),
    },
    {
      key: "actionHuy",
      render: (_, { hieuLuc , soHD , lydoHuy}) => (
        <>
          {hieuLuc === 0 ? (
            <Space size="middle"onClick={()=>OpenModalLyDoHuy({soHD, lydoHuy})} >
              <div>
              <a 
              >Lý do hủy</a>
              </div>
             
            </Space>
          ) : (
            ""
          )}
        </>
      ),
    },
  ];
  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      soHD: "HD123" + i,
      nameHD: "Hợp đồng uỷ quyền bài hát",
      nguoiUyQuyen: "Vương Anh Tú",
      quyenSH: "Người biểu diễn",
      hieuLuc: i > 3 ? 0 : i,
      ngayTao: " 01/04/2021 15:53:13",
      lydoHuy: i > 3 ? "Hủy hợp đồng để tạo hợp đồng mới với giá trị và thời hạn lâu hơn." : ""
    });
  }

  return (
    <div className="TabHD-UyQuyen">
      <CtrQLDSHopDong />

      <TableDefault columns={columns} data={data}/>
      {/* <TableDSHopDong handleOpenMDLDH={OpenModalLyDOHuy} /> */}
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
