import { GetHttpClientUseCase } from '@/domain/usecases/GetHttpClientUseCase';
import { AxiosHttpClientRepository } from '@/infra/repositories/HttpClientRepository';

export const getHttpClient = new GetHttpClientUseCase(
  new AxiosHttpClientRepository(),
);
