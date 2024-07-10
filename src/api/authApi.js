import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
  });

API.interceptors.request.use( (req) => {
    if(localStorage.getItem('user_info')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user_info')).token}`;
    }

    return req;
})

export const getAllGames = () => API.get('/allgames');
export const login = (formData) => API.post('/login', formData);
export const signInWithGoogle = (accessToken) => API.post('/login', { googleAccessToken: accessToken });
export const signup = (formData) => API.post('/signup', formData);
export const signUpWithGoogle = (accessToken) => API.post('/signup', { googleAccessToken: accessToken });
export const raiseEnquiry = (enquiryData) => API.post('/raise-enquiry', enquiryData);
