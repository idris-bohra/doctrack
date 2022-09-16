let initialvalue = {}

export const loginreducerforteachers = (state = initialvalue , action)=>{

    console.log("reducer = ", action.payload)
    switch(action.type){
        case "loginactionforteachers" : return action.payload
        default : return state
    }
}