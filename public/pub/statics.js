app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
u;
app.get("/tryangle", (req, res) => {
  res.sendFile(__dirname + "/try.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/cir.html");
});

app.get("*", (req, res) => {
  res.send("404");
});

app.post("/tryangle", (req, res) => {
  const h = req.body.h;
  const w = req.body.w;
  const total = h * w;
  res.send(`finally Got it ${total}`);
});
