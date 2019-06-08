let express = require('express');
let methodOverride = require('method-override')


let app = express();


app.use(express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

let todolist = [];


/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

.get('/todo/:id', function(req, res) {
  let id = req.params.id;

  if (todolist[id]) {
    res.send(todolist[id]);
  }
  else {
    res.status(400);
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

.put('/todo/:id', function (req, res) {
    todolist[req.params.id] = req.body.updatetodo;
    console.log(req.body);
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);
