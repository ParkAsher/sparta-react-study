import axios from 'axios';

// axios instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    // timeout: 1,
});

instance.interceptors.request.use(
    // 요청을 보내기 전 수행하는 함수
    function (config) {
        console.log('인터셉터 요청 성공!');
        return config;
    },

    // 오류 요청을 보내기 전 수행하는 함수
    function (error) {
        console.log('인터셉터 요청 오류!');
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    // 응답을 내보내기 전 수행하는 함수
    function (response) {
        console.log('인터셉터 응답 받았습니다.');
        return response;
    },

    // 오류 응답을 내보내기 전 수행하는 함수
    function (error) {
        console.log('인터셉터 응답 오류!');
        return Promise.reject(error);
    }
);

export default instance;
