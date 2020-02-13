let money, time;

let startBtn = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.querySelectorAll(".expenses-item"),

    expensesBtn = document.getElementsByTagName("button")[0],
    optionalBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],

    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

    chooseIncome = document.querySelector("#income"),
    saving = document.querySelector("#savings"),
    sumVal = document.querySelector("#sum"),
    percentVal = document.querySelector("#percent"),

    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");



expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            alert("Введи нормально");
            i--;
        }
        console.log(expensesItem.length);
        appData.sumDay = sum;
    }
    expensesValue.textContent = sum;
    console.log(sum);
});

function start(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
}

startBtn.addEventListener("click", function() {
    start();
});

optionalBtn.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesItem.textContent += appData.optionalExpenses[i] + " ";

        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
        console.log(appData.optionalExpenses[i]);
    }

});

countBtn.addEventListener("click", function() {
    if (appData.budget == undefined) {
        start();
    } 

    if (appData.sumDay > 0){
        appData.moneyPerDay = (appData.budget - appData.sumDay) / 30;
    } else {
        appData.moneyPerDay = appData.budget / 30;
    }

    daybudgetValue.textContent = appData.moneyPerDay.toFixed();
    
    if (appData.moneyPerDay <= 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Ошибка";
    }
});

chooseIncome.addEventListener("input", function() {
    incomeValue.textContent = chooseIncome.value;
    appData.income = chooseIncome.value;

});

saving.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
sumVal.addEventListener("input", function() {
    if (appData.savings == true){
        let sum = +sumVal.value,
            percent = +percentVal.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentVal.addEventListener("input", function() {
    if (appData.savings == true){
        let sum = +sumVal.value,
            percent = +percentVal.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: false,
};



console.log(appData);


