import { Avatar, Segmented } from "antd";
import React from "react";
import ContentTitle from "../../../components/common/Content/contentTitle";
import "./styles.scss";

const FeedbackPage = () => {
  const dataFeedback = [];
  for (let i = 1; i > 50; i++) {
    dataFeedback.push({
      image: "https://joesch.moe/api/v1/random",
      userName: "Tuyet Nguyen",
      chuDe: "Khác",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod iaculis metus, nisl risus urna morbi risus. Blandit tempor, ac eu ut volutpat adipiscing aliquam. Habitasse a semper cras non. Laoreet nibh et, erat sit curabitur sapien, commodo Accumsan eget ut blandit sed. Tortor ultrices id amet non sit facilisis auctor phasellus nisl. Bibendum et ultrices consequat luctus interdum elementum. Leo pellentesque nulla lectus adipiscing risus, bibendum. Iaculis porttitor ornare sit nisl. Tellus lectus amet mattis sed at. Nisi augue congue ac faucibus nunc. Sed maecenas mus at urna at. Aliquet sagittis, enim egestas tincidunt leo eu. Libero nunc montes, facilisis ullamcorper scelerisque turpis.",
    });
  }

  return (
    <div className="Content-App">
      <ContentTitle title="Feedback" />
      <div className="Content-body">
        <div className="Content-body_FeedBackPage">
          <div className="Content-body_FeedBackPage-Left">
            <Segmented
              options={[
                {
                  label: (
                    <div className="User_FeedBack ">
                      <div className="User_FeedBack-Avartar">
                        <Avatar src="https://joesch.moe/api/v1/random" />
                      </div>
                      <div className="User_FeedBack-Info">
                        <div className="User_FeedBack-Info_Name">
                          <p>Thy Phạm</p>
                        </div>
                        <div className="User_FeedBack-Info_Value">
                        <p>Chủ đề: Tài khoản</p>
                          <ul>
        
                            <li>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Euismod iaculis metus, nisl risus urna morbi
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                  value: "user3",
                },
                {
                  label: (
                    <div className="User_FeedBack 1">
                      <div className="User_FeedBack-Avartar">
                        <Avatar src="https://joesch.moe/api/v1/random" />
                      </div>
                      <div className="User_FeedBack-Info">
                        <div className="User_FeedBack-Info_Name">
                          <p>Thy Phạm</p>
                        </div>
                        <div className="User_FeedBack-Info_Value">
                        <p>Chủ đề: Tài khoản</p>
                          <ul>
        
                            <li>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Euismod iaculis metus, nisl risus urna morbi
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                  value: "user1",
                },
                {
                  label: (
                    <div className="User_FeedBack">
                      <div className="User_FeedBack-Avartar">
                        <Avatar src="https://joesch.moe/api/v1/random" />
                      </div>
                      <div className="User_FeedBack-Info">
                        <div className="User_FeedBack-Info_Name">
                          <p>Thy Phạm</p>
                        </div>
                        <div className="User_FeedBack-Info_Value">
                          <p>Chủ đề: Tài khoản</p>
                          <ul>
        
                            <li>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Euismod iaculis metus, nisl risus urna morbi
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                  value: "user2",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
