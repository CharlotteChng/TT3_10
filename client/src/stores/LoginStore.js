const testUser = [
  {
    id: 1,
    name: 'test',
    password: 'test',
    age: 20,
    birthday: 1642658274,
    email: 'aaa@gmail.com',
    phone: '000000',
    city: 'Singapore',
    country: 'Singapore'
  }
]

const loggedInUserKey = 'logged-in-user';

class LoginStore {
  IsLoggedIn() {
    let user = window.sessionStorage.getItem(loggedInUserKey);
    return user;
  }

  GetMe() {
    let id = window.sessionStorage.getItem(loggedInUserKey);
    const user = testUser.find(user => user.id === id);
    return user;
  }

  GetUser(id) {
    const user = testUser.find(user => user.id === id);
    return user;
  }

  Login(username, password) {
    return new Promise((resolve, reject) => {
      let found = testUser.find(user => user.name === username && user.password === password);

      if (found) {
        window.sessionStorage.setItem(loggedInUserKey, found.id);
        resolve();
      }
      else {
        reject('Unable to log in.');
      }
    });
  }

  Logout() {

  }
}

const store = new LoginStore();
export default store;
