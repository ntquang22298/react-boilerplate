import axios from 'axios';
import { message } from 'antd';
const URL = 'localhost:8080';

export const services = {
  getAPI,
  postAPI,
  putAPI,
  getAllAPI,
};

const getAPI = async (id) => {
  try {
    let res = await axios.get(`${URL}/${id}`);
    return res;
  } catch (e) {
    message.error(e);
  }
};

const postAPI = async (item) => {
  try {
    let res = await axios.post(`${URL}`, {
      item: item,
    });
    if (res.data) message.success(`create success!`);
  } catch (e) {
    message.error(e);
  }
};

const putAPI = async (item) => {
  try {
    let res = await axios.put(`${URL}`, {
      item: item,
    });
    if (res.data) message.success(`edit success!`);
  } catch (e) {
    message.error(e);
  }
};

const getAllAPI = async (item) => {
  try {
    let res = await axios.get(`${URL}`);
    return res;
  } catch (e) {
    message.error(e);
  }
};
