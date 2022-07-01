import { LOGIN, PROFILE, REGISTER } from "./action";

export const reduer = (state={register:{}, profiles:{},login:{}},{type,payload}) => {
    switch(type)
    {
        case LOGIN: {
            return {
                ...state,login:payload
            }
        }
        case REGISTER: {
            return {
                ...state,register:payload
            }
        }
        case PROFILE: {
            return {
                ...state,profiles:payload
            }
        }
        default : {
            return{
                state
            }
        }
}
}