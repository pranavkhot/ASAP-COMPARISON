const homeController = require("../app/http/controllers/homeController");

const authController = require("../app/http/controllers/authController");

const singleController = require("../app/http/controllers/singleController");

const allModelController = require("../app/http/controllers/allModelController");

const compareController = require("../app/http/controllers/dropdown/compareController");
const firstDropdown = require("../app/http/controllers/dropdown/firstDropdown");
const secondDropdown = require("../app/http/controllers/dropdown/secondDropdown");

const historyController = require("../app/http/controllers/history/historyController");
const historyViewController = require("../app/http/controllers/history/historyViewController");

const preComparedController = require("../app/http/controllers/preCompared/preComparedController");


const profileController = require("../app/http/controllers/profile/profileController");

const searchController = require("../app/http/controllers/search/searchController");

const adminHomeController = require("../app/http/controllers/admin/adminHomeController");

const adminEditController = require("../app/http/controllers/admin/adminEditController");

const subscribeController = require("../app/http/controllers/subscribe/subscribeController");
const guest = require("../app/http/middleware/guest");
const auth = require("../app/http/middleware/auth");
const admin = require("../app/http/middleware/admin");


function initRoutes(app) {
    app.get("/", homeController().index);

    app.get("/login", guest, authController().login);
    app.post("/login", authController().postLogin);
    app.get("/reset", guest, authController().reset);
    app.post("/reset", authController().postReset);
    app.get("/reset-password/:token/:id", authController().beforeReset);
    app.post("/reset-password/:token/:id", authController().afterReset);
    app.get("/register", guest, authController().register);
    app.post("/register", authController().postRegister);
    app.post("/logout", authController().logout); 

    app.get("/mobile/compare", compareController().index);
    app.post("/model", firstDropdown().index);
    app.post("/data", firstDropdown().index1);
    app.post("/model1", secondDropdown().index);
    app.post("/data1", secondDropdown().index1);

    app.get("/mobile/All-Models", allModelController().index);

    app.get("/mobile/:id", singleController().index);

    app.get("/customer/history", auth, historyController().index);
    app.post("/history", auth, historyController().store);
    app.post("/history/delete", auth, historyController().remove);
    app.get("/history/view", auth, historyViewController().show);

    app.get("/Pre-compared", preComparedController().show);

    app.get("/customer/:id", auth, profileController().index);
    app.post("/customer/:id", auth, profileController().update);

    app.get("/search", searchController().search);
     app.get("/searching", searchController().preSearch);
     app.get("/searchError", searchController().searchError);

     app.get("/about", homeController().about);

     app.get("/admin/home", admin, adminHomeController().index);

     app.get('/admin/delete/:modelId', admin, adminHomeController().delete)

     app.get('/admin/addColor/:id', admin, adminEditController().show)
     app.post('/admin/addColor/:id', admin, adminEditController().update)

     app.get("/admin/edit", admin, adminEditController().index);
     app.post("/admin/edit/trending", admin, adminEditController().trending);
     app.post("/admin/edit/compared", admin, adminEditController().compared);

     app.post("/subscribe", subscribeController().subscribe);
     app.get("/admin/newsletter", admin, subscribeController().newsletter);
}

module.exports = initRoutes;
