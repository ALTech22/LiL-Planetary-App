import axios from "axios";

export const changeConstelation = async (ip, number) => {
    try {
        const urlRequest = `http://${ip}:80/change`;
        const body = {status: number};
        console.log(urlRequest, body);
        return axios.post(urlRequest, body);
    } catch (e) {
        console.log(e);
    }
}