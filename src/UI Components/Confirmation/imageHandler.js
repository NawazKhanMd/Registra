import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { updateProfilePicture } from '../../ReduxFiles/actions';

var moment = require('moment');



export const ImageHandler = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null)
    const imageRef = useRef(null)
    const history = useHistory();
    const [state, setstate] = useState({})

    const [captureMode, setCaptureMode] = useState('file');
    const [editMode, setEditMode] = useState(false);

    const handleTakePhoto = (dataUri) => {
        // Do stuff with the photo...
        imageRef.current.src = dataUri;
        dispatch(updateProfilePicture(dataUri));
        setEditMode(true)
        setCaptureMode('file')
    }

    const handletakePicture = () => {
        setEditMode(true)
        setCaptureMode('Camera')
    }
    const handleUpload = () => {
        inputRef.current.click();
        setEditMode(true)
        setCaptureMode('file')
    }
    const handleSave = () => {
        setEditMode(false)
        setCaptureMode('file')
    }
    const handleCancel = () => {
        setEditMode(false)
        setCaptureMode('file')
        dispatch(updateProfilePicture(''));
        imageRef.current.src = "https://cdn2.iconfinder.com/data/icons/action-states-vol-4-flat/48/Action___States_-_Vol._4-10-512.png"
    }

    const handleChange = (event) => {
        imageRef.current.src = URL.createObjectURL(event.target.files[0]);
        dispatch(updateProfilePicture(URL.createObjectURL(event.target.files[0])));
    }


    return (
        <div className="image_container">
            {captureMode == 'Camera' && <Camera
                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
            />}
            {captureMode != 'Camera' && <input type="file" ref={inputRef} className="d-none" onChange={handleChange} />}
            <img ref={imageRef} src="https://cdn2.iconfinder.com/data/icons/action-states-vol-4-flat/48/Action___States_-_Vol._4-10-512.png" />
            {!editMode && <h3 className="img_btn"><span onClick={handleUpload}>📂</span><span onClick={handletakePicture}>📷</span></h3>}
            {editMode && <h3 className="img_btn"><span onClick={handleCancel}>✖</span><span className="fSize24" onClick={handleSave}>👍</span></h3>}
        </div>

    );
}