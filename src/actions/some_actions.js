import { TYPE_OF_ACTION } from '../actions/types.js';

export function doSomething(){
  return function(dispatch){
    const response = {data: 123};
    dispatch({ type: TYPE_OF_ACTION, payload: response.data });
  }
}
