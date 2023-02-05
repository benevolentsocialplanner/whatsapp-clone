import axios from "axios";



const baseUrl = "http://localhost:5000";




export const createRoomApi = (data) => axios.post(`${baseUrl}/create/room/`, data)