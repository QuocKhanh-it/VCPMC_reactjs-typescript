import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import "./styles.scss";

const ModalActionHuyHD: React.FC<{
  isOpenModal: boolean;
  isCancel: Function;
}> = (props) => {
  const {TextArea } = Input
  const handleCancel = () => {
    props.isCancel(false);
  };

  const handelChangePassword = () => {
    handleCancel();
    
  };

  return (
    <>
      
      <Modal open={props.isOpenModal} onCancel={handleCancel} footer={false} className ="ModalHuyHDActions">
        <div className="Modal_Title">
          <h3> Hủy hợp đồng uỷ quyền</h3>
        </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item
            label=""
            name="ly_do"
            // initialValue={"Trinh@123"}
          >
          <TextArea  placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..." rows={8}/>
          </Form.Item>
        
          <Form.Item>
            <div className="btn-group">
              <Button
                type="primary"
                danger
                ghost
                className="btn-default"
                onClick={handleCancel}
              >
                Quay lại
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit btn-default"
                // onClick={handelChangePassword}
              >
               Huỷ hợp đồng
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalActionHuyHD;
