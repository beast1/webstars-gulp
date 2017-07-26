//Ошибка при чтении json
var prompt = require('prompt');
var json = require('jsonfile');

var schema = {
  properties: {
  	oss: {
  		require: true
  	},
    name: {
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
	if (result.oss === 'mts') {
		var file = 'config.json';
		var obj = require('./config.json');
		obj.mts.projects.push({"name": result.name});

		console.log(obj);
		 
		json.writeFile(file, obj, {flag: 'a'}, function (err) {
		  console.error(err);
		});
	} else {
		console.log('Неверное название Оператора Сотовой Связи');
	}
});