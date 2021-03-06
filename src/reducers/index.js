import {combineReducers} from 'redux';
import common from './common';
import page from './page';
import watchmodel from './watchmodel';
import watchhead from './watchhead';
import upperstrap from './upperstrap';
import lowerstrap from './lowerstrap';
import accessories from './accessories';
import loop from './loop';

export default combineReducers({
    common,
    page,
    watchmodel,
    watchhead,
    upperstrap,
    lowerstrap,
    accessories,
    loop,
})
