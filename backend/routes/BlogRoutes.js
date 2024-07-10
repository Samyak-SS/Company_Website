// BlogRoutes.js
import express from "express";
import { Login, sendblogs, showblogs, takeblog, sendblogsAdmin, blogsAdminBoolean } from '../controllers/BlogControllers.js';


const router = express.Router();

router.route("/takeblogs").post(takeblog);
router.route("/sendblogs").get(sendblogs);
router.route("/sendblogsAdmin").get(sendblogsAdmin);
router.route("/blogsAdminBoolean").post(blogsAdminBoolean);
router.route("/login").post(Login);
router.route("/admin").post(showblogs);


export default router;
