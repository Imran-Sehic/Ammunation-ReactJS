import axios from 'axios';

export function reqestGetProfile() {
    return axios.request({
        method: "GET",
        url: process.env.REACT_APP_GET_PROFILE_URL,
    });
}
