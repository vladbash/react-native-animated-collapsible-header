import {
    createStore,
    applyMiddleware
} from 'redux';
import { createSymbiote } from 'redux-symbiote';
import reduxThunk from 'redux-thunk';

const state = {
    tracks: [],
    selected: {}
};

const { reducer, actions } = createSymbiote(state, {
    setList: (state, tracks) => ({ ...state, tracks }),
    setSelected: (state, selected) => ({ ...state, selected })
});

export const setSelected = track => dispatch => {
    dispatch(actions.setSelected(track));
};

export const initTracksList = () => dispatch => {
    const list = require('../assets/tracks.json');
    dispatch(actions.setList(list));
    setSelected(list[0])(dispatch);
};

export default createStore(reducer, applyMiddleware(reduxThunk));