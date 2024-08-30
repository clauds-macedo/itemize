/* eslint-disable class-methods-use-this */
import type { IHttpClientRepository } from '@domain/repositories/IHttpClientRepository';
import { api } from '@infra/config/api';

export class AxiosHttpClientRepository implements IHttpClientRepository {
  async get<T>(endpoint: string) {
    const response = await api.get<T>(endpoint);
    const { data, status } = response;
    return {
      data,
      status,
    };
  }
}
