const { Sequelize } = require("sequelize");
require("dotenv").config(); // Charge les variables d'environnement
console.log("Nom de la base de données :", process.env.DB_NAME);

// Création de la connexion Sequelize
console.log("Connexion à MySQL avec :", process.env.DB_USER, process.env.DB_NAME);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Désactive les logs SQL
});

// Vérification de la connexion
sequelize.authenticate()
    .then(() => console.log("✅ Connexion à la base de données réussie"))
    .catch(err => console.error("❌ Erreur de connexion :", err));

// Exportation pour utilisation dans les modèles
module.exports = sequelize;
