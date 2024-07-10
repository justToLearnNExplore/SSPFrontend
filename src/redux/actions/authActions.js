import { AUTH } from "../constants/actionTypes";
import * as api from "../../api/authApi";

export const loadUser = () => async (dispatch) => {
   const localUser = JSON.parse(localStorage.getItem('user_info'));

   if(localUser){
      dispatch({type: AUTH, data: localUser});
   }
};

const handleRedirectAfterLogin = (navigate) => {
    const redirectPath = localStorage.getItem('redirectAfterLogin');
    const game = localStorage.getItem('redirectGame');
    if (redirectPath && game) {
        navigate(redirectPath, { state: { game: JSON.parse(game) } });
        localStorage.removeItem('redirectAfterLogin');
        localStorage.removeItem('redirectGame');
    } else if (redirectPath) {
        navigate(redirectPath);
        localStorage.removeItem('redirectAfterLogin');
    } else {
        navigate('/');
    }
};

export const login = (formData, navigate, setSuccessMessage) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });
        setSuccessMessage('Login successful');
        handleRedirectAfterLogin(navigate);
    } catch (error) {
        alert(`Login failed: ${error.response?.data?.error || error.response?.data?.message || error.message}`);
    }
};

export const signup = (formData, navigate, setSuccessMessage) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: AUTH, data });
        setSuccessMessage('Signup successful');
        handleRedirectAfterLogin(navigate);
    } catch (error) {
        alert(`Signup failed: ${error.response?.data?.error || error.response?.data?.message || error.message}`);
    }
};

export const signInWithGoogle = (accessToken, navigate, setSuccessMessage) => async (dispatch) => {
    try {
        const { data } = await api.signInWithGoogle(accessToken);
        dispatch({ type: AUTH, data });
        setSuccessMessage('Google Sign-In successful');
        handleRedirectAfterLogin(navigate);
    } catch (error) {
        alert(`Sign in with Google failed: ${error.response?.data?.error || error.response?.data?.message || error.message}`);
    }
};

export const signUpWithGoogle = (accessToken, navigate, setSuccessMessage) => async (dispatch) => {
    try {
        const { data } = await api.signUpWithGoogle(accessToken);
        dispatch({ type: AUTH, data });
        setSuccessMessage('Google Sign-Up successful');
        handleRedirectAfterLogin(navigate);
    } catch (error) {
        alert(`Sign up with Google failed: ${error.response?.data?.error || error.response?.data?.message || error.message}`);
    }
};
