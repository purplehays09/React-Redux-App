export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";



export function fetchData(){
    return {
        type:FETCH_DATA,
        payload:''
    }
}
export function fetchSuccess(){
    return {
        type:FETCH_SUCCESS,
        payload:''

    }
}
export function fetchError(){
    return {
        type:FETCH_ERROR,
        payload:''
    }
}