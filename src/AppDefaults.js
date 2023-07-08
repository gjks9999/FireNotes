import axios  from "axios";

const axiosInstance  = axios.create({
    baseURL: "https://jk-fire-notes-default-rtdb.asia-southeast1.firebasedatabase.app",
})

axiosInstance.defaults.headers.common['auth'] = "some random token";

export default axiosInstance;