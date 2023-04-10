import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { GET_USERS, SET_USERS } from '../redux/action';

// // Worker saga cho action GET_USERS
// function* getUsersSaga() {
// try {
// yield put(fetchUsers());
// } catch (error) {
// console.log(error);
// }
// }

// // Watcher saga cho action GET_USERS
// export function* watchGetUsers() {
// yield takeEvery(GET_USERS, getUsersSaga);
// }

// // Worker saga cho action DELETE_USER
// function* deleteUserSaga(action) {
// try {
// yield put(deleteUserApi(action.payload));
// } catch (error) {
// console.log(error);
// }
// }

// // Watcher saga cho action DELETE_USER
// export function* watchDeleteUser() {
//     yield takeEvery(DELETE_USER, deleteUserSaga);
// }

const BaseURL = "https://jsonplaceholder.typicode.com/users";

function* getUsers(action) {
    console.log('Saga: getUsers');
    try {
        const response = yield axios.get(BaseURL);
        console.log('XL: rootSaga Dispatch SET_USERS');
        yield put({ type: SET_USERS, payload: response.data });
        console.log(2);
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_USERS, getUsers);
}