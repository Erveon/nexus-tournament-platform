let Tester = {};

Tester.authenticated = false;

Tester.init = () => {
    return new Promise((resolve, reject) => {
        let pw = localStorage.getItem('testerpw');
        if(pw) {
            Tester.authenticate(pw)
            .then(resolve);
        } else {
            resolve();
        }
    });
};

Tester.authenticate = (pw) => {
    return new Promise((resolve, reject) => {
        if(pw === '#7oxic') {
            localStorage.setItem('testerpw', pw);
            Tester.authenticated = true;
        }
        resolve();
    });
};

export default Tester;