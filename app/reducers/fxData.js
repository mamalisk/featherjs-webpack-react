function fxData(state = [], action){
  switch(action.type) {
    case 'UPDATE_FX_DATA' :
       return [

       ]
    default:
       return state;
  }
  return state;
}

export default fxData;
