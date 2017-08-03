<h2>Погаговая инструкция вставки имг в html</h2>
<ol>
	<li><a href="https://tinypng.com/">Сожми изображение</a></li>
	<li><a href="https://websemantics.uk/tools/image-to-data-uri-converter/">Конвертируй в base64</a></li>
	<li>Скопируй результат в tele2/[имя проекта]/html/base64/[имя изображения].html</li>
	<li>Вставь изображение в разметку нужной страницы посредством конструкции <code>&lt;img src="@@include('base64/[имя изображения].html')"&gt;</code></li>
</ol>
<h2>Заметка разработчику</h2>
<p>
	Я использовал <a href="https://www.npmjs.com/package/gulp-img64-html">gulp-img64-html</a> и <a href="https://www.npmjs.com/package/gulp-inline-image-html">gulp-inline-image-html</a> они оба форматируют камел кейс. Найди что-то получше, а до тех пор используй gulp-file-include.
</p>