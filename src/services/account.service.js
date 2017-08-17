import axios from 'axios';
import { EventBus } from '@/eventbus.js';

let Account = {};

Account.authenticated = false;
Account.username;
Account.email;
Account.level = 0;

Account.init = () => {
    let token = localStorage.getItem('acc_token');
    if(token) Account.setToken(token);
    return new Promise((resolve, reject) => {
        if(Account.authenticated) {
            Account.load()
            .then(resolve);
        } else {
            resolve();
        }
    });
};

Account.load = () => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/account`)
        .then(response => {
            let account = response.data;
            Account.username = account.username;
            Account.email = account.email;
            Account.level = account.level;
            EventBus.$emit('authentication');
            resolve();
        }).catch(reject);
    });
};

Account.setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    Account.authenticated = true;
};

Account.authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/auth/login`, {
            email: email,
            password: password
        })
        .then(response => {
            let token = response.data.token;
            localStorage.setItem('acc_token', token);
            Account.setToken(token);
            return Promise.resolve();
        })
        .then(Account.load)
        .then(resolve)
        .catch(reject);
    });
};

export default Account;