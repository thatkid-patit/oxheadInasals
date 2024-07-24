import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
  UpdateNameContainer,
  UpdateNameForm,
  UpdateNameHeader,
  UpdateNameH1,
  UpdateNameClose,
  UpdateNameInputWrap,
  UpdateNameInput,
  UpdateNameSubmit
} from './elements'

const UpdateName = ({
  toggleUpdateName,
  $updateNameIsOpen
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
      firstname: updateInput.firstname,
      lastname: updateInput.lastname,
      password: updateInput.password,
    }
    updateProfile(formData, toggleUpdateName);
  }

  return (
    <>
      <UpdateNameContainer $updateNameIsOpen={$updateNameIsOpen ? 1 : 0}>
        <UpdateNameForm onSubmit={(e)=> handleSubmit(e)}>
          <UpdateNameHeader>
            <UpdateNameH1>Update Name</UpdateNameH1>
            <UpdateNameClose onClick={toggleUpdateName}/>
          </UpdateNameHeader>
          <UpdateNameInputWrap>
            <UpdateNameInput type='text' name='firstname' onChange={handleInput} placeholder='Your first name' required/>
          </UpdateNameInputWrap>
          <UpdateNameInputWrap>
            <UpdateNameInput type='text' name='lastname' onChange={handleInput} placeholder='Your last name' required/>
          </UpdateNameInputWrap>
          <UpdateNameInputWrap>
            <UpdateNameInput type='password' name='password' onChange={handleInput} placeholder='Confirm password to save' required/>
          </UpdateNameInputWrap>
          <UpdateNameInputWrap>
            <UpdateNameSubmit type='submit'>Save</UpdateNameSubmit>
          </UpdateNameInputWrap>
        </UpdateNameForm>
      </UpdateNameContainer>
    </>
  )
}

export default UpdateName
