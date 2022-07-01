export const REGISTER = "REGISTER"
export const LOGIN = "LOGIN"
export const PROFILE = "PROFILE"
export const reg = (payload) => ({
    type:REGISTER,
    payload
})
export const profile = (payload) => ({
    type:PROFILE,
    payload
})

export const logins = (payload) => ({
    type:LOGIN,
    payload
})
