import React from 'react'
import {FETCH_DATA,FETCH_SUCCESS,FETCH_ERROR} from '../actions'

const initialState = {
    id:'',
    name:'',
    army_type:'',
    team_bonus:''
}

export function reducer(state = initialState,action) {
    switch(action.type){

        case FETCH_DATA:
            return{
                ...state,
                civsArray:''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                civsArray:''
            }

        case FETCH_ERROR:
            return{
                ...state,
                civsArray:''
            }
    
        default:
            return state

    }

}