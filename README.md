# yndx-shri-hw

## Серверная часть:

### Запуск:
1. npm install
1. npm run server <directory>
 
### Структура:
- src
  - handlers - обработчики ошибок
  - utils - утилиты
  - views - обработчики эндпоинт'ов
  - routes.js - роутер
  - server.js - точка входа


## Клиентская часть:

Реализован отдельный сервер для рендера страниц.
Используется шаблонизатор ejs, потому что синтаксис минимально отличается от html, что позволит быстро переписать в следующих ДЗ.

### Запуск:
1. npm install
1. npm run front-prod

По следующим адресам доступты страницы:
1. `/` или `/files` - список файлов c readme, выпадающими списками
1. `/branches` - список веток
1. `/commit` - страница коммита
1. `/details` - содержимое файла
1. `/history` - страница истории

## Навигация
Для навигации по страницам добавлены ссылки для переходов по статическим страничкам.

## Интерактивные элементы
Реализован сценарий открытия/закрытия дропдаунов через стрелку.

## Вариант вида папок

В репозиторий добален скрипт, который выводит статистику по файлам и папкам в текущей директории, поэтому выбран макет расширенного вида.

## Иконки

Не дублируются иконки разных цветов, планируется использовать currentColor, когда будет не только верстка.

## Шрифт
Шрифт PT Mono скачен с сайта компании производителя http://rus.paratype.ru.

## Подсветка синтаксиса
Используется `highlightjs` для построчной подстветки кода, временно библиотека подключается по ссылке в html, без интернета работать не будет.
