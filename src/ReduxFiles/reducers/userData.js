import { actions } from "../constants";

const EmptyUserInfo = {
    "usr_name": "",
    "usr_phn": "",
    "usr_email": "",
    "usr_add_1": "",
    "usr_add_2": "",
    "usr_add_3": ""
}
const EmptyOfficeData = {
    "building_name": "",
    "city_area": "",
    "landline_number": "",
    "building_add_1": "",
    "building_add_2": "",
    "building_add_3": ""
}

export const initialState = {
    userInfo: EmptyUserInfo, officeData: EmptyOfficeData, profilePicture: "", userSignature: ""
};


export const UserData = (state = initialState, action) => {
    switch (action.type) {
        case actions.save_user_data:
            return { ...state, userInfo: { ...action.payload } }
        case actions.save_office_data:
            return { ...state, officeData: { ...action.payload } }
        case actions.clear_store:
            return {  ...state, userInfo: {...EmptyUserInfo}, officeData: {...EmptyOfficeData} }
        case actions.profile_picture:
            return { ...state, profilePicture: action.payload }
        case actions.user_sign:
            return { ...state, userSignature: action.payload }
        default:
            return state
    }
}