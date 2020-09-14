import useSWR from 'swr';
import API from './index';

export const useInfoCourse = (id) => {
    const { data, error, mutate } = useSWR( `/courses/${ id }`, API.fetcher );

    return {
        testsCourse: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };

};