import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { clearStore, updateStage } from '../../ReduxFiles/actions';
import { ImageHandler } from './imageHandler';
import { SignaturePad } from './signaturePad';
var moment = require('moment');



export const Confirmation = ({icon}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = useSelector(state => state.UserData.userInfo)
    const officeData = useSelector(state => state.UserData.officeData)
    const [state, setstate] = useState({});
    const [isSuccess, setisSuccess] = useState(false)

    useEffect(() => {
        setstate({ ...userInfo, ...officeData })
    }, []);

    const handleBack = () => {
        dispatch(updateStage(1));
        history.push('/Office');
    }
    const handleReset = () => {
        dispatch(clearStore());
        dispatch(updateStage(0));
        history.push('/');
    }
    const handleSubmit = ()=>{
        setisSuccess(true)
    }
    return (
        <div className="confirm_container">
            <div className="neo_card">
                <div className="d-flex f_row justify-content-evenly f-wrap">
                    <ImageHandler />
                    <div className="segment seperator">
                        <p><span>Name:</span> {state.usr_name}</p>
                        <p><span>Phn Number:</span> {state.usr_phn}</p>
                        <p><span>Email:</span> {state.usr_email}</p>
                        <p className="margin0"><span>Address:</span><span className="text-right"> {state.usr_add_1}, {state.usr_add_2}</span></p>
                        <p className="justify-content-end">{state.usr_add_3}</p>
                    </div>
                </div>
                <div className="segment">
                    <p><span>Building Name:</span> {state.building_name}</p>
                    <p><span>City/Area:</span> {state.city_area}</p>
                    <p><span>Landline:</span> {state.landline_number}</p>
                    <p className="margin0"><span>Address:</span><span className="text-right"> {state.building_add_1}, {state.building_add_2}</span></p>
                    <p className="justify-content-end">{state.building_add_3}</p>
                </div>
            </div>
            <SignaturePad />
            <div className="d-flex f_row justify-content-center margin-10">
                <button onClick={handleBack} className="grey  margin-10" >Back</button>
                <button onClick={handleSubmit} className="red  margin-10" type="submit" >Confirm</button>
            </div>
            {isSuccess && <div className="success_container">
                <div className="neo_card f-cloumn padding100">
                    {icon}
                    <h1>Success</h1>
                    <p>Your application has been submitted</p>
                    <div className="col-md-12 d-flex f-cloumn align-items-center">
                        <button id='reset' onClick={handleReset} className="red margin-10">OK</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}