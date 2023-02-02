import React from "react";
import { Select, Avatar, Button } from "antd";
import VietNam from "../assets/image/vietnam.png";
import "./styles.scss";
import FormLogin from "../components/authentication/formLogin";
import FormForgotPassword from "../components/authentication/formForgotPass";
import { useParams } from "react-router-dom";
import { IParams } from "../types";
import FormResetPassword from "../components/authentication/formResetPass";
import LinkPageError from "../components/authentication/linkPageErorr";

const AuthentiCationPage = () => {
  const  { page } : IParams = useParams();

  return (
    <div className="MainApp">
      <div className="header">
        <div className="header-selectLanguage">
          <Select
            defaultValue={`Tiếng Việt`}
            style={{ width: 145 }}
            // onChange={handleChange}
            options={[
              {
                value: "Tiếng Việt",
                label: (
                  <>
                    <div className="item_select">
                     <span className="it_title">Tiếng Việt</span> 
                      <Avatar size="small" icon={<img src={VietNam} />} />
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="Form_login">
        <div className="Form_login-Logo">
          <Avatar
            size={240}
            icon={<img src={require("../assets/image/logo.png")} />}
          />
        </div>
   
        <div className="Form_login-Input">
          {
            page === 'forgot-password' ||  page === 'sendlink-resetpw'  ? <FormForgotPassword/> : 
            page === 'reset-password' ? <FormResetPassword/> : 
            page === 'linkpage-error' ? <LinkPageError /> : <FormLogin/>
          }
     
          
        </div>
      </div>
    </div>
  );
};

export default AuthentiCationPage;
