
import useSWR from 'swr';
import API from './index';

export const useMChoice = ( id, options= {} ) => {
    const { data, error } = useSWR( `/multiple_choices/${ id }`, API.fetcher, options );

    return {
        mchoice: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
