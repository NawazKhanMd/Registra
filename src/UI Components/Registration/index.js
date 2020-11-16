import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { saveUserData, updateStage } from '../../ReduxFiles/actions';
var moment = require('moment');

export const Register = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.UserData.userInfo)
    const history = useHistory();
    const [state, setstate] = useState({})
    const handleRegistration = (event) =>{
        event.preventDefault()
        const formData = new FormData(document.querySelector('form[name="RegistrationForm"]'))
        let userObj = {
            "usr_name":formData.get("usr_name"),
            "usr_phn":formData.get("usr_phn"),
            "usr_email":formData.get("usr_email"),
            "usr_add_1":formData.get("usr_add_1"),
            "usr_add_2":formData.get("usr_add_2"),
            "usr_add_3":formData.get("usr_add_3")
        }
        dispatch(updateStage(1))
        dispatch(saveUserData(userObj))
        history.push('/Office');
    }
    useEffect(() => {
         setstate({...userInfo});
    }, [userInfo]);
    return (
        <div className="registration_container">
            <form onSubmit={handleRegistration} autoComplete="off" name="RegistrationForm">
                <div className="segment">
                    <h3>Basic Info</h3>
                </div>
                <div className="d-flex f_row justify-content-evenly f-wrap">
                    <label>
                        <input defaultValue={state.usr_name} name="usr_name" required type="text" placeholder="Full Name" />
                    </label>
                    <label>
                        <input defaultValue={state.usr_email} name="usr_email" required type="email" placeholder="Email Address" />
                    </label>
                    <label>
                        <input defaultValue={state.usr_phn} name="usr_phn" required type="text" placeholder="Phone Number" maxLength="10" minLength="10" size="10" />
                    </label>
                </div>
                <div className="segment">
                    <h3>Address</h3>
                </div>

                <div className="d-flex f_row justify-content-evenly f-wrap">
                    <label>
                        <input defaultValue={state.usr_add_1}  name="usr_add_1" required type="text" placeholder="House Number, Street" />
                    </label>
                    <label>
                        <input defaultValue={state.usr_add_2} name="usr_add_2" required type="text" placeholder="Colony, City" />
                    </label>
                    <label>
                        <input defaultValue={state.usr_add_3} name="usr_add_3" required type="text" placeholder="Country, Pincode" />
                    </label>
                </div>
                <div className="d-flex f_row justify-content-center">
                    <button className="red" type="submit" >Next</button>
                </div>
            </form>
        </div>
    );
}