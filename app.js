let express = require('express');
let methodOverride = require('method-override');


let app = express();


app.use(express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method;
    delete req.body._method;
    return method
  }
}));

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
  res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

/* Get a single to do item */
.get('/todo/:id', function(req, res) {
  let id = req.params.id;
  let todo = todolist[id];

  if (todolist[id]) {
    res.render('edit.ejs', { id, todo, clickHandler:"func1();" });
  }
  else {
    res.status(404);
    res.send("The id provided does not exist.")
  }

})

/* Adding an item to the to do list */
.post('/todo', function(req, res) {
  let newtodo = req.body.newtodo;

  if (newtodo !== '') {
      todolist.push(newtodo);
  }

  res.redirect('/todo');
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id !== '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* Update an item from the to do list */
.put('/todo/:id', function (req, res) {
    todolist[req.params.id] = req.body.updatetodo;

    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res){
    res.redirect('/todo');
})

.listen(8000);

module.exports.app = app;
