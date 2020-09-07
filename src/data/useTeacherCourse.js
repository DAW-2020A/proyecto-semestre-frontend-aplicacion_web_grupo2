import useSWR from 'swr';
import API from './index';

export const useTeacherCourse = (id ) => {
    const { data, error, mutate } = useSWR( () => `/users/${ id }/courses`, API.fetcher );
    return {
        courses: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
