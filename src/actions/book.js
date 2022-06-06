import api from "./api"

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

/* export const fetchall = () => {
    return dispatch => {
        // get api request
        
        api.Book().fetchAll()
        .then(
            response => {
                console.log(response);
                dispatch({
                    type:ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(err => console.log(err))
    }   
} */

export const fetchall = () => dispatch => {
    api.Book().fetchAll()
        .then(response => {
            console.log(response);
                dispatch({
                    type:ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))
}