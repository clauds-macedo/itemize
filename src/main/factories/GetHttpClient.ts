import { GetHttpClientUseCase } from '@domain/usecases/GetHttpClientUseCase';
import { AxiosHttpClientRepository } from '@infra/repositories/HttpClientRepository';

export const httpClient = new GetHttpClientUseCase(
  new AxiosHttpClientRepository(),
);
