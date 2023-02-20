import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import ContentPageQLy from "../../layout/ContentLayout/ContentPageQLy";
import { IParams } from "../../types";
import { useParams } from "react-router-dom";
import ContentChiTietHD from "../../layout/ContentLayout/ContentChiTietHD";
import ContentCreateHD from "../../layout/ContentLayout/ContentCreateHD";
import ContentCreateHDKT from "../../layout/ContentLayout/ContentCreateHDKT";
import ContentChiTietHDKT from "../../layout/ContentLayout/ContentChiTietHDKT";
import ContentPageQLDonViSD from "../../layout/ContentLayout/ContentQLDonviSD";
import ContentPageQLDoitacUQ from "../../layout/ContentLayout/ContentQLDoiTacUQ";
import ContentPageQLThietBi from "../../layout/ContentLayout/ContentQLThietBi";
import UpdateDoiTacUQ from "../../layout/ContentLayout/ContentQLDoiTacUQ/updateDoiTacUQ";

const { Content } = Layout;

const QuanLyPage = () => {
  const { page, control, tag, id }: IParams = useParams();

  const showContent = () => {

    switch (`${tag}`) {
      case "capnhat-doitac":
        return <UpdateDoiTacUQ />;
      case "chitiethd":
        return <ContentChiTietHD />;
      case "chitiet_hdkt":
        return <ContentChiTietHDKT />;
        case "createhd":
          return <ContentCreateHD />;
      case "create_hdkt":
        return <ContentCreateHDKT />;
      default:
        switch (`${control}`) {
          case "ql-hopdong":
            return <ContentPageQLy />;
          case "donvisudung":
            return <ContentPageQLDonViSD />;

          case "donviuyquyen":
            return <ContentPageQLDoitacUQ />;

          case "ql-thietbi":
            return <ContentPageQLThietBi/>;

          default:
            break;
        }
        break;
    }
  };

  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
            {/* {tag === "chitiethd" ? (
              <ContentChiTietHD />
            ) : tag === "chitiet_hdkt" ? (
              <ContentChiTietHDKT />
            ) : tag === "createhd" ? (
              <ContentCreateHD />
            ) : tag === "create_hdkt" ? (
              <ContentCreateHDKT />
            ) : control === "donvisudung" ? (
              <ContentPageQLDonViSD />
            ) : control === "donviuyquyen" ? (
              <ContentPageQLDoitacUQ />
            ) : control === "ql-thietbi" ? (
              <ContentPageQLThietBi />
            ) : (
              <ContentPageQLy />
            )} */}

            {showContent()}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default QuanLyPage;
