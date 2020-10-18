fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const numberOfCompletedPerUserObject = json.reduce((totalObject, todoItem) => {
      if (todoItem.completed) {
        if (totalObject[todoItem.userId]) {
          totalObject[todoItem.userId] += 1;
        } else {
          totalObject[todoItem.userId] = 1;
        }
      }
      return totalObject;
    }, {})
    console.log(numberOfCompletedPerUserObject);
  })
  .catch(function(err) { 
    console.log(err);
  });