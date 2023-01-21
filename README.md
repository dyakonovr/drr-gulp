# Сборка GULP от dyakonovr<br>версия для многостраничных сайтов

## Начало работы

Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория <br>
`git clone <this repo>`
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку **app** корневой директории): <br>
`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`gulp buildZip` - команда собирает ваш готовый код в zip-архив.

## Структура папок и файлов

```
├── src/                          # исходники
│   ├── js                        # скрипты
│   │   ├── components            # js-компоненты
│   │   ├── functions             # js-функции
│   │   ├── vendor                # папка для загрузки локальных версий библиотек
│   │   ├── default               # папка с "дефолтным" набором файлов для скриптов
│   │   │   └── _vendor.js        # файл с подключениями библиотек
│   │   │   └── _functions.js     # файл с готовыми функциями на js
│   │   └── index.js              # скрипт для index.html
│   ├── scss                      # стили сайта (препроцессор sass в синтаксисе scss)
│   │   ├── components            # scss-компоненты
│   │   ├── mixins                # папка для сохранения готовых scss-компонентов
│   │   ├── vendor                # папка для хранения локальных css-стилей библиотек
│   │   ├── default               # папка с "дефолтным" набором файлов для стилей
│   │   │   └── _vendor.scss      # файл для подключения стилей библиотек из папки vendor
│   │   │   └── _fonts.scss       # файл для подключения шрифтов (можно использовать миксин)
│   │   │   └── _mixins.scss      # файл для подключения миксинов из папки mixins
│   │   │   └── _vars.scss        # файл для написания css- или scss-переменных
│   │   │   └── _settings.scss    # файл для написания глобальных стилей
│   │   │   └── _universal.scss   # файл для написания стилей повторяющихся блоков
│   │   └── index.scss            # файл стилей для index.html
│   ├── partials                  # папка для хранения html-частей страницы
│   │   ├── index                 # папка для хранения html-частей для index.html
│   │   ├── universal             # папка для хранения повторяющихся html-частей
│   ├── img                       # папка для хранения картинок
│   │   ├── svg                   # папка для svg-картинок
│   ├── resources                 # папка для хранения иных файлов - php, видео-файлы, favicon и т.д.
│   │   ├── favicon               # папка для хранения favicon-файлов
│   │   ├── fonts                 # папка для хранения шрифтов в формате woff2/ttf
│   └── index.html                # Главный html-файл
└── gulpfile.js                   # файл с настройками Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .stylelintrc                  # файл с настройками stylelint
└── README.md                     # документация сборки
```

## Оглавление

1. [Работа с html](#работа-с-html)
2. [Работа с CSS](#работа-с-css)
3. [Работа с JavaScript](#работа-с-javascript)
4. [Работа со шрифтами](#работа-со-шрифтами)
5. [Работа с изображениями](#работа-с-изображениями)
6. [Работа с иными ресурсами](#работа-с-иными-ресурсами)
7. [Типограф](#типограф)
8. [Рекомендуемые плагины VS Code](#рекомендуемые-плагины-для-vs-code)
9. [Локальные сниппеты](#локальные-сниппеты)
10. [Готовые модули](#готовые-модули)
11. [Про многостраничные сайты](#про-многостраничные-сайты)

## Работа с html

Благодаря плагину **gulp-file-include** вы можете разделять html-файл на различные шаблоны, которые должны храниться в папке **partials**. Удобно делить html-страницу на секции. Также существует директории **partials/blocks** для универсальных блоков и **partials/universal** для универсальных секций соответственно.

> Для вставки html-частей в главный файл используйте `@include('partials/filename.html')` (больше можно почитать по ссылке https://www.npmjs.com/package/gulp-file-include)

Для создания нескольких страниц копируйте **index.html**, переименовывайте как вам нужно, изменяете параметры подключения внутри **head.html** (в include) и используйте.

При использовании команды `gulp build`, вы получите минифицированный html-код в одну строку для всех html-файлов.

## Работа с CSS

В сборке используется препроцессор **sass** в синтаксисе **scss**.

Для многостраничных сайтов вы можете скопировать файл **index.scss**, переименовать как вам угодно и использовать его. Также стоит создать папку (название может совпадать с названием нового файла) в директории **components**, где будут хранится scss-компоненты для **конкретной** страницы.

Стили, написанные в **components**, следует подключать в соответствующий файл формата **.scss** .

Чтобы подключить сторонние css-файлы (библиотеки) - положите их в папку **vendor** и подключите в файле **./default/\_vendor.scss**

Если вы хотите создать свой миксин - делайте это в папке **mixins**, а затем подключайте в файл **./default/\_mixins.scss**.

Если вы хотите использовать scss-переменные - подключите **\_vars.scss** также в main.scss или в любое другое место, где он нужен, но обязательно удалите **:root**.

> Для подключения css-файлов используйте директиву `@import`

В итоговой папке **app/css** создаются несколько файлов: <br> N-ое количество файлов формата **.min.css**.

При использовании команды `gulp build`, вы получите минифицированный css-код в одну строку для всех css-файлов.

## Работа с JavaScript

Для сборки JS-кода используется webpack.

JS-код лучше делить на компоненты - небольшие js-файлы, которые содержат свою, изолированную друг от друга реализацию. Такие файлы помещайте в папку **components**, в которой нужно создать директорию с названием, соответствующим названию **html-страницы, к которой компонент подключается.** Также, в папке **components/universal/** хранятся переиспользуемые компоненты (прелоадер и т.д.)

В конкретном файле **формата .js** вы подключаете все нужные компоненты.

Подключать сторонние библиотеки можно через npm, для этого существует файл **\_vendor.js**. Импортируйте туда подключения.

Если какой-то библиотеки нет в npm или просто нужно подключить что-либо локальным файлом - кладите его в папку **vendor** и точно так же импортируйте, но уже с путем до файла.

При использовании команды `gulp build`, вы получите минифицированный js-код в одну строку для всех js-файлов.

## Работа со шрифтами

Т.к. автор не поддерживает IE11, в сборке реализована поддержка только формата **woff2** (это значит, что **в миксине подключения шрифтов используется только формат woff2**).

Загружайте файлы **woff2/ttf (которые в последствии будут превращены в woff2)** в папку **resources/fonts**, а затем вызывайте миксин `@font-face` в файле **\_fonts.scss**.

**Примечание:** файлы шрифтов других расширений работать **не будут** (см. первый абзац).

Также не забудьте прописать эти же шрифты в параметрах подключения **head.html** в html.

## Работа с изображениями

Любые изображения, кроме **favicon** кладите в папку **img**.

Если вам нужно сделать svg-спрайт, кладите нужные для спрайта svg-файлы в папку **img/svg**. При этом, такие атрибуты как fill, stroke, style будут автоматически удаляться. Иные svg-файлы просто оставляйте в папке **img**.

При использовании команды `gulp build`, вы получите минифицированные изображения в итоговой папке **img**.

В сборке доступна поддержка **webp** формата. Подключить его вы можете через тег `picture`, также нужно подключить проверку в JS (см. файл **index.js**). Для background можно использовать обычные **jpg** или **png**, либо использовать `image-set` там, где это возможно.

## Работа с иными ресурсами

Любые ресурсы (ассеты) проекта, под которые не отведена соответствующая папка, должны храниться в папке **resources**. Это могут быть видео-файлы, php-файлы (как, например, файл отправки формы), favicon и прочие.

## Типограф

Для корректного отображения текста на странице был подключен плагин типограф, которые автоматически добавит неразрывные пробелы и иные символы, чтобы текст везде отображался по всем правилам русского языка.

## Рекомендуемые плагины для VS Code

Я рекомендую использовать именно VS Code, и в сборке реализовано взаимодействие именно с этим редактором. Так, при открытии папки со сборкой в VS Code, редактор предложит вам ранее не установленные плагины, которые подойдут для корректной работы сборки.

Самый важный из них – **projects snippets**, этот плагин "включает" локально написанные сниппеты для сборки.

## Локальные сниппеты

Для удобства и быстроты разработки были добавление локальные сниппеты (находятся в папке .vscode/snippets), которые работают благодаря плагину, описанному выше. Все сниппеты начинаются с префикса **g-**. В сниппетах пока только html (быстрое создание навигации, соцсетей, корректного тега picture с webp и avif и так далее).

Некоторые сниппеты тесно связаны с scss-миксинами, например кнопка-бургер. Сниппет **g-burger** создаст вам html-разметку бургера, а подключение миксина **@include burger** добавит для него стили, что крайне удобно.

## Готовые модули

В сборку постепенно добавляются готовые, часто-используемые модули под различные задачи. Ниже будет перечислен уже добавленный функционал.

**Внимание!** В файле _functions.js_ описаны лишь подключения всех нужных модулей. Рекомендуется использовать все это в отдельных файлах. Например, если вам нужно создать модальное окно, создаете файл _modal.js_ в папке components, подключаете его в файл components.js и уже в файле _modal.js_ используете код подключения.

### Бургер меню

Вы можете очень быстро добавить рабочий бургер к себе на страницу, для этого нужно:

1. В html вызвать сниппет `g-burger`
2. На ваше потенциальное меню в html добавить атрибут `data-menu`
3. В scss вызвать миксин `burger`

```
.burger { @include burger }
```

4. Зайти в файл js/\_functions.js и раскомментировать строку с подключением js-файла бургера
5. Настроить стили показа меню под себя с помощью класса `menu--active`

### Управление скроллом

Вы можете отключать\включать скролл на странице (работает даже на iPhone). Для этого нужно:

1. Зайти в файл js/\_functions.js и раскомментировать строку с импортом функций `disableScroll`, `enableScroll`.
   **Важно!**. Если на странице присутствуют блоки с фиксированным позиционированием (например, шапка), добавьте ей класс `fixed-block`, чтобы этот блок не прыгал при отключении скролла.

Необязательно использовать функции именно в файле **functions**, делайте как удобно вам.

### Валидация и отправка данных на почту

Вы можете быстро настроить валидацию и отправку данных на почту (пока работает в тестовом режиме). Как это использовать:

1. Создать форму, указав у нее уникальный класс. Также указать уникальные классы для полей ввода.
2. Создать массив, в котором будут переданы правила плагина <a href="https://github.com/horprogs/Just-validate" target="_blank">just-validate</a>, например:

```
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];
```

**ВАЖНО**. Если в вашей форме есть поле с телефоном, обязательно пропишите в массиве с правилами новые поля: `tel: true, telError: 'Ошибка при вводе телефона'`. 3. Подключить функцию `validateForms`, она находится в _functions.js_, передав туда три параметра:
3.1. Строку с классом формы
3.2. Массив правил
3.3. Если нужно, можно создать свою функцию, которая выполнится после отправки, тогда ее тоже нужно будет передать как аргумент функции `validateForms`.

Пример кода:

```
import { validateForms } from './functions/validateForms';
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.form-1', rules1, afterForm);
```

### Получение высоты шапки

Иногда требуется получить точную высоту шапки, если она сделана абсолютным или фиксированным позиционированием, и для этого есть функция `getHeaderHeght`. Как ее использовать:

1. Раскомментируйте строку с импортом файла **headerHeight.js**
2. Используйте css-переменную `--header-height` в нужном вам месте

Необязательно использовать функции именно в файле **functions**, делайте как удобно вам.

### Функции определения вьюпорта

Вы можете запускать скрипты на определенной ширине (пока что поддержка ресайза не реализована) с помощью готовых функций `isMobile()`, `isTablet()`, `isDesktop()`. Для этого нужно лишь подключить нужную из них из файла, а затем использовать внутри условия `if`.

## Про многостраничные сайты

Если Вам понадобится сверстать многостраничный сайт, нужно в соответствующих папках **(partials, scss/components, js/components)** создать директории с названием страницы. Также Вы можете создать директорию **universal**, в которой будете хранить универсальные html-блоки, scss-стили для таких блоков или же js-функционал.

В случае верстки одностраничного сайта такие папки не приносят много пользы, а значит их (по желанию) можно удалить из **partials, scss/components, js/components** (**ВАЖНО:** в случае удаления папок не забудьте поменять подключения файлов).