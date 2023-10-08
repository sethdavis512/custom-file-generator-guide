# useFetch

## Generator

```js title="plopfile.js"
export default function ({ setGenerator }) {
    setGenerator('use-fetch', {
        description: 'A custom useFetch hook',
        prompts: [],
        actions: [
            {
                type: 'addMany',
                destination: process.cwd(),
                templateFiles: 'plop-templates/use-fetch/**/*.hbs',
                base: 'plop-templates/use-fetch'
            }
        ]
    });
}
```

## Template

```ts
import { useState, useEffect } from 'react';

type FetchOptions = {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
};

type FetchResponse<Data> = {
    data: Data | null;
    loading: boolean;
    error: Error | null;
};

export default function useFetch<Data>(
    url: string,
    options?: FetchOptions
): FetchResponse<Data> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
}
```
