export const login = (email, password) => {
  const credentials = { email, password };
  console.log(process.env);
  return new Promise((resolve, reject) => {
    const url = "https://reqres.in/api/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => resolve(data.json()))
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
