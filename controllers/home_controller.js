// module.exports.home=function(req,res){
//     // return res.end('<h1>home</h1>');
//      return res.render('home',{
//         title:"home"
//      });
// }

const Project = require('../models/project');
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch {
    console.log('Error',err);
    return;
  }
};