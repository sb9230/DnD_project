var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
var port = 3333;
var path = require("path");
// var session = require("express-session");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.use("/signin", indexRouter);

app.post("/action1", function (req, res) {
  const id = req.body.id;
  const pass = req.body.pass;
  const w_name = req.body.w_name;
  const w_birth = req.body.w_birth;
  const w_addr = req.body.w_addr;
  const w_phone = req.body.w_phone;

  console.log(id);
  console.log(pass);
  console.log(w_name);
  console.log(w_birth);
  console.log(w_addr);
  console.log(w_phone);
});

app.post("/action2", function (req, res) {
  const p_num = req.body.p_num;
  const id = req.body.id;
  const pass = req.body.pass;
  const p_name = req.body.p_name;
  const p_phone = req.body.p_phone;
  const ceo = req.body.ceo;
  const p_addr = req.body.p_addr;
  const ceo_phone = req.body.ceo_phone;

  console.log(p_num);
  console.log(id);
  console.log(pass);
  console.log(p_name);
  console.log(p_phone);
  console.log(ceo);
  console.log(p_addr);
  console.log(ceo_phone);
});

server.listen(port, function () {
  console.log("웹 서버 시작", port);
});
