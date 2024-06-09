const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.signup = (req, res, next) => {
  console.log("Requête reçue : ", req.body); 
  const { email, password, pseudo } = req.body;

  // Vérifier que tous les champs requis sont présents
  if (!email || !password || !pseudo) {
    return res.status(400).json({ error: "Email et mot de passe ou pseudo sont requis" });
  }
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        roles: req.body.roles || "USER",
        pseudo: req.body.pseudo
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              {
                userId: user._id,
                role: user.roles,
                pseudo: user.pseudo,
                level: user.level,
                email: user.email
              },
              "RANDOM_TOKEN_SECRET",
              { expiresIn: "24h" }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllUser = (req, res, next) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};
exports.getUser = (req, res, next) => {
  User.findOne({_id: req.params.id})
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
};
exports.updateUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.param.id })
    .then(() => res.status(200).json({ message: "User Updated" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.patchUser = (req, res, next) => {
  const userId = req.params.id;
  const updatedFields = { ...req.body };

  if (updatedFields.password) {
    bcrypt.hash(updatedFields.password, 10)
      .then(hash => {
        updatedFields.password = hash;
        User.updateOne({ _id: userId }, { $set: updatedFields })
          .then(() => res.status(200).json({ message: "User updated successfully" }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  } else {

    User.updateOne({ _id: userId }, { $set: updatedFields })
      .then(() => res.status(200).json({ message: "User updated successfully" }))
      .catch(error => res.status(400).json({ error }));
  }
};
exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.deletedCount === 0) {
        // Si aucun utilisateur n'a été supprimé, renvoyer une erreur 404
        return res.status(404).json({ message: "User not found" });
      }
      // Utilisateur supprimé avec succès
      res.status(204).send();
    })
    .catch((error) => {
      // Erreur lors de la suppression de l'utilisateur
      console.error('Error deleting user:', error); // Log de l'erreur pour le serveur
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    });
};

