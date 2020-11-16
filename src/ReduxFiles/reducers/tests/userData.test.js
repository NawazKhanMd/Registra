import { UserData, initialState } from '../userData';
import { actions } from '../../constants';
//import { dummyVariousContent } from '../types/contentTypes';

describe('Home Reducer', () => {
    it('Handles default case', () => {
        const state = UserData(undefined, {});
        expect(state).toEqual(initialState);
    });
    
    it('Handles clear Store ', () => {
        const action = { type: actions.clear_store};
        const state = UserData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles load User Info ', () => {
        const data = {
            "usr_name": "Md Nawaz Khan",
            "usr_phn": "9121223331",
            "usr_email": "nawazmd230@gmail.com",
            "usr_add_1": "Mukti",
            "usr_add_2": "Malleshwaram",
            "usr_add_3": "IN, 560003"
        }
        const action = { type: actions.save_user_data, payload: data };
        const state = UserData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles load Office Info ', () => {
        const data = {
            "building_name": "Mukti",
            "city_area": "Malleshwaram",
            "landline_number": "0802345225",
            "building_add_1": "Mukti",
            "building_add_2": "Malleshwaram",
            "building_add_3": "IN, 560003"
        }
        const action = { type: actions.save_office_data, payload: data };
        const state = UserData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles profile picture save ', () => {
        const data =  "Profile_picture";
        const action = { type: actions.profile_picture, payload: data };
        const state = UserData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles Signature save ', () => {
        const data =  "user_signature";
        const action = { type: actions.user_sign, payload: data };
        const state = UserData(undefined, action);
        expect(state).toMatchSnapshot();
    });
});