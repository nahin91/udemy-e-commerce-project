//this is the same concept of the insurance company's Dropping Off Forms
// this is basically the FORM with type & payload
// check here to understand redux https://codepen.io/nahin91/pen/ZEyybRQ

import { UserActionTypes } from "./user.types"

export const setCurrentUser = user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})