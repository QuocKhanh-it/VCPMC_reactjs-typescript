/* eslint-disable jsx-a11y/alt-text */
import { Form, Input } from "antd";
import React, { useState } from "react";
import ChitietHDActionsPage from "../../../components/actionpages/chitietHDActionsPage";
import ModalActionHuyHD from "../../../components/modal/modalActionhuyHD";
import "./styles.scss";
const TabThongTinHD = () => {
  const [openActionHuyHD, setOpenChangePass] = useState(false);

  const handelModalHuyOpen = (open: boolean) => {
    setOpenChangePass(open);
  };
  const handelCancelModal = (cancel: boolean) => {
    setOpenChangePass(cancel);
  };
  return (
    <div className="TabThongTinHD">
      <div className="TabThongTinHD_FormTob">
        <div className="TabThongTinHD_Form_InfoHD">
          <Form className="Form_InfoHD">
            <Form.Item label="Số hợp đồng:">
              <span>BH123</span>
            </Form.Item>
            <Form.Item label="Tên hợp đồng:">
              <span>Hợp đồng uỷ quyền tác phẩm âm nhạc</span>
            </Form.Item>
            <Form.Item label="Ngày hiệu lực:">
              <span>01/05/2021</span>
            </Form.Item>
            <Form.Item label="Ngày hết hạn:">
              <span>01/12/2021</span>
            </Form.Item>

            <Form.Item label="Tình trạng:">
              <div className="Item-HLuc">
                <img
                  src={require("../../../assets/image/status-icon/Egreen.png")}
                />
                <p>Mới</p>
              </div>
              {/* {hieuLuc === 1 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Egreen.png")}
              />
              <p>Mới</p>
            </div>
          ) : hieuLuc === 2 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
              <p>Còn thời hạn</p>
            </div>
          ) : hieuLuc === 3 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/ENot.png")}
              />
              <p>Đã hết hạn</p>
            </div>
          ) : (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Ered.png")}
              />
              <p>Đã hủy</p>
            </div>
          )} */}
            </Form.Item>
          </Form>
        </div>
        {/* File đính kèm */}
        <div className="TabThongTinHD_Form-Files">
          <Form className="Form-Files">
            <Form.Item label="Đính kèm tệp:">
              <div className="FileItem-Group">
                {/* item */}
                <div className="FileItem">
                  <div className="FileItem-icon">
                    <img src={require("../../../assets/image/file/doc.png")} />
                  </div>
                  <div className="FileItem-name">
                    <span>hetthuongcannho.doc</span>
                  </div>
                </div>
                {/* item */}
                <div className="FileItem">
                  <div className="FileItem-icon">
                    <img src={require("../../../assets/image/file/doc.png")} />
                  </div>
                  <div className="FileItem-name">
                    <span>hetthuongcannho.doc</span>
                  </div>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
        {/* Mức nhuận bút */}
        <div className="TabThongTinHD_Form-NhuanBut">
          <Form className="Form-NhuanBut">
            <div className="Form_Title">
              <div className="Form_Title-Item">
                <img src={require("../../../assets/image/file/circle.png")} />
              </div>
              <div className="Form_Title-text">
                <p>Mức nhuận bút</p>
              </div>
            </div>
            <Form.Item label="Quyền tác giả:">
              <span>0%</span>
            </Form.Item>
            <Form.Item label="Quyền liên quan:"></Form.Item>
            <div className="FormQLienQuan">
              <div className="FormQLienQuan_Item">
                <div className="FormQLienQuan_Item-Title">
                  <p>Quyền của người biểu diễn:</p>
                </div>
                <div className="FormQLienQuan_Item-text">
                  <p>50%</p>
                </div>
              </div>
              <div className="FormQLienQuan_Item">
                <div className="FormQLienQuan_Item-Title">
                  <p>Quyền của nhà sản xuất: (Bản ghi/video)</p>
                </div>
                <div className="FormQLienQuan_Item-text">
                  <p>50%</p>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="TabThongTinHD_FormBottom">
        <div className="TabThongTinHD_Form-CaNhan">
          <Form className="Form-CaNhan">
            <div className="Form_Title">
              <div className="Form_Title-text">
                <p>Thông tin pháp nhân uỷ quyền</p>
              </div>
            </div>
            <Form.Item label="Pháp nhân uỷ quyền:">
              <span>Cá nhân</span>
            </Form.Item>
            <Form.Item label="Tên người uỷ quyền:">
              <span>Nguyễn Văn A</span>
            </Form.Item>
            <Form.Item label="Ngày sinh:">
              <span>10/01/1984</span>
            </Form.Item>
            <Form.Item label="Giới tính:">
              <span>Nam</span>
            </Form.Item>
            <Form.Item label="Quốc tịch:">
              <span>Việt Nam</span>
            </Form.Item>
            <Form.Item label="Số điện thoại::">
              <span>(+84) 345 678 901</span>
            </Form.Item>
          </Form>
        </div>
        <div className="TabThongTinHD_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Số CMND/ CCCD:">
              <span>123456789012</span>
            </Form.Item>
            <Form.Item label="Ngày cấp:">
              <span>10/07/2011</span>
            </Form.Item>
            <Form.Item label="Nơi cấp: ">
              <span>Tp.HCM, Việt Nam</span>
            </Form.Item>
            <Form.Item label="Mã số thuế:">
              <span>92387489</span>
            </Form.Item>
            <Form.Item label="Nơi cư trú:">
              <span>
                69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ
                Chí Minh
              </span>
            </Form.Item>
          </Form>
        </div>
        <div className="TabThongTinHD_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Email:">
              <span>nguyenvana@gmail.com</span>
            </Form.Item>
            <Form.Item label="Tài khoản đăng nhập:">
              <span>1nguyenvana@gmail.com</span>
            </Form.Item>
            <Form.Item label="Mật khẩu: ">
              <span>**********</span>
            </Form.Item>
            <Form.Item label="Số tài khoản:">
              <span>1231123312211223</span>
            </Form.Item>
            <Form.Item label="Ngân hàng:">
              <span>ACB - Ngân hàng Á Châu</span>
            </Form.Item>
          </Form>
        </div>
      </div>
      <ChitietHDActionsPage setOpenActionHuyHD={handelModalHuyOpen}/>
      <ModalActionHuyHD isCancel={handelCancelModal} isOpenModal={openActionHuyHD}/>
    </div>
  );
};

export default TabThongTinHD;
