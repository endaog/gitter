import axios from 'axios';
import { API_BASE_URL } from 'common/constants';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { data = {}, status = {} } = error.response || {};
    const { message } = data;
    const errorMessage = `${message} Status code: ${status}.`;

    return Promise.reject(errorMessage);
  },
);

export async function getProjects(query: string) {
  const url = `${API_BASE_URL}/github`;
  const { data } = await axios.get(url, { headers: {
  }});

  return data;
}
