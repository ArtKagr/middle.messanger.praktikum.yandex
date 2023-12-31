<p align="center">
    <img src="https://img.shields.io/badge/vite-4.4.5-ff96b4" />
    <img src="https://img.shields.io/badge/handlebars-1.6.0-blue" />
    <img src="https://img.shields.io/badge/express-4.18.1-green" />
    <img src="https://img.shields.io/badge/node-16.0.0-blue" />
</p>

# Чат
Веб-приложение "Чат", разрабатывается в рамках профессии "Миддл фронтенд-разработчик" Яндекс.Практикума.

## 1 спринт:
* Сверстаны страницы:
    * авторизации: /
    * регистрации: /registration
    * чатов (список и окно активного чата без сообщений): /chats
    * редактирования данных профиля: /edit-profile
    * 500: /500
    * 404: любая другая страница

* Проект разрабатывается с использованием vite, handlebars, postcss, express, node

## 2 спринт:
* Подключен TypeScript
* Добавлена и включена в линтерах проверка типов TS
* Добавлен компонентный подход
* Во время отправки в консоль выводится объект со всеми заполненными полями и общий результат проверки всех полей
* Всем формам добавлена валидация на blur и submit
* Добавлен класс HTTPTransport для работы с запросами
* Добавлены ESLint, Stylelint
* Модальное окно редактирования профиля отображается на странице /edit-profile и по клику на иконку настроек в разделе профиль на странице /chats

## Команды запуска

```npm run dev``` - dev сборка при помощи vite на порту 5173

```npm run build``` - build сборка при помощи vite, используется для деплоя на Netlify

```npm run start``` - запуск express сервера со статикой на 3000 порту

## Figma

[Ссылка](https://www.figma.com/file/8LlwdhYMLkYS1JkfFfYu0T/Спринт-1?node-id=0%3A1)

## Netlify

[Ссылка](https://glowing-ganache-d299a5.netlify.app)

## Pull request:

[Ссылка]()
