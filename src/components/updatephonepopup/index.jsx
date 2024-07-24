import React, {useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
  UpdatePhoneContainer,
  UpdatePhoneForm,
  UpdatePhoneHeader,
  UpdatePhoneH1,
  UpdatePhoneClose,
  UpdatePhoneInputWrap,
  UpdatePhoneInput,
  UpdatePhoneSubmit
} from './elements'

const UpdatePhone = ({
  toggleUpdatePhone,
  $updatePhoneIsOpen
}) => {

  const {updateProfile} = useContext(StoreContext);

  // update input config
  const [updateInput, setUpdateInput] = useState({});
  const handleInput = (e) => {
    setUpdateInput({...updateInput, [e.target.name]: e.target.value});
  }

  //update post config
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // use API key
      phone: updateInput.phone,
      password: updateInput.password,
    }
    updateProfile(formData, toggleUpdatePhone);
  }

  return (
    <>
      <UpdatePhoneContainer $updatePhoneIsOpen={$updatePhoneIsOpen ? 1 : 0}>
        <UpdatePhoneForm onSubmit={(e)=> handleSubmit(e)}>
          <UpdatePhoneHeader>
            <UpdatePhoneH1>Update Phone</UpdatePhoneH1>
            <UpdatePhoneClose onClick={toggleUpdatePhone}/>
          </UpdatePhoneHeader>
          <UpdatePhoneInputWrap>
            <UpdatePhoneInput type='number' onChange={handleInput} name='phone' placeholder='Your phone number' required/>
          </UpdatePhoneInputWrap>
          <UpdatePhoneInputWrap>
            <UpdatePhoneInput type='password' onChange={handleInput} name='password' placeholder='Confirm password to save' required/>
          </UpdatePhoneInputWrap>
          <UpdatePhoneInputWrap>
            <UpdatePhoneSubmit type='submit'>Save</UpdatePhoneSubmit>
          </UpdatePhoneInputWrap>
        </UpdatePhoneForm>
      </UpdatePhoneContainer>
    </>
  )
}

export default UpdatePhone
