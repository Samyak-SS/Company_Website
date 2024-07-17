// // BlogRoutes.js
// import express from "express";
// import { Login, sendblogs, takeblog, sendblogsAdmin, blogsAdminBoolean } from '../controllers/BlogControllers.js';
// import { upload } from '../server.js';


// const router = express.Router();

// router.route("/takeblogs").post(takeblog);
// router.route("/sendblogs").get(sendblogs);
// router.route("/sendblogsAdmin").get(sendblogsAdmin);
// router.route("/blogsAdminBoolean").post(blogsAdminBoolean);
// router.route("/login").post(Login);
// // router.route("/admin").post(showblogs);


// export default router;

// BlogRoutes.js
import express from "express";
import { Login, sendblogs, takeblog, sendblogsAdmin, blogsAdminBoolean, updateBlogAdmin, saveMessage, showMessages, fetchBlogImages } from '../controllers/BlogControllers.js';

const BlogRoutes = (upload) => {
    const router = express.Router();

    router.route("/takeblogs").post(upload.single('image'), takeblog);
    router.route("/sendblogs").get(sendblogs);
    router.route("/sendblogsAdmin").get(sendblogsAdmin);
    router.route("/blogsAdminBoolean").post(blogsAdminBoolean);
    router.route("/login").post(Login);
    router.route("/showMessages").get(showMessages);
    // router.route("/updateBlogAdmin").post(updateBlogAdmin);
    router.route("/updateBlogAdmin/:id").put(updateBlogAdmin);
    router.route("/saveMessage").post(saveMessage);
    router.route("/fetchBlogImages").get(fetchBlogImages);

    return router;
};

export default BlogRoutes;
