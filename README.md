# yndx-shri-hw

[Домашнее задание «Node js»](api/README.md)

[Домашнее задание «Адаптивная верстка»](front/README.md)

Домашнее задание «Архитектура»

## Запуск

* Зависимости:

`npm install`
* Запустить сервер api: 

Для проверки добален параметр init, с которым при запуске скачавается репозиторий.

Например:

`npm run api-prod <dir> https://github.com/SemenovaEkaterina/promise-polyfill`

Либо добавить репозиторий:

`POST - http://localhost:3003/api/repos/`

Порт можно изменить в конфиге `api/config.json`

* Запустить сервер фронта:

`npm run front-prod`

Порт можно изменить в конфиге `front/config.json`

* По адресу `/files/<repoId>` доступен список файлов

Для скаченного выше репозитория: `http://localhost:3001/files/promise-polyfill`

## Реализация

`front/store` - формирование стора
`front/views` - view для таблицы файлов и поля поиска