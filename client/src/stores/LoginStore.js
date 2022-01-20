const testUser = [
  {
    id: 1,
    name: 'test',
    password: 'test',
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
    let user = sessionStorage.getItem(loggedInUserKey);
    return user;
  }

  GetMe() {
    let id = sessionStorage.getItem(loggedInUserKey);
    const user = testUser.find(user => user.id == id);
    return user;
  }

  GetUser(id) {
    const user = testUser.find(user => user.id == id);
    return user;
  }

  Login(name, password) {
    return new Promise((resolve, reject) => {
      let found = testUser.find(user => user.name === name && user.password === password);

      if (found) {
        sessionStorage.setItem(loggedInUserKey, found.id);
        resolve();
      }
      else {
        reject('Unable to log in.');
      }
    });
  }

  Register(name, password, birthday, email, phone, city, country) {
    return new Promise((resolve, reject) => {
      let found = testUser.find(user => user.name === name && user.password === password);

      if (found) {
        reject('User already found!');
      }
      else {
        testUser.push({
          id: testUser[testUser.length - 1],
          name,
          password,
          birthday,
          email,
          phone,
          city,
          country
        });

        resolve();
      }
    });
  }

  Logout() {
    sessionStorage.removeItem(loggedInUserKey);
  }
}

const store = new LoginStore();
export default store;
