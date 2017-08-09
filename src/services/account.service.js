import axios from 'axios';

let Account = {};
Account._authenticated;

Account.init = () => {
    let token = localStorage.getItem('acc_token');
    if(token) Account.setToken(token);
    return new Promise((resolve, reject) => {
        if(this.isAuthenticated()) {
            Account.load()
            .then(resolve);
        } else {
            resolve();
        }
    });
};

Account.isAuthenticated = () => {
    return this._authenticated;
};

Account.load = () => {
    return new Promise((resolve, reject) => {
        axios.get(`api/account`)
        .then(response => {
            console.log(response.data);
            resolve();
        }).catch(reject);
    });
};

Account.setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    this._authenticated = true;
};

Account.authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`api/auth/login`, {
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