import type {
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "axios";

export type RequestOptionType<P = object> = {
  params?: P;
  headers?: Record<string, string>;
  accessToken?: string;
  isWholePath?: boolean;
  timeout?: number;
  cancelToken?: any;
  signal?: AbortSignal;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

const apiClient = axios.create();

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use((response) => {
  return response.data;
});

async function request<T = any, D = any, P = any>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: D,
  options?: RequestOptionType<P>
): Promise<AxiosResponse<T> | any> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const URL = url;

  const axiosConfig: AxiosRequestConfig = {
    method,
    url: URL,
    headers,
    data: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await apiClient<T>(axiosConfig);
    return response;
  } catch (error: any) {
    console.log({ error });

    throw error.response.data;
  }
}

const http = {
  get: <R = any, P = any>(url: string, options?: RequestOptionType<P>) =>
    request<R, undefined, P>("GET", url, undefined, options),
  post: <R = any, D = any>(url: string, data: D, options?: RequestOptionType) =>
    request<R, D>("POST", url, data, options),
  put: <R = any, D = any>(url: string, data?: D, options?: RequestOptionType) =>
    request<R, D>("PUT", url, data, options),
  delete: <R = any, D = any>(
    url: string,
    data?: D,
    options?: RequestOptionType
  ) => request<R, D>("DELETE", url, data, options),
};

export default http;
