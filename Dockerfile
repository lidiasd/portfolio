# Étape 1 : Utiliser une image légère (ex: Nginx ou Apache)
FROM nginx:alpine

# Étape 2 : Copier les fichiers du site dans le conteneur
COPY . /usr/share/nginx/html

# Étape 3 : Exposer le port 80 (HTTP)
EXPOSE 80