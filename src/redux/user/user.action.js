//this is the same concept of the insurance company's Dropping Off Forms
// this is basically the FORM with type & payload
// check here to understand redux https://codepen.io/nahin91/pen/ZEyybRQ

export const setCurrentUser = user =>({
    type: 'SET_CURRENT_USER',
    payload: user
})