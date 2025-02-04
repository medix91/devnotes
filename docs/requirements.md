# DEVNOTES : BLOG / PORTFOLIO PERSONEL

## 1. Introduction

Nom du projet : Devnotes

But : Blog Tech Personnel sous forme de  plateforme où les utilisateurs peuvent lire et commenter des articles

 tech, avec un sous-domaine dédié au portfolio personel.

Public cible : Développeurs, passionnés de tech, amateurs ... .

## 2. Fonctionnalités principales

Un blog avec des articles sur la tech, les tutoriels et les cours.

Un sous-domaine pour le portfolio/CV.

Un système de comptes utilisateurs avec inscription et connexion.

La possibilité de commenter les articles.

### Définition des exigences du projet

## 3. Exigences Fonctionnelles
Ces exigences décrivent les actions que les utilisateurs peuvent effectuer.

Utilisateurs anonymes (non connectés) peuvent :

Consulter la liste des articles

Lire un article en détail

Voir le portfolio sur le sous-domaine

Utilisateurs connectés peuvent :

Créer un compte / Se connecter

Publier des commentaires sous les articles

Modifier leur profil

Administrateurs peuvent :

Ajouter, modifier, supprimer des articles

Supprimer des commentaires inappropriés

Gérer les utilisateurs (bannir, modifier rôles)

## 4. Exigences Techniques

technologies et contraintes techniques du projet.

Frontend : React (avec create-react-app), React Router

Backend : Node.js avec Express

Base de données : MySQL avec ORM Sequelize (ou autre)

Authentification : JWT pour sécuriser les comptes

Hébergement : Frontend sur Vercel, Backend sur un VPS

Sécurité : Protection contre XSS, CSRF, gestion des rôles

## 5. Architecture Générale

Le projet suit une architecture MVC (Modèle-Vue-Contrôleur) adaptée pour React + Node.js.

🔹 Frontend (React) :

Vue (View) : Affiche l’interface utilisateur.

Contient des composants React (ArticlesList, CommentSection, ProfilePage...)

Utilisation de  React Router pour gérer la navigation.

🔹 Backend (Node.js + Express) :
Modèle (Model) : Définition des tables de la base de données (Articles, Utilisateurs, Commentaires).

Contrôleur (Controller) : Gère la logique métier (ajout d’un commentaire, récupération des articles).

Routeur (Router) : Gère les endpoints API (/api/articles, /api/users...).

🔹 Base de Données (MySQL)

Stocke les articles, utilisateurs, commentaires.
ORM Sequelize pour faciliter les requêtes SQL.

## 6. Organisation des Dossiers

Définition de la structure des dossiers pour assurer la maintenabilité du code. Voici la structure que nous allons adopter :

📂 Projet
├── 📂 frontend/ (React App)
│ ├── 📂 src/ (Code principal)
│ │ ├── 📂 components/ (Composants réutilisables)
│ │ ├── 📂 pages/ (Pages principales)
│ │ ├── 📂 utils/ (Fonctions utilitaires)
│ │ ├── 📜 App.js (Composant principal)
│ │ ├── 📜 index.js (Point d’entrée React)
│ ├── 📜 package.json (Dépendances frontend)
│ ├── 📜 .gitignore
│
├── 📂 backend/ (Node.js API)
│ ├── 📂 models/ (Définitions des tables MySQL)
│ ├── 📂 controllers/ (Logique métier)
│ ├── 📂 routes/ (Définition des routes Express)
│ ├── 📂 middleware/ (Auth, validation, etc.)
│ ├── 📜 server.js (Fichier principal du backend)
│ ├── 📜 package.json (Dépendances backend)
│ ├── 📜 .env (Configuration des variables d’environnement)
│
├── 📂 docs/ (Documentation du projet)
│ ├── 📜 requirements.md (Spécifications fonctionnelles et techniques)
│
├── 📜 README.md (Documentation principale du projet)
├── 📜 .gitignore (Exclusions Git)





## 7. Définition des Modèles de Données
Nous allons définir les tables principales et leurs relations en nous basant sur les exigences fonctionnelles.

📌 Trois tables principales :

users → Stocke les informations des utilisateurs.

articles → Stocke les articles du blog.

comments → Stocke les commentaires des utilisateurs sous les articles.

1️⃣ Définition des tables MySQL

Champ	Type	Contraintes 	Description

📌 Table users (Utilisateurs)

id	INT	PRIMARY KEY, AUTO_INCREMENT	ID unique de l'utilisateur

username	VARCHAR(50)	UNIQUE, NOT NULL	Nom d'utilisateur

email	VARCHAR(100)	UNIQUE, NOT NULL	Adresse e-mail

password	VARCHAR(255)	NOT NULL	Mot de passe hashé

role	ENUM('user', 'admin')	DEFAULT 'user'	Rôle de l'utilisateur

created_at	TIMESTAMP	DEFAULT CURRENT_TIMESTAMP	Date d'inscription

📌 Table articles (Articles du blog)

| Champ	| Type	| Contraintes |	Description |

##___________________________________________##

id	|| INT	PRIMARY KEY, || AUTO_INCREMENT ||	ID unique de l'article ||

title	| VARCHAR(255)	| NOT NULL | Titre de l'article

content	| TEXT	| NOT NULL	| Contenu de l'article

author_id	| INT	| FOREIGN KEY → users(id)	| Auteur de l'article

created_at	| TIMESTAMP |	DEFAULT CURRENT_TIMESTAMP |	Date de publication

📌 Table comments (Commentaires)
Champ	Type	Contraintes	Description
----------------------------------------------
id	INT	PRIMARY KEY, AUTO_INCREMENT	ID unique du commentaire

content	TEXT	NOT NULL	Contenu du commentaire

user_id	INT	FOREIGN KEY → users(id)	Auteur du commentaire

article_id	INT	FOREIGN KEY → articles(id)	Article associé

created_at	TIMESTAMP	DEFAULT CURRENT_TIMESTAMP	Date du commentaire



2️⃣ 📂 Organisation des fichiers backend

### Auteur: Mehdi ZAYANI