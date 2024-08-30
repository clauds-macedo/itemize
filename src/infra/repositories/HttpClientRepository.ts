/* eslint-disable class-methods-use-this */
import type { IHttpClientRepository } from '@domain/repositories/IHttpClientRepository';
import axios from 'axios';

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
