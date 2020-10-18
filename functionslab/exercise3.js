fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.filter(todoItem => !todoItem.completed)
      .map((filterItem) => {
        return {
          'userId':filterItem.userId,
          'title':filterItem.title,
        };
    })
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });