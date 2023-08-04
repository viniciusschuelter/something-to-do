import axios from 'axios';
import {QueryFunctionContext,  useQueryClient, UseQueryOptions} from '@tanstack/react-query';


type QueryKeyT = [string, object | undefined];

export const api = { get: <T>(url: string, params?: object) =>
        axios.get<T>(url, {...params,})
};

export const fetcher = <T>({ queryKey, pageParam}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
    const [url, params] = queryKey;
    return api
        .get<T>(url, { params: { ...params, pageParam } })
        .then((res: any) => res.data);
};

export const useFetch = <T>(
    url: string | null,
    params?: object,
    config?: UseQueryOptions<T, Error, T, QueryKeyT>
) => {
    const queryClient = useQueryClient();
    const context = queryClient.fetchQuery<T, Error, T, QueryKeyT>(
        [url!, params],
        ({ queryKey }: any) => fetcher({ queryKey } as any),
        {
            enabled: !!url,
            ...config,
        }
    );

    return context;
};
