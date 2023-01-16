//create public file and use static
app.use(express.static("public"));

//now use route and get html file dirName
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
