'use strict';

// Генератор файлов блока

// Использование: node createBlock.js [имя блока] [доп. расширения через пробел]

const fs = require('fs');
const config = require('./config.json');

const dirs = config.global.dirs.oss;
const mkdirp = require('mkdirp');

const ossName = process.argv[2];
const projectName = process.argv[3];          // получим имя блока
const defaultExtensions = ['noname']; // расширения по умолчанию
const extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(4)));  // добавим введенные при вызове расширения (если есть)

// Если есть имя блока
if (ossName) {
  const dirPath = 'D:/webmasters/' + ossName + '/' + projectName; // полный путь к создаваемой папке блока
  mkdirp(dirPath, (err) => {                                           // создаем
    // Если какая-то ошибка — покажем
    if (err) {
      console.error(`[NTH] Отмена операции: ${err}`);
    }

    // Нет ошибки, поехали!
    else {
      console.log(`[NTH] Создание папки ${dirPath} (если отсутствует)`);

      let hasThisBlock = false;
      if (!hasThisBlock) {
        console.log(config.mts.projects);
        config[projectName][projects].push({
          "name": projectName 
        });
        console.log(config.mts.projects);
        const newPackageJson = JSON.stringify(config, '', 2);
        fs.writeFileSync('./config.json', newPackageJson);
        console.log('[NTH] Подключение блока добавлено в projectConfig.json');
      }
    }
  });
} else {
  console.log('[NTH] Отмена операции: не указан блок');
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  const objectTemp = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
}
