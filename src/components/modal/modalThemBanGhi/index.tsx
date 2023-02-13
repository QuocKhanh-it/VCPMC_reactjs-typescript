import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import CtrSelect from "../../control/select";
import UploadFile from "../../control/uploadFile";

import "./styles.scss";

const ModalActionThemBanGhi: React.FC<{
  title?: string;
  isOpenModal: boolean;
  isCancel: Function;
}> = (props) => {
  const handleCancel = () => {
    props.isCancel(false);
  };

  const dataSelectTheLoai = [
    {
      value: "Rap",
      label: "Rap",
    },
    {
      value: "Ballad",
      label: "Ballad",
    },
    {
      value: "rockandroll",
      label: "Rock n Roll",
    },
    {
      value: "RandB",
      label: "R&B",
    },
  ];

  return (
    <>
      <Modal
        open={props.isOpenModal}
        onCancel={handleCancel}
        footer={false}
        className="ModalThemBG"
      >
        <div className="Modal_Title">
          <h3>{props.title}</h3>
        </div>

        <Form layout="vertical" className="Frm_ThemBanGhi">
          <Form.Item
            label="Tên bản ghi:"
            name="nameBG"
            // initialValue={"Nguyễn"}
          >
            <Input type="text" name="nameBG" />
          </Form.Item>
          <Form.Item
            label="Mã ISRC:"
            name="ISRC"
            // initialValue={"Nguyễn"}
          >
            <Input type="text" name="ISRC" />
          </Form.Item>
          <Form.Item
            label="Tác giả:"
            name="tacGia"
            // initialValue={"Nguyễn"}
          >
            <Input type="text" name="tacGia" />
          </Form.Item>
          <Form.Item
            label="Ca sĩ/Nhóm nhạc:"
            name="casi"
            // initialValue={"Nguyễn"}
          >
            <Input type="text" name="casi" />
          </Form.Item>

          <div className="horizontal_form">
            <Form.Item
              label="Thể loại:"
              name="theLoai"
              // initialValue={"Nguyễn"}
            >
              <CtrSelect data={dataSelectTheLoai} w={347} />
            </Form.Item>
            <Form.Item
              label="Nhà sản xuất:"
              name="nsx"
              // initialValue={"Nguyễn"}
            >
              <Input type="text" name="nsx" />
            </Form.Item>
          </div>
          <div className="horizontal_form">
         
            
                  {/* upload */}
                  <div className="FileItem">
                    <label htmlFor="file_banGhi">Đính kèm bản ghi:</label>
                    <UploadFile />
                  </div>
                  <div className="FileItem">
                    <label htmlFor="file_loiBaiHat">Đính kèm lời bài hát:</label>
                    <UploadFile />
                  </div>
                  {/* item */}

                  {/* <div className="FileItem">
                  <div className="FileItem-icon">
                    <img src={require("../../../assets/image/file/doc.png")} />
                  </div>
                  <div className="FileItem-name">
                    <span>hetthuongcannho.doc</span>
                  </div>
                </div> */}
              
          </div>

          <Form.Item>
            <div className="btn-group">
              <Button
                type="primary"
                danger
                ghost
                className="btn-default"
                onClick={handleCancel}
              >
                Hủy
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit btn-default"
                // onClick={handelChangePassword}
              >
                Tải lên
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalActionThemBanGhi;
