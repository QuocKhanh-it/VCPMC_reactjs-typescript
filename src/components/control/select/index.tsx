import { Select } from "antd";
import React from "react";
import { ISelect } from "../../../types";
import './styles.scss'

const CtrSelect : React.FC<ISelect> = (props) => {
  return (
    <div className="Control-Select">
    <div className="Label-Select">
        <h4>{props.title}</h4>
    </div>
    <Select
      defaultValue="Tất cả"
      style={{ width: 160, height: 40 }}
      suffixIcon = {<img src={require('../../../assets/image/Vector.png')}/>}
      //   onChange={handleChange}
      options={props.data?.map((item)=>({ label: item.label, value: item.value }))}
      dropdownStyle ={{
        backgroundColor:'#3E3E5B',
        color: '#ffffff'
      }}
    />
    </div>
  );
};

export default CtrSelect;
