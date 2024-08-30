export interface IHttpResponse<T> {
  data: T;
  status: number;
}

export interface IHttpClientRepository {
  get<T>(endpoint: string): Promise<IHttpResponse<T>>;
}
