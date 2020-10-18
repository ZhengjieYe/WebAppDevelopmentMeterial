fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((uncompletedArray, todoItem) => {
      if (!todoItem.completed) {
        uncompletedArray.push({
          'userId':todoItem.userId,
          'title':todoItem.title,
        })
      }
      return uncompletedArray;
    }, [])
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });