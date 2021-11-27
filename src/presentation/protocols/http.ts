export type HttpRequest = {
    body?: any,
    params?: any,
    headers?: any,
};

export type HttpResponse = {
    status: number,
    body?: any
}