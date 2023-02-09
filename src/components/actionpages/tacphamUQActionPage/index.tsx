/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./styles.scss";

const TacPhamUQActionsPage: React.FC<{setTableEdit : Function}>  = (props) => {
 
  const handleOpenTBEdit=() =>{
    props.setTableEdit()
  }
  return (
    <div className="TacPhamUQActionsPage">
      <div className="TacPhamUQActionsPage-item" onClick={handleOpenTBEdit}>
        <div className="TacPhamUQActionsPage-item_img">
          <img
            src={require("../../../assets/image/action-icon/fi_edit.png")}
            width={32}
          />
        </div>
        <div className="TacPhamUQActionsPage-item_title">
          <p>Chỉnh sửa hợp đồng </p>
        </div>
      </div>

      <div className="TacPhamUQActionsPage-item">
        <div className="TacPhamUQActionsPage-item_img">
          <img
            src={require("../../../assets/image/action-icon/notes.png")}
            width={32}
          />
        </div>

        <div className="TacPhamUQActionsPage-item_title">
          <p>Gia hạn hợp đồng</p>
        </div>
      </div>

      <div className="TacPhamUQActionsPage-item" >
        <div className="TacPhamUQActionsPage-item_img">
          <img
            src={require("../../../assets/image/action-icon/history.png")}
            width={32}
          />
        </div>
        <div className="TacPhamUQActionsPage-item_title"  >
          <p>Hủy hợp đồng </p>
        </div>
      </div>
      <div className="TacPhamUQActionsPage-item" >
        <div className="TacPhamUQActionsPage-item_img">
          <img
            src={require("../../../assets/image/action-icon/Add.png")}
            width={32}
          />
        </div>
        <div className="TacPhamUQActionsPage-item_title"  >
          <p>Thêm bản ghi </p>
        </div>
      </div>
    </div>
  );
};

export default TacPhamUQActionsPage
