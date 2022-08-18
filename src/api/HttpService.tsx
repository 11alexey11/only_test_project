import { data } from '../mocks/data';

interface IData {
    email: string,
    password: string
}

export class HttpService {
    data: IData[]

    constructor() {
        this.data = data;
    }

    post() {
        return new Promise<IData[]>((resolve) => setTimeout(() => {
            resolve(this.data);
        }, 2000));
    }
}