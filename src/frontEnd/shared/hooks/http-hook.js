import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);
    // a hook that turns into a reference which will not reinitialise
    // It'll basically store data across re render cycle


    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        //by using useCallback, this function will never get recreate it when the component that uses ths hook re renders
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl)
        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }

            return responseData;
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);// the function has no dependencies so i add an empty array as a second argument to use callback

    const clearError = () => {
        setError(null);
    }

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        };
        //return this function excuted as a cleanup function before the next time useEffect runs again
        //or also when the component that uses useEffect
        //So now in this case the component that uses hte custom hook unmout
    }, []);

    return { isLoading, error, sendRequest, clearError };
};


module.exports(useHttpClient);