import useSWR from 'swr';
import API from './index';

export const useComplete = (id) => {
    const { data, error } = useSWR( `/activities/${ id }`, API.fetcher );

    return {
        Complete: data && data.data,
        isLoading: !error && !data,
        isError: error,
    };

};