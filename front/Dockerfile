# Используем официальный образ Nginx для обслуживания статического контента
FROM nginx:alpine

# Удаляем стандартные конфиги Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш конфиг Nginx в контейнер
COPY nginx.conf /etc/nginx/conf.d/

# Копируем собранный фронтенд в папку, откуда Nginx будет его обслуживать
COPY frontend/build/ /usr/share/nginx/html/

# Открываем порт для Nginx
EXPOSE 80

# Запускаем Nginx при старте контейнера
CMD ["nginx", "-g", "daemon off;"]
