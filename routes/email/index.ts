import express from "express";
import * as emailController from "../../controllers/email";

const router = express.Router();

router.post("/send", emailController.send);
router.post("/receive", emailController.receive);

module.exports = router;
