export interface IHttpResponse<T> {
  data: T;
  status: number;
}

export interface IHttpClientRepository {
  get<T>(url: string): Promise<IHttpResponse<T>>;
}
