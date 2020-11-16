const key ='' // JSON.parse(process.env.REACT_APP_SECRETS).REACT_APP_API_KEY
export const restApiUrls = {
tokenURL:'https://test-lbadmin-m.enterprisebot.co/api/v3/adminusers/login',
intentsURL:' https://test-lbadmin-m.enterprisebot.co/api/v3/intents?filter=%7B%22limit%22%3A<number_of_intents>%2C%22skip%22%3A0%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D',
intentsData:'https://test-lbadmin-m.enterprisebot.co/api/v3/intents/find/wdetail?intentId=<paste_intentId_here>&skipLimit=%7B%22limit%22%3A10%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%7D'
}

const axios = require('axios');
const baseURL = '';
const accessToken = localStorage.getItem('t0kEn');
const request = method => options => (dispatch, getState) => {
  return axios({
      baseURL,
      ...options,
      headers: {
          Authorization: accessToken,
          ...options.headers
      },
      method,
      proxy: false
  }).catch(error => {
    if(error.message.indexOf('status code 401') != -1){
      //window.location.reload()
    }
    // dispatch(loading("Failure",true,"We are facing some issue to process your request, Please try again later"))
      //requestErrorHandler(error, options, dispatch);
  });
};
export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const patch = request('PATCH');
export const remove = request('DELETE');
