fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedNumber = json.reduce((total,todoItem) => {
      if (todoItem.completed) {
          return total+=1
      } else {
        return total;
      }
    },0)
    console.log(completedNumber);
  })
  .catch(function(err) { 
    console.log(err);
  });