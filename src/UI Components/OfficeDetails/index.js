import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { saveOfficeData, updateStage } from '../../ReduxFiles/actions';
var moment = require('moment');

export const OfficeDetails = () => {
    const [state, setstate] = useState({})
    const officeData = useSelector(state => state.UserData.officeData)
    const userInfo = useSelector(state => state.UserData.userInfo)
    const history = useHistory();
    const dispatch = useDispatch();
    const handleRegistration = (event) => {
        event.preventDefault()
        const formData = new FormData(document.querySelector('form[name="OfficeForm"]'))
        let officeObj = {
            "building_name": formData.get("building_name"),
            "city_area": formData.get("city_area"),
            "landline_number": formData.get("landline_number"),
            "building_add_1": formData.get("building_add_1"),
            "building_add_2": formData.get("building_add_2"),
            "building_add_3": formData.get("building_add_3")
        }
        dispatch(updateStage(2))
        dispatch(saveOfficeData(officeObj))
        history.push('/Confirm');
    }
    const handleBack = () => {
        dispatch(updateStage(0))
        history.push('/')
    }
    useEffect(() => {
        setstate({ ...officeData })
    }, [officeData]);
    return (
        <div className="registration_container">
            <form onSubmit={handleRegistration} autoComplete="off" name="OfficeForm">
                <div className="segment">
                    <h3>Office Info</h3>
                </div>
                <div className="d-flex f_row justify-content-evenly f-wrap">
                    <label>
                        <input defaultValue={state.building_name} name="building_name" required type="text" placeholder="Building Name" />
                    </label>
                    <label>
                        <input defaultValue={state.landline_number} name="landline_number" required type="text" placeholder="Landline Number" maxLength="10" size="10" />
                    </label>
                    <label>
                        <input defaultValue={state.city_area} name="city_area" required type="text" placeholder="City/Area" />
                    </label>
                </div>
                <div className="segment">
                    <h3>Office Address</h3>
                </div>
                <div className="d-flex f_row justify-content-evenly f-wrap">
                    <label>
                        <input defaultValue={state.building_add_1} name="building_add_1" required type="text" placeholder="Street, Colony" />
                    </label>
                    <label>
                        <input defaultValue={state.building_add_2} name="building_add_2" required type="text" placeholder="City, Country" />
                    </label>
                    <label>
                        <input defaultValue={state.building_add_3} name="building_add_3" required type="text" placeholder="PO Box Number" />
                    </label>
                </div>
                <div className="d-flex f_row justify-content-center">
                    <button onClick={handleBack} className="grey  margin-10">Back</button>
                    <button type="submit" className="red margin-10">Next</button>
                </div>
            </form>
        </div>
    );
}