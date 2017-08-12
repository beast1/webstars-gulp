var jsonfile = require("../../node_modules/jsonfile");
var prompt = require('../../node_modules/prompt');

jsonfile.spaces = 2;

var file = 'D:/webstars/global/config.json'
var obj = require('D:/webstars/global/config.json')

// Как узнать, в какой осс обращаться? 
// var projects = obj.projects;
// var newProject = s.localConfig.controls.execProject;
// var isFounded = false;

// запишем объект в файл первый раз
jsonfile.writeFile(file, obj, function (err) {
    // вот тут уже создается файл и в нем записано {name: 'JP'}
    if (err) {
        console.error('error');
        return;
    }
})

// теперь изменим объект, добавим в него еще одно поле
prompt.start();

prompt.get(['username'], function (err, result) {
  obj.second1 = result.username;
  console.log(`result.username: ${result.username}`);
  console.log(`obj.second1: ${obj.second1}`);

  // и еще раз запишем в тот же файл
  jsonfile.writeFile(file, obj, function (err) {
    if (err) {
        console.error('error');
        return;
    }
  });
});

// console.log('hi');