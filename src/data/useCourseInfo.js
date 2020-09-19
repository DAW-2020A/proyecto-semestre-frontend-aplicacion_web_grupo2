import useSWR from 'swr';
import API from './index';

export const useCourseInfo = (id) => {
    const { data, error } = useSWR( `/infocourses/${ id }`, API.fetcher );

    return {
        InfoCourse: data && data.data,
        isLoading: !error && !data,
        isError: error,
    };

};