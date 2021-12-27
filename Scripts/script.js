let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
    };
,
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');


for(let i=0;i<2;i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = prompt("Во сколько обойдется?", '');
	if((typeof(a) != null) && (typeof(a) === String) && 
		a != '' && a.length < 50 &&
		(typeof(b) != null) && (typeof(+b) === Number) && 
		b != '') 
	{
		console.log("done");
		appData.expenses[a] = b;
	} else {
		alert("bad data");
	}
}
alert(appData.expenses);
