import React,{ useState, useEffect, useContext} from 'react'
import MyAccount from '../../components/myaccount'
import NavbarBack from '../../components/navbarback';
import { StoreContext } from '../../context/StoreContext';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

const MyAccountPage = ({
  toggleUpdateName,
  toggleUpdatePhone,
  toggleUpdateEmail,
  toggleUpdateAddress,
  toggleUpdatePassword
}) => {

  const {logged} = useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(()=> {
    if(!logged) {
      navigate("/");
      Swal.fire({
          icon: "warning",
          title: "You are not logged in!",
          showConfirmButton: false,
      })
      window.location.reload();
      return;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  const [orderStatus, setOrderStatus] = useState(1);

  return (
    <>
      <NavbarBack back="/"/>
      <MyAccount 
        $orderStatus={orderStatus} 
        $setOrderStatus={setOrderStatus}
        toggleUpdateName={toggleUpdateName}
        toggleUpdatePhone={toggleUpdatePhone}
        toggleUpdateEmail={toggleUpdateEmail}
        toggleUpdateAddress={toggleUpdateAddress}
        toggleUpdatePassword={toggleUpdatePassword}
      />
    </>
  )
}

export default MyAccountPage
