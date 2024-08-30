import axios from 'axios';
import { IHttpClientRepository } from '../../domain/repositories/IHttpClientRepository';

export class AxiosHttpClientRepository implements IHttpClientRepository {
  async get<T>(url: string) {
    const response = await axios.get<T>(url);
    const { data, status } = response;
    return {
      data,
      status,
    };
  }
}
