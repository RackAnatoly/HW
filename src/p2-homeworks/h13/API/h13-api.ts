import axios from "axios";

const settings = {
    body: {success: true}
}

export const APIRequests = {
    post(value:boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: value})

    }
}
