//calling get method to view all the tasks
export const getTodos = () =>
  new Promise((resolve, reject) => {
    const url = `${process.env.REACT_APP_BASE_URL}/demo/api/todo`;
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => resolve(res.json()))
      .catch((error) => reject());
  });

//calling post method to add new items
export const postTodo = (todo) =>{
    const body = {
        name: todo.content,
        status: todo.status
    }
  return new Promise((resolve, reject) => {
    const url = `${process.env.REACT_APP_BASE_URL}/demo/api/todo`;
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(body)
    })
      .then((res) => resolve(res.json()))
      .catch((error) => reject());
  });}

//calling update method to send updated items
export const updateTodo = (todo) =>{
    const body = {
        name: todo.content,
        status: todo.status
    }
  return new Promise((resolve, reject) => {
    const url = `${process.env.REACT_APP_BASE_URL}/demo/api/todo/get-tasks`;
    fetch(url, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(body)
    })
      .then((res) => resolve(res.json()))
      .catch((error) => reject());
  });}
