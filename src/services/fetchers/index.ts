import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
});

export const fetcher = {
  get: async <T>(url: string, options?: AxiosRequestConfig<any>) => {
    return instanceAxios.get<T>(url, options).then((res) => res.data);
  },
  post: async (url: string, data: any) => {
    return instanceAxios.post(url, data).then((res) => res.data);
  },
  put: async (url: string, data: any) => {
    return instanceAxios.put(url, data).then((res) => res.data);
  },
  delete: async (url: string) => {
    return instanceAxios.delete(url).then((res) => res.data);
  },
};

export const fetcherSWR = {
  useGet: <T>(url: string) =>
    useSWR<T>(url, (urlFetch, options) => fetcher.get<T>(urlFetch, options), {
      revalidateOnFocus: false,
    }),
};
