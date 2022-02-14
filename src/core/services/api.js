import { getData } from './axios';

const axiosManagement = {
  get: getData,
};

class Api {
  constructor(method) {
    this.method = method;
  }

  async get(url) {
    return await this.method.get(url);
  }
}

export const api = new Api(axiosManagement);
