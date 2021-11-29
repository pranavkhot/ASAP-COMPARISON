const model = require("../../models/model");
const brand = require("../../models/brand");
const Detail = require("../../models/detail");
const News = require("../../models/news");

//FACTORY FUNCTION USED TO CREATE OBJECT
function homeController() {
  return {
    async index(req, res) {
      const brands = await brand.find().sort({ 'name': -1 });
      const models = await model.find().sort({ 'name': -1 });
      const details = await Detail.find().sort({ 'name': -1 });
      const news = await News.find().sort({ '_id': -1 });
      // console.log(details);
      return res.render("home", {
        brands: brands,
        details: details,
        models: models,
        news: news,
      });
    },
    about(req, res) {
      return res.render("about");
    },
  };
}
module.exports = homeController;
