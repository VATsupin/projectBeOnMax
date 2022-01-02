let money;
let time;
function start() {
	money = prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '')
	while(isNaN(money) || money == null || 
		money == "" || money < 0) {
		alert("Что-то не так! Введите число > 0");
		money = prompt("Ваш бюджет на месяц?", '');
	}
}
start();
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
    };
// alert("try1");
function chooseExpenses() {
		for(let i=0;i<3;i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		if((typeof(a) != null) && (typeof(a) == 'string') && 
			a != '' && a.length < 50 &&
			(typeof(b) != null) &&  
			b != '') //(typeof(+b) === 'number') &&
		{
			console.log("done");
			appData.expenses[a] = b;
		} else {
			alert("bad data");
			alert(typeof(a));
			i = --i;
		}
	}
}
chooseExpenses();
for(var index in appData.expenses)
{alert(`index = ${index}, val = `+ appData.expenses[index]);}

appData.moneyPerDay = (appData.budget/30).toFixed();
alert(`Ежедневный бюджет = ${appData.moneyPerDay}`);
if(appData.moneyPerDay < 100) {
	console.log(`Минимальный уровень достатка`);
} else if (appData.moneyPerDay >= 100 && 
		appData.moneyPerDay <= 2000) {
	console.log(`Средний уровень достатка`);	
} else if (appData.moneyPerDay >= 2000) {
	console.log(`Высокий уровень достатка`);	
} else {
	console.log(`Произошла ошибка: appData.moneyPerDay = ${appData.moneyPerDay}`);

}