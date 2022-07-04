import {GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK} from '../constants'
const BASE_URL = "https://focused-organizer-backend.herokuapp.com/tasks/"

export const getTasks = () => {
    return (dispatch) => {   
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => dispatch({type: GET_TASKS, payload: data}))
}}

export const addTask = (task) => {
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(task)
    }

    return (dispatch) => {
        fetch(BASE_URL, configObject)
        .then(response => response.json())
        .then(data => dispatch({type: ADD_TASK, payload: data}))
    }
}


export const deleteTask = (taskId) => {
    const configObject = {
        method: "DELETE"
    }

    return (dispatch) => {
        fetch(BASE_URL + taskId, configObject)
        .then(response => response.json())
        .then(data => dispatch({type: DELETE_TASK, payload: data}))
    }
}

export const updateTask = (task) => {
    const configObject = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(task)
    }

    return (dispatch) => {
         fetch(BASE_URL + task.id, configObject)
         .then(response => response.json())
         .then(data => dispatch({type: UPDATE_TASK, payload: data}))
        }  
    }