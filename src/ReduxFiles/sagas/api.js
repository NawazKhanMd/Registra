import { db } from "../../Auth";

export const saveUserData = (data) => {
    return new Promise((resolve,reject) => {
     db.collection("Registration_users").doc(data.userInfo.usr_email).set({ ...data })
        .then(function () {
            resolve({ "success": true, 'msg': 'Saved' })
        })
        .catch(function (error) {
            reject({ "success": false, 'msg': error })
        });
    })
}