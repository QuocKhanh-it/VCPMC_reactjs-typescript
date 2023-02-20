import React, { useState } from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import { Space, Switch } from "antd";
import { Link, useHistory } from "react-router-dom";
import CtrBCDoanhThu from "../../ControllerPageLayout/CtrBaoCaoDoanhThu";



const ContentPageBaoCaoDT = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    tenTB: string;
    trangThai: number;
    diaDiem: string;
    hanHD: string;
    macAdress: string;
    memory: string;
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "tenTB",
      key: "tenTB",
    },
    {
      key: "actionHuy",
      render: (_, { trangThai }) => (
        <>
          <Space size="middle">
            <div>
              {trangThai === 1 ? (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Egreen.png")}
                    alt="hoạt động"
                  />
                  <p>Đang kích hoạt | Đang hoạt động </p>
                </div>
              ) : trangThai === 2 ? (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Ered.png")}
                    alt="Ngưng kích hoạt"
                  />
                  <p>Ngừng kích hoạt</p>
                </div>
              ) : (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Ered.png")}
                    alt="Khóa"
                  />
                  <p>Đang bị khoá</p>
                </div>
              )}
            </div>
          </Space>
        </>
      ),
    },
    {
      title: "Địa điểm",
      dataIndex: "diaDiem",
      key: "diaDiem",
    },

    {
      title: "Hạn hợp đồng",
      dataIndex: "hanHD",
      key: "hanHD",
    },
    {
      title: "MAC Addresss",
      dataIndex: "macAdress",
      key: "macAdress",
    },
    {
      title: "Memory",
      dataIndex: "memory",
      key: "memory",
    },
  ];
  const actionsPageQLTB = [


    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/receipt.png")}
          width={32}
          alt="Báo cáo chi tiết"
        />
      ),
      title: "Báo cáo chi tiết",
      onClickItem: () => {},
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenTB: "Device A12231",
      trangThai: i > 2 ? 0 : i,
      diaDiem: "86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh",
      hanHD: "string",
      macAdress: "123.12.156.10",
      memory: "0.00GB/32GB",
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title="Báo cáo doanh thu" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <CtrBCDoanhThu/>
  
          <ActionsPages dataRender={actionsPageQLTB} />
        </div>
      </div>
    </div>
  );
};

export default ContentPageBaoCaoDT;
