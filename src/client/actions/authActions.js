import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {getSocketNotification} from './socketNotificationActions'
import {
  API_URL,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_CURRENT_USER_PROFILE,
  CLEAR_ERRORS,
  CLEAR_CURRENT_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';
import {
  getCurrentUserPermissions,
  clearCurrentPermission,
} from './accessActions';

export const registerClientUser = (userData, history) => async dispatch => {
    await axios.post(`${API_URL}/api/users/register/client`, userData);
    history.push({
      pathname: '/',
      isRegistered: true,
      detail: 'Your user have been created. Sign in now'
    });
};

//Add new user through ADMIN Role
export const registerUser = (userData, history) => async dispatch => {
  // getter
  const token = localStorage.getItem('jwtToken');
  // Set token to Auth header
  setAuthToken(token);
  await axios.post(`${API_URL}/api/users/register/user`, userData);
  history.push({
    pathname: '/settings/admin-settings',
    isRegistered: true,
    detail: 'New user created!'
  });
};

//Update user
export const updateUser = (userData) => async dispatch => {
  const token = localStorage.getItem('jwtToken');
  // Set token to Auth header
  setAuthToken(token);
  await axios.put(`${API_URL}/api/users/updateuser`, userData);
};

export const deleteUsers = (permissionIds, history) => async dispatch => {
  // getter
  const token = localStorage.getItem('jwtToken');
  const payload = {permissionIds: Array.from(permissionIds)};
  // Set token to Auth header
  setAuthToken(token);
  await axios.post(`${API_URL}/api/users/deleteUser`, payload);
  history.push({
    pathname: '/settings/admin-settings',
    isRegistered: true,
    detail: 'User deleted!'
  });
};

// Login - Get User Token
export const loginUser = userData => async dispatch => {
  try {
    const res = await axios.post(`${API_URL}/api/users/login`, userData);
    const { token } = res.data;
    // Set token to lS
    localStorage.setItem('jwtToken', token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    console.log(decoded);
    window.localStorage.setItem("profileId", decoded.profileId);
    getSocketNotification(decoded.profileId);
    // Get current user profile
    dispatch(getCurrentUserProfile(decoded.userId));
    //Get current user permissons
    dispatch(getCurrentUserPermissions(decoded.profileId));
    // Set current user
    dispatch(setCurrentUser(decoded));
      // update last login date
    dispatch(updateLastLogin(userData));
  } catch (error) {
    console.log(error);
    return dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for ruture requests
  setAuthToken(false);
  // Clear errors
  dispatch(clearErrors());
  // Clear current profile
  dispatch(clearCurrentProfile());
  // Clear current permissions
  dispatch(clearCurrentPermission());
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Get current user profile
export const getCurrentUserProfile = userId => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/api/users/${userId}`);
    // console.log(res);
    dispatch({
      type: GET_CURRENT_USER_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    throw new Error(error);
  }
};

// Request Reset Password
export const resetPassword = (email, history) => async dispatch => {
  await axios.post(`${API_URL}/api/users/reset-password`, email);
  history.push({
    pathname: '/reset-password',
    isRequested: true
  });
};

// Update Password
export const updatePassword = (userData, history) => async dispatch => {
  const token = localStorage.getItem('jwtToken');
  // Set token to Auth header
  setAuthToken(token);
  await axios.put(`${API_URL}/api/users/reset-password`, userData);
  history.push({
    pathname: '/',
    isReset: true,
    detail: 'Your password have been updated. Sign in now'
  });
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// Clear errors
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Update user last login date
export const updateLastLogin = (userData) => async () => {
  await axios.patch(`${API_URL}/api/users/updatelastlogin`, userData);
}
// //Edit Profile
// export const editProfile = profileData => async dispatch => {
//   const profileForm = new FormData();
//   profileForm.append('name', profileData.name);
//   profileForm.append('bio', profileData.bio);
//   profileForm.append('image', profileData.image);

//   try {
//     const res = await axios.post('/api/users/', profileForm);

//     dispatch({
//       type: EDIT_PROFILE,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     });
//   }
// };
