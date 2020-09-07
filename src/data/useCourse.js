
import useSWR from 'swr';
import API from './index';

export const useCourse = ( id, options= {} ) => {
    const { data, error } = useSWR( `/users/${ id }`, API.fetcher, options );

    return {
        users: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
