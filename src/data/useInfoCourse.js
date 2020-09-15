import useSWR from 'swr';
import API from './index';

export const useInfoCourse = (id) => {
    const { data, error } = useSWR( `/courses/${ id }`, API.fetcher );

    return {
        testsCourse: data && data.data,
        isLoading: !error && !data,
        isError: error,
    };

};