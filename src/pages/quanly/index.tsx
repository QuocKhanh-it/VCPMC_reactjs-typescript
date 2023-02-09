import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import ContentPageQLy from "../../layout/ContentLayout/ContentPageQLy";
import { IParams } from "../../types";
import { useParams } from "react-router-dom";
import ContentChiTietHD from "../../layout/ContentLayout/ContentChiTietHP";


const {Content } = Layout;

const QuanLyPage = () => {
  const {page, control, tag , id} : IParams = useParams()


  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
            {
              tag=== "chitiethd" ? <ContentChiTietHD/> :<ContentPageQLy/>
            }
              
          </Content>
        </Layout>
   
      </Layout>
      
    </div>
  );
};

export default QuanLyPage;