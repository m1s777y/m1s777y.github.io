//document.write("Javascript saying hello!"); // устаревший метод вывода сообщения
//console.log("Javascript saying hello!"); // логи в консоле
//console.info("Javascript saying hello!"); тоже самое
//console.error("Javascript saying hello!"); указывать на ошибки(если их не решить то не запуститься код)
//console.warn("Javascript saying hello!"); // предупреждение(все равно работать все будет)

function mutilate(ap,vers,specdamage)
{
    console.log("Вызвался мутилейт");
}
if(confirm("Вызвать мутилейт?"))
{
    alert("красава я вызвал мутилейт");
    mutilate(13,13,13);
}
else
{
    alert("ну и бб лох");
}
function onClickButton()
{
    alert("красава нажал")
}