/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalActionHuyHD from "../../modal/modalActionhuy";
import ModalLyDoHuyHD from "../../modal/modalLyDoHuyHD";

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

const TableDSHopDong :React.FC<{handleOpenMDLDH : Function}> = (props) => {

  const history = useHistory();
  const pathname = history.location.pathname;
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
            <Space size="middle"onClick={()=>handleOpenMD({soHD, lydoHuy})} >
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

  const handleOpenMD =(Value: object) =>{
  props.handleOpenMDLDH(Value)

  }
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
    <div className="Table-DSHopDong">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 13 }}
      />
  
    </div>
  );
};

export default TableDSHopDong;
