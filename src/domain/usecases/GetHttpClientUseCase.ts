import { IHttpClientRepository } from '../repositories/IHttpClientRepository';

export class GetHttpClientUseCase {
  constructor(private httpClientRepository: IHttpClientRepository) {}

  async execute<T>(url: string) {
    return this.httpClientRepository.get<T>(url);
  }
}
