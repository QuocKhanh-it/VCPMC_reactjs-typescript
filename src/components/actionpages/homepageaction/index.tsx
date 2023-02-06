import React from 'react'
import './styles.scss'




const HomePageAction : React.FC<{setOpenModal : Function}> = (props) => {

const handelOpenModal =() =>{
  props.setOpenModal(true)

}
  return (
    <div className="ActionHomePage">
    <div className="ActionHomePage-item">
      <div className="ActionHomePage-item_img">
      <img src={require('../../../assets/image/action-icon/fi_edit.png')} width={32}/>
      </div>
      <div className="ActionHomePage-item_title">
        <p>Sửa thông tin </p>
      </div>
    </div>
    
    <div className="ActionHomePage-item">
   
      <div className="ActionHomePage-item_img" onClick={handelOpenModal}>
      <img src={require('../../../assets/image/action-icon/fi_lock.png')} width={32}/>
      </div>
     
      <div className="ActionHomePage-item_title">
        <p>Đổi mật khẩu </p>
      </div>
     
    </div>
 
    <div className="ActionHomePage-item">
      <div className="ActionHomePage-item_img">
      <img src={require('../../../assets/image/action-icon/fi_log-out.png')} width={32}/>
      </div>
      <div className="ActionHomePage-item_title">
        <p>Đăng xuất </p>
      </div>
    </div>
</div>
  )
}

export default HomePageAction