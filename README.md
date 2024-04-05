Projet Symfony/Angular
Ce projet est une application web développée avec Symfony pour le backend et Angular pour le frontend.

Installation
Backend (Symfony)
Installer les dépendances avec Composer :
composer install

Créer la base de données :
php bin/console doctrine:database:create


Modifier le fichier .env pour configurer la base de données.

Mettre à jour le schéma de la base de données :
php bin/console doctrine:schema:update --force


Démarrer le serveur Symfony :
symfony server:start


Frontend (Angular)
Installer les dépendances avec npm :
npm install

Démarrer le serveur Angular :
ng serve

Données de départ
Pour avoir des données initiales dans la base de données, exécuter les requêtes SQL suivantes :

INSERT INTO livre (id, title, author, resume, image, categories, created_at, updated_at) VALUES 
(1, 'Le Seigneur des Anneaux', 'J.R.R. Tolkien', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer ac tellus eu metus suscipit tincidunt non ac turpis. Nulla facilisi. Vestibulum fermentum mi vel massa aliquam, in euismod elit tristique. Cras id libero eget felis consequat ultricies sit amet eget odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed condimentum euismod neque id luctus. Fusce condimentum, est id fermentum ultrices, lorem arcu suscipit nunc, non tristique elit velit id ante. Quisque eu felis tincidunt, lobortis elit vel, tincidunt metus. Duis non augue id risus luctus dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nec ligula non mi fermentum egestas. Duis eu massa ac ligula egestas pretium.', 'https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg', 'Fantasy', '1954-07-29', '1954-11-11'),
(2, '1984', 'George Orwell', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer ac tellus eu metus suscipit tincidunt non ac turpis. Nulla facilisi. Vestibulum fermentum mi vel massa aliquam, in euismod elit tristique. Cras id libero eget felis consequat ultricies sit amet eget odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed condimentum euismod neque id luctus. Fusce condimentum, est id fermentum ultrices, lorem arcu suscipit nunc, non tristique elit velit id ante. Quisque eu felis tincidunt, lobortis elit vel, tincidunt metus. Duis non augue id risus luctus dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nec ligula non mi fermentum egestas. Duis eu massa ac ligula egestas pretium.', 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg', 'Dystopie', '1949-06-08', '1949-06-08');


INSERT INTO page (id, title, content, created_at, updated_at, fk_livre) VALUES 
(1, 'Chapitre 1: L Appel de l Aventure', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer ac tellus eu metus suscipit tincidunt non ac turpis. Nulla facilisi. Vestibulum fermentum mi vel massa aliquam, in euismod elit tristique. Cras id libero eget felis consequat ultricies sit amet eget odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed condimentum euismod neque id luctus. Fusce condimentum, est id fermentum ultrices, lorem arcu suscipit nunc, non tristique elit velit id ante. Quisque eu felis tincidunt, lobortis elit vel, tincidunt metus. Duis non augue id risus luctus dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nec ligula non mi fermentum egestas. Duis eu massa ac ligula egestas pretium.', '2005-03-14 00:00:00', '2005-09-01 00:00:00', 6),
(2, 'Chapitre 2: La Communauté de l Anneau', 'Vivamus sed ligula et tortor mattis auctor ac a lectus. Duis vitae nisi in nulla varius tempor non eget dolor. Donec ut ligula eu nunc placerat convallis. Duis inmagna at lacus scelerisque accumsan. Cras eget libero sed ipsum condimentum efficitur. Proin vitae mauris justo. Fusce id lacus at quam efficitur dictum nec vel dolor. Maecenas finibus urna ac malesuada fringilla.', '2017-09-18 00:00:00', '2019-01-01 00:00:00', 6),
(3, 'Chapitre 3: Le Retour du Roi', 'Phasellus sodales nisi nec libero tristique, non condimentum ipsum viverra. Curabitur vitae nunc eget libero condimentum volutpat. Phasellus feugiat velit eu orci tempus, nec dictum massa aliquet. Nullam varius justo non est sodales commodo. In auctor fermentum justo, at varius metus viverra a. Aliquam erat volutpat. Integer eget enim vitae nulla lacinia congue et et est. Phasellus ac justo quis augue pharetra cursus. Suspendisse potenti. Sed at placerat erat, vel rutrum ipsum. Nam in sapien ligula.', '1999-01-01 00:00:00', '1997-06-23 00:00:00', 6),
(4, 'Chapitre 1: Le Ministère de la Vérité', 'Sed viverra, felis a laoreet gravida, elit purus consequat ex, at pulvinar dui purus vel sapien. In ut mi ut lectus scelerisque faucibus. Mauris convallis consequat tortor, ac consequat sapien vulputate in. In hac habitasse platea dictumst. Vivamus nec libero non nulla malesuada faucibus. Curabitur non mauris vel dolor viverra viverra vel sed mauris. Donec nec dictum lorem.', '1885-01-01 00:00:00', '1885-01-01 00:00:00', 7),
(5, 'Chapitre 2: La Chute de Big Brother', 'Nunc ultrices sagittis ligula, ac molestie enim aliquet nec. Sed nec commodo velit. Donec ultrices hendrerit sem. Sed vitae tellus sed purus fringilla congue. Nulla facilisi. Duis vitae ex id mi lacinia laoreet a sit amet sapien. Sed commodo ante eget turpis pharetra, nec vestibulum felis ultrices. Vivamus vel libero sapien. Etiam pellentesque, dolor nec consequat dignissim, tortor elit lobortis eros, eget commodo nunc est non magna. Sed vehicula turpis non velit commodo, a aliquet felis ultricies.', '1927-01-25 00:00:00', '1985-01-01 00:00:00', 7);

INSERT INTO categorie (id, label) VALUES (1, 'Science fiction'), (2, 'Romance'), (3, 'Action'), (4, 'Magie'), (5, 'Histoire'), (6, 'Religion');
