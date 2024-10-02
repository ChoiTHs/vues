import axios from 'axios';

const config ={
    baseUrl: 'http://localhost:3000'
}

function fetchedTodoList(){
    return axios.get(`${config.baseUrl}/todo`);
}

function deleteTodo(id){
    return axios.delete(`${config.baseUrl}/todo/${id}`);
}

function fetchDiary(){
    return axios.get(`${config.baseUrl}/diary`);
}

function deleteDiary(id) {
    return axios.delete(`${config.baseUrl}/diary/${id}`);
}

function addDiary(newDiary) {
    return axios.post(`${config.baseUrl}/diary`,newDiary);
}

function updateDiary(id, diary) {
    return axios.put(`${config.baseUrl}/diary/${id}`,diary)
}

export{
    fetchedTodoList,
    deleteTodo,
    fetchDiary,
    deleteDiary,
    addDiary,
    updateDiary,
}