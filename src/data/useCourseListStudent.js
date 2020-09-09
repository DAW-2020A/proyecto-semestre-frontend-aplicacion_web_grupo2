import useSWR from 'swr';
import API from './index';

export const useCourseListStudent = () => {
    const { data, error, mutate } = useSWR( '/student/courses', API.fetcher );

    return {
        coursesStudent: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};