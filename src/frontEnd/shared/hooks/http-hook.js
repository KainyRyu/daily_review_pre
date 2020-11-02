import { useState, useCallback, useRef, useEffect } from 'react';


export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);
    // a hook that turns into a reference which will not reinitialise
    // It'll basically store data across re render cycle
    //not managing as a state, for a state react would also manage it to survive
    //re render cycles, because i don't want to update the UI when i change this data.

    const sendRequest = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
            setIsLoading(true);
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl);
            //this current property holds does array which doesn't change across re render cycles
            // to this i push the abort controller
        
            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers,
                    signal: httpAbortCtrl.signal
                });

                const responseData = await response.json();

                activeHttpRequests.current = activeHttpRequests.current.filter(
                    reqCtrl => reqCtrl !== httpAbortCtrl
                );

                if (!responseData.ok) {
                    throw new Error(responseData.message)
                }

                setIsLoading(false);
                return responseData;
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
                throw err;
        }
    }, []); // this function has no dependencies. So now we won't see infinite loops

    const clearError = () => {
        setError(null);
    }

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        };
        // return this function excuted as a cleanup function before the next time useEffect runs again
        // or also when the component that uses useEffect
        // So now in this case the component that uses hte custom hook unmout
    }, []);

    return { isLoading, error, sendRequest, clearError };
};

