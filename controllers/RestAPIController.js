import Contact from "../models/contactModel.js";

const index = (req, res) => {
   Contact.find({}, function (err, contacts) {
    //  res.send(contacts);
     res.render("index", {data:contacts});
   });
  
};
const add = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "please fill the all fields!" });
    return;
  }
  // new user
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
console.log(req.body);
  contact
    .save(contact)
    .then((data) => {
      res.send(data)
    //   res.redirect("index");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};
const edit = (req, res) => {
 
    if (!req.body) {
      return res
        .status(400)
        .send({ message: "Data to update can not be empty" });
    }

    const id = req.params.id;
    Contact.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({
              message: `Cannot Update user with ${id}. Maybe user not found!`,
            });
        } else {
            res.send({ msg: 'Data Updated' });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update user information" });
      });
 
};
const delete_d = (req, res) => {
 const id = req.params.id;
console.log(id)
 Contact.findByIdAndDelete(id)
   .then((data) => {
     if (!data) {
       res
         .status(404)
         .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
     } else {
       res.send({
         message: "User was deleted successfully!",
       });
     }
   })
   .catch((err) => {
     res.status(500).send({
       message: "Could not delete User with id=" + id,
     });
   });
};
export  { index, add, edit, delete_d };
