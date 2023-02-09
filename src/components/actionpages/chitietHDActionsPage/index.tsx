/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.scss";

const ChitietHDActionsPage: React.FC<{setOpenActionHuyHD : Function}> = (props) => {

  const handelOpenModalHuyHD =() =>{
    props.setOpenActionHuyHD(true)
    
  }
  return (
    <div className="ChitietHDActions">
      <div className="ChitietHDActions-item">
        <div className="ChitietHDActions-item_img">
          <img
            src={require("../../../assets/image/action-icon/fi_edit.png")}
            width={32}
          />
        </div>
        <div className="ChitietHDActions-item_title">
          <p>Chỉnh sửa hợp đồng </p>
        </div>
      </div>

      <div className="ChitietHDActions-item">
        <div className="ChitietHDActions-item_img">
          <img
            src={require("../../../assets/image/action-icon/notes.png")}
            width={32}
          />
        </div>

        <div className="ChitietHDActions-item_title">
          <p>Gia hạn hợp đồng</p>
        </div>
      </div>

      <div className="ChitietHDActions-item" onClick={handelOpenModalHuyHD}>
        <div className="ChitietHDActions-item_img">
          <img
            src={require("../../../assets/image/action-icon/fi_x.png")}
            width={32}
          />
        </div>
        <div className="ChitietHDActions-item_title"  >
          <p>Hủy hợp đồng </p>
        </div>
      </div>
    </div>
  );
};

export default ChitietHDActionsPage;
