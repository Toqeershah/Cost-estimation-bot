import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

class Headers {
    static localhost = '127.0.0.1:8000';
    static server = '';
    static basePath = `//${this.localhost}`;
    static apiUrl = `${this.basePath}/api/`;


    static toast = (type, message) => {
        const notyf = new Notyf();
        notyf.open({
            message: message,
            type: type,
            position: { x: 'right', y: 'top' },
            ripple: true,
            dismissible: true,
            duration: 2000,
        });
    }
}

export default Headers;