import { Form, Input, Button, Space, Checkbox } from "antd";

import { useEffect, useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import { IParams } from "../../types";

const FormLogin = () => {
  const {page} : IParams = useParams();
  return (
 
      <Form
        name="normal_login"
        className="login-form"
        layout="vertical"
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
      >
        <Form.Item>
          <div className="Form_login-title">
            <h3>Đăng Nhập</h3>
          </div>
        </Form.Item>
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          className="lableInput"
          initialValue={"lequynhaivan01"}
        >
          <Input required />
        </Form.Item>
        <Form.Item label="Password" name="password" initialValue={"311940211"}>
          <Input type="password" required />
        </Form.Item>
        <Form.Item className="notify_login">
          <div className="login__Status">
            <span>Sai mật khẩu hoặc tên đăng nhập</span> <br />
            {/* <span>Hãy nhập tài khoản và mật khẩu</span> */}
          </div>
        </Form.Item>
        <Form.Item>
          <Checkbox>Ghi nhớ đăng nhập</Checkbox>
        </Form.Item>

        <Form.Item>
          <div className="btn-group">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
          </div>
        </Form.Item>
        <div className="btn-group">
          <Link to={'/forgot-password'}>
          <p className="Forget_password">Quên mật khẩu? </p>
          </Link>
          
        </div>
      </Form>
 
  );
};

export default FormLogin;
