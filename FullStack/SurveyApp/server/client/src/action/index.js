import axios from 'axios';
import {FETCH_USER} from './types';
const fetchUser=()=>{
    const request = axios.get('/api/user').then(
        res=>{
            dispatch({
                type:FETCH_USER,
                payload:res
            })
        }
    );
    return {
        type:FETCH_USER,
        payload:request
    }
}