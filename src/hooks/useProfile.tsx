import {useEffect, useState} from 'react';

const useProfile = (userId: string) => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch('https://api.github.com/users/' + userId);
                if (!result.ok) {
                    throw new Error('result is not OK!');
                }
                setData(result.blob());
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        })()
    }, []);
    return {data, isLoading, isError};
};

export default useProfile;