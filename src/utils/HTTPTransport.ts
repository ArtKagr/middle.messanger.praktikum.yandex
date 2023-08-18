enum methods {
    get = 'GET',
    put = 'PUT',
    post = 'POST',
    delete = 'DELETE'
}

type Options = {
    method?: methods;
    data?: Record<string, string> | null | undefined;
    headers?: Record<string, string>;
    timeout?: number;
    retries?: number;
}

class HTTPTransport {
    xhrErrors = {
        abort: 'Request aborted',
        error: 'Request error',
        timeout: 'Request timeout'
    }

    private _getQueryString (data: Record<string, string>): string {
        if (!data) {
            throw new Error('Empty data')
        }

        return Object.entries(data).reduce((acc, [key, value], index): string => {
            acc += `${index === 0 ? '?' : '&'}${key}=${value}`
            return acc
        }, '')
    }

    request (url: string, options: Options = {}, timeout: number = 1000): Promise<XMLHttpRequest> {
        return new Promise((res, rej) => {
            const req = new XMLHttpRequest();
            req.open(options.method || methods.get, url);
            req.timeout = timeout;

            if (options.headers) {
                Object.entries(options.headers).forEach(([key, value]) => {
                    req.setRequestHeader(key, value);
                })
            }

            req.onload = () => res(req);
            req.onabort = () => rej(new Error(this.xhrErrors.abort));
            req.onerror = () => rej(new Error(this.xhrErrors.error));
            req.ontimeout = () => rej(new Error(this.xhrErrors.timeout));

            if (options.data || options.method !== methods.get) {
                req.setRequestHeader('Content-Type', 'application/json');
                req.send(JSON.stringify(options.data));
            } else {
                req.send();
            }
        });
    };

    get (url: string, options: Options = {}) {
        return this.request(
            `${url}${this._getQueryString(options.data || {})}`,
            { ...options, method: methods.get },
            options.timeout
        );
    };

    post (url: string, options: Options = {}) {
        return this.request(
            url,
            { ...options, method: methods.post },
            options.timeout
        )
    };

    put (url: string, options: Options = {}) {
        return this.request(
            url,
            { ...options, method: methods.put },
            options.timeout
        )
    };

    delete (url: string, options: Options = {}) {
        return this.request(
            `${url}${this._getQueryString(options.data || {})}`,
            { ...options, method: methods.delete },
            options.timeout
        )
    };
}

function fetchWithRetry (url: string, options: Options = {}): Promise<XMLHttpRequest | Response> {
    const { retries = 1, ...restOptions }: Options = options;
    const httpTransport: HTTPTransport = new HTTPTransport();

    return httpTransport.request(url, restOptions)
        .then((req: XMLHttpRequest) => {
            const { responseText, status, statusText } = req;
            return new Response(responseText, { status, statusText })
        })
        .catch((e) => {
            if (retries > 1) {
                return fetchWithRetry(url, { ...restOptions, retries: retries -1 });
            } else {
                throw e;
            }
        })
}

export {
    HTTPTransport,
    fetchWithRetry
}
