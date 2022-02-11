const { Router } = require("express");
const db = require("../Database/database.js");
const router = Router();
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());
router.use((req, res, next) => {
  console.log("This is the request from /USERS route");
  next();
});

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/", (req, res) => {
  const { username, code } = req.body;
  const userId = code;
  console.log(username, userId);
  if (username && userId) {
    try {
      db.promise().query(
        `INSERT INTO USERS VALUES('${username}', '${userId}') `
      );
      res.status(200).send({ msg: "User Created" });
    } catch (err) {
      console.log(err);
    }
  }
});
module.exports = router;
