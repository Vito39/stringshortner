
const  iState={
    text:'',
    output :'get encyrpt'
}
const reducer = (state = iState,action ) =>{

    if(action.type ==='UPDATE_INPUT')
     {
           return{
            text : action.payload
         }
     }
    return state;
 }
export default reducer;