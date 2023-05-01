import { EDIT_TASK,ADD_TASK,DELETE_TASK} from "../constant/ActionsTypes";

export const editTasK=(id, newTask)=> {
  return {
    type: EDIT_TASK,
    payload: { id, newTask }
  }

}

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask
  }
}

export const deleteTask = (id,newTask) => {
  return {
    type: DELETE_TASK,
    payload: { id, newTask }
  }
}

