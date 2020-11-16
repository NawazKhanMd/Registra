import { GData, initialState } from '../globalData';
import { actions } from '../../constants';

describe('Home Reducer', () => {
    it('Handles default case', () => {
        const state = GData(undefined, {});
        expect(state).toEqual(initialState);
    });
    it('Handles stage update ', () => {
        const data =  1;
        const action = { type: actions.stage, payload: data };
        const state = GData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles Signature save ', () => {
        const data =  false;
        const action = { type: actions.loading, payload: data };
        const state = GData(undefined, action);
        expect(state).toMatchSnapshot();
    });
});