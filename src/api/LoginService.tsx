import { HttpService } from './HttpService';

const httpService = new HttpService();

type FormData = {
    email: string,
    password: string,
    remember: string
};

export class LoginService {
    static async post(formData: FormData) {
        const data = await httpService.post();
        const loginData = {
            email: formData.email,
            password: formData.password
        }
        const isExistLogin = data.find((item) => item.email === loginData.email && item.password === loginData.password);

        if (!isExistLogin) {
            return new Promise((resolve) => {
                resolve({ code: 404, message: 'Failure'  });
            });
        }
        
        return new Promise((resolve) => {
            resolve({ code: 200, message: 'Successfully' });
        });
    }
}