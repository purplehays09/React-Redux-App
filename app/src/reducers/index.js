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
                id:'',
                name:'',
                army_type:'',
                team_bonus:''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                id:'',
                name:'',
                army_type:'',
                team_bonus:''
            }

        case FETCH_ERROR:
            return{
                ...state,
                id:'',
                name:'',
                army_type:'',
                team_bonus:''
            }
    
        default:
            return state

    }

}