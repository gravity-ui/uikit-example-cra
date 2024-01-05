# Начало работы и настройки проекта
## Создание проекта на основе шаблона CRA (create-react-app)

в терминале:
- глобальная установка пакета CRA
`npm install -g create-react-app`

- создание react-проекта *my-app*  с поддержкой TypeScript:

  - вариант 1:

  `npx create-ract-app my-app`

  `npm install -save typescript @types/node @types/react @types/react-dom @types/jest`

  - вариант 2:

  `npx create react-app - template typescript my-app`

## Создание проекта с помощью Vite.js с поддержкой TypeScript 

- установка и инициализация vite.js

`npm init vite@latest`


- в процессе необходимо указать имя проекта (***name***), выбрать фреймворк (***framework***)  и тип проекта (***variant***):

```bash
Project name: ...  test-vite
Select a framework: » React
Select a variant: » TypeScript
...
Done. Now run:

  cd test-vite
  npm install
  npm run dev
```
- затем выполнить предложенные команды:  
  
  `cd test-vite`

  `npm install`

  `npm run dev`

- В отличие от CRA, Vite не билдит все приложение для режима разработки, а билдит приложение по запросу.
- Он также использует возможности встроенных модулей ES, esbuild и Rollup для сокращения времени разработки и сборки

## tsconfig.json

```json
{
  "extends": {
    // подгружает опции из указанного файла
    "./tsconfig.json",
  },
  "files": [
    // массив файлов для компиляции
  ],
  "include": [
    // массив шаблонов путей и файлов для компиляции, 
    // по умолчанию = ["**/*"], т.е. поиск файлов во всех папках и подпапках
    // если расширения не указаны, ищутся файлы .ts, .tsx
    // при включенном флаге allowJS также ищутся .js, jsx
    "src/**/*",
  ],
  "exclude": [
    // массив шаблонов исключаемых путей и файлов
    "node_modules",
  ],
  "references": {
    // массив объектов, определяющий проекты, на которые следует ссылаться:
    { "path": "../src" },
    { "path": "../tests" },
    //path каждой ссылки может указывать на каталог, содержащий файл tsconfig.json ,
    // или на сам файл конфигурации (который может иметь любое имя)
  },
  "typeAcquisition": {
    // настройки для получения типов 
    // include(array), exclude(array), enable(boolean), disableFilenameBasedTypeAcquisition(boolean)
  },
  "compilerOptions": {
    // здесь все настройки, связанные с компилятором:

    "target": "ES5", 
    // - версия Версия стандарта ECMAScript, в которую будет скомпилирован TS-код 
    //(ES3, ES5, ES6 (он же ES2015), ES2016, ES2017, ..., ESNext)

    "module": "CommonJS", 
    // - модульная система, которую будет использовать приложение
    // (None, CommonJS, AMD, System, UMD, ES6, ES2015, ES2020 или ESNext)

    "moduleResolution": "node", 
    // - стратегия импорта модулей (node, classis)

    "outDir": "dist", 
    // - директория, куда будут скомпилированы выходные файлы

    "sctrict": "true",
    // - вкл/выкл строгой типизации

    "jsx":"react", 
    // - как TypeScript должен обрабатывать JSX

    "baseUrl": "", 
    //базовый путь, относительно которого будет производиться поиск модулей.
    
    "paths": {
      "jquery": ["node_modules/jquery/dest/jquery.min.js"]
    }, 
    // - создание псевдонимов для используемых в программе модулей.
  }
}
```
итоговая версия конфига
`tsc --showConfig`

больше инфы:
- [Intro to the TSConfigReference](https://www.typescriptlang.org/tsconfig/)
- [TypeScript: Раскладываем tsconfig по полочкам. Часть 1](https://habr.com/ru/articles/542234/)
- [TypeScript: Раскладываем tsconfig по полочкам. Часть 2](https://habr.com/ru/articles/557738/)

## README.md

- Заголовок и описание проекта
- Порядок установки
- Использование (запуск, команды, параметры )
- Примеры
- Структура проекта
- Лицензия
- Ссылки и контакты


