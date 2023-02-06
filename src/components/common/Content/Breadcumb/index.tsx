import React from "react";

import { Breadcrumb } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../../types";
import { breadlink } from "./breadcumblink";

const BreadCumbLink = () => {
  const history = useHistory();
  const pathName = history.location.pathname;
  const { page, control, id }: IParams = useParams();

  // if(page){
  //   const Breadpage = breadlink.filter((item) => {
  //     return page.indexOf(item.path) !== -1;
  //   });
  // }

  const breadcumbItem = breadlink.filter((item) => {
    if (control || id) {
      return pathName.indexOf(item.path) !== -1;
    } else return false;
  });

  const Showbread =
    breadcumbItem.length > 1 &&
    breadcumbItem.map((item, key) => {
      return <Breadcrumb.Item key={key}>{item.name}</Breadcrumb.Item>;
    });

  return <Breadcrumb separator=">">{Showbread}</Breadcrumb>;
};

export default BreadCumbLink;
