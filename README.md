# Projet Symfony/Angular

Ce projet est une application web développée avec Symfony pour le backend et Angular pour le frontend.

## Installation

### Backend (Symfony)

1. Installer les dépendances avec Composer :
    ```bash
    composer install
    ```

2. Créer la base de données :
    ```bash
    php bin/console doctrine:database:create
    ```

3. Modifier le fichier `.env` pour configurer la base de données.

4. Mettre à jour le schéma de la base de données :
    ```bash
    php bin/console doctrine:schema:update --force
    ```

5. Démarrer le serveur Symfony :
    ```bash
    symfony server:start
    ```

### Frontend (Angular)

1. Installer les dépendances avec npm :
    ```bash
    npm install
    ```

2. Démarrer le serveur Angular :
    ```bash
    ng serve
    ```

## Données de départ

Pour avoir des données initiales dans la base de données, exécuter les requêtes SQL suivantes :
