//middleware
const middleware = (req, res, next) => {
  console.log("middleware");
  req.curenTime = new Date(Date.now());
  next();
};

app.use(middleware); // use all app get route

//home route
app.get("/", (req, res) => {
  res.send("hello home " + req.curenTime);
});
