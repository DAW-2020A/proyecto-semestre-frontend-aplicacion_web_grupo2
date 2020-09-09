
import useSWR from 'swr';
import API from './index';

export const useCourseListTeacher = () => {
    const { data, error, mutate } = useSWR( '/teacher/courses', API.fetcher );

    return {
        courses: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
