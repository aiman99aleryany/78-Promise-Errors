// Starting from the previous exercise, try to better handle all errors through the Error class and the catch method. Also add the finally method.

// I already have handled everything with catch from the prevoius exercise, but I will only add the finally method

const isLogged = true;

const validateLogging = (isLogged) =>
  new Promise((resolve, reject) => {
    if (isLogged) resolve(Math.random());
    else reject(new Error("User is not logged in"));
  });

const checkIfGreater = (number) =>
  new Promise((resolve, reject) => {
    if (typeof number !== "number")
      reject(new Error(`${number} is not a number`));
    else if (number > 0.5) resolve({ name: "John", age: 24 });
    else reject(new Error(`${number} is less than 0.5`));
  });

const getUserInfo = (validatation, greatness, isLogged) => {
  validatation(isLogged)
    .then((n) => checkIfGreater(n))
    .then((userInfo) => console.log(userInfo))
    .catch((err) => console.log(err))
    .finally(() => console.log("process accomplished"));
};

getUserInfo(validateLogging, checkIfGreater, isLogged);
