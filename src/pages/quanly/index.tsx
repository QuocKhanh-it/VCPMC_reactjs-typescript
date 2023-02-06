import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import ContentPageQLy from "../../layout/ContentPageQLy";


const { Header, Footer, Content } = Layout;

const QuanLyPage = () => {
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
              <ContentPageQLy/>
          </Content>
        </Layout>
   
      </Layout>
      
    </div>
  );
};

export default QuanLyPage;