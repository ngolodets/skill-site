const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(layouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.get("/skills", function(req, res) {
  const skills = [
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Node JS",
    "Express JS",
    "Being Awesome"
  ];
  res.render('skills', {skills});
});

app.get("/contact", function(req, res) {
  var contact = {
    name: "Awesome Person",
    email: "awesome.person@awesome.com",
    phone: "555-555-5555",
    fax: "Who uses faxes anymore?",
    linkedIn: "linkedin.com/in/awesome-person",
    site: "http://awesome.io"
  };
  res.render('contact', {contact});
});

app.listen(3000, function() {
  console.log("Listening on port 3000 😳");
});