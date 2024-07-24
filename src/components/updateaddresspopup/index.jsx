import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
  UpdateAddressContainer,
  UpdateAddressForm,
  UpdateAddressHeader,
  UpdateAddressH1,
  UpdateAddressClose,
  UpdateAddressInputWrap,
  UpdateAddressInput,
  UpdateAddressSubmit
} from './elements'

const UpdateAddress = ({
  toggleUpdateAddress,
  $updateAddressIsOpen
}) => {

  const {updateProfile} = useContext(StoreContext);

  // update input config
  const [updateInput, setUpdateInput] = useState({});
  const handleInput = (e) => {
    setUpdateInput({...updateInput, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // use API key
      address: updateInput.address,
      city: updateInput.city,
      zipcode: updateInput.zipcode,
      password: updateInput.password,
    }
    updateProfile(formData, toggleUpdateAddress);
  }

  return (
    <>
      <UpdateAddressContainer $updateAddressIsOpen={$updateAddressIsOpen ? 1 : 0}>
        <UpdateAddressForm onSubmit={(e)=> handleSubmit(e)}>
          <UpdateAddressHeader>
            <UpdateAddressH1>Update Address</UpdateAddressH1>
            <UpdateAddressClose onClick={toggleUpdateAddress}/>
          </UpdateAddressHeader>
          <UpdateAddressInputWrap>
            <UpdateAddressInput type='text' onChange={handleInput} name='address' placeholder='Your street address' required/>
          </UpdateAddressInputWrap>
          <UpdateAddressInputWrap>
            <UpdateAddressInput type='text' onChange={handleInput} name='city' placeholder='Your city/town' required/>
          </UpdateAddressInputWrap>
          <UpdateAddressInputWrap>
            <UpdateAddressInput type='number' onChange={handleInput} name='zipcode' placeholder='zipcode' required/>
          </UpdateAddressInputWrap>
          <UpdateAddressInputWrap>
            <UpdateAddressInput type='password' onChange={handleInput} name='password' placeholder='Confirm password to save' required/>
          </UpdateAddressInputWrap>
          <UpdateAddressInputWrap>
            <UpdateAddressSubmit type='submit'>Save</UpdateAddressSubmit>
          </UpdateAddressInputWrap>
        </UpdateAddressForm>
      </UpdateAddressContainer>
    </>
  )
}

export default UpdateAddress
