import React from "react";

import ContentTitle from "../../../components/common/Content/contentTitle";
import TabPageQl from "../../../components/tabbar/tabpageQL";

const ContentPageQLy = () => {
  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách hợp đồng" />
      <div className="Content-body">
        <TabPageQl/>
      </div>
    </div>
  );
};

export default ContentPageQLy;
