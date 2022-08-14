import axios from 'axios';

const signIn = (data: any) => axios.post('');
const signOut = () => axios.post('');

const UserAPI = {
  signIn,
  signOut,
};

export default UserAPI;
