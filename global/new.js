//Ошибка при чтении json
var prompt = require('prompt');
var json = require('jsonfile');

var schema = {
  properties: {
  	oss: {
  		require: true
  	},
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
	if (result.oss === 'mts') {
		var file = 'config.json';
		myJson = require('./config.json');
		var obj = JSON.parse(myJson);
		obj.mts.projects.push({"name": result.name});

		console.log(obj);
		 
		json.writeFileSync(file, obj, {flag: 'a'}, function (err) {
		  console.error(err);
		});
	} else {
		console.log('Неверное название Оператора Сотовой Связи');
	}
});