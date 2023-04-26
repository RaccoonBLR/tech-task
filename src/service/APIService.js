import axios from 'axios';

axios.defaults.baseURL = 'https://643f136fb9e6d064beee6b21.mockapi.io/users';

async function getUsers(page) {
  return await axios.get(`?page=${page}&limit=3`).then(({ data }) => data);
}

export const putUser = async (id, user) => {
  const resp = await axios.put(`/${id}`, user);
  return resp.data;
};

export { getUsers };
