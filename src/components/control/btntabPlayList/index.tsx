import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../types";
import "./styles.scss";

const BtnTabPlayList = () => {
  const [currentTabShow, setCurrentTabShow] = useState(true);
    const history = useHistory()
    const {tag} : IParams = useParams()

  const handleChangeShow2List =()=>{
    setCurrentTabShow(true)
    // if(tag==="pheduyet"){
    //   history.replace('/khobanghi/list/pheduyet')
    // }else{
    //   history.replace('/khobanghi/list')
    // }
    
  }
  const handleChangeShow2Grid =()=>{
    setCurrentTabShow(false)
    // if(tag==="pheduyet"){
    //   history.replace('/khobanghi/grid/pheduyet')
    // }else{
    //   history.replace('/khobanghi/grid')

    // }

  }
  return (
    <div className="BtnTabPlayList">
      {currentTabShow ? (
        <div className="BtnTabPlayList_Item">
          <div className="BtnTabPlayList_Item-list">
            <img
              src={require("../../../assets/image/action-icon/fi_list.png")}
              alt ="list"
            />
          </div>
          <div className="BtnTabPlayList_Item-grid" onClick={ handleChangeShow2Grid}>
            <img
              src={require("../../../assets/image/action-icon/fi_griddf.png")}
              alt="grid"
            />
          </div>
        </div>
      ) : (
        <div className="BtnTabPlayList_Item">
          <div className="BtnTabPlayList_Item-list" onClick={handleChangeShow2List}>
            <img
              src={require("../../../assets/image/action-icon/fi_listdf.png")}
            />
          </div>
          <div className="BtnTabPlayList_Item-grid">
            <img
              src={require("../../../assets/image/action-icon/fi_grid.png")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnTabPlayList;
