import { TYPE_OF_ACTION } from '../actions/types.js';

export default function(state = {}, action){
    switch(action.type){
      case TYPE_OF_ACTION:
          return { ...state, data: action.payload };
    }
    return state;
  }
