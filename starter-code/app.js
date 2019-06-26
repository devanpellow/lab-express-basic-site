const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
	// res.send("NASA Photo Gallery")
	res.sendFile(__dirname + "/pages/home.html");
});

app.get("/about", (req, res) => {
	// res.send("A Site About Space")
	res.sendFile(__dirname + "/pages/about.html");
});

app.get("/gallery", (req, res) => {
	// res.send("A Site About Space")
	res.sendFile(__dirname + "/pages/gallery.html");
});

app.get("*", (req, res) => {
	res.status(404).send("404 Page Not Found");
});

app.listen(3000);
