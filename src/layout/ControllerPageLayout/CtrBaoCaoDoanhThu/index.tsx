
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import CtrSelectDate from "../../../components/control/selectDate";
import "./styles.scss"

const CtrBCDoanhThu = () => {
  const dataOptions =[
  
    { label: 'Theo tháng', value: 'm'},
    { label: 'Theo quý', value: 'q'},
  ]
  const dataThang =[]
  for (let i =1 ;i<=12; i++){
    dataThang.push(
      { label: 'Tháng' + i, value:'m'+ i},
    )
  }
  const dataQ =[]
  for (let i =1 ;i<=4; i++){
    dataQ.push(
      { label: 'Quý' + i, value: 'q'+i},
    )
  }
  return (
    <>
    <div className="Control-BCDoanhThu">
      
      <div className="Control-BCDoanhThu_GroupSelect">
        <CtrSelect title="Theo Tháng"  data={dataOptions}/>
        <CtrSelect  data={dataThang}/>
        <CtrSelect   data={dataQ}/>
      </div>
      
    
    </div>
    <div className="Control-BCDoanhThu_TitleTable">
      <h3>Danh sách hợp đồng khai thác đã đối soát</h3>
    </div>
    </>
  );
};

export default CtrBCDoanhThu;
