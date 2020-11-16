import { actions } from '../constants'
export const loading = flag => ({
  type: actions.loading,
  payload: flag
})
export const updateStage = stageIndex => ({
  type: actions.stage,
  payload: stageIndex
})
export const updateProfilePicture = base64String => ({
  type: actions.profile_picture,
  payload: base64String
})
export const updateSignature = base64String => ({
  type: actions.user_sign,
  payload: base64String
})
export const saveUserData = data => ({
  type: actions.save_user_data,
  payload: data
})
export const saveOfficeData = data => ({
  type: actions.save_office_data,
  payload: data
})
export const clearStore = () => ({
  type: actions.clear_store,
})