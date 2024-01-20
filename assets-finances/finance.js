// income
const incomeSalary = document.getElementById('income-salary');
const incomeAnother = document.getElementById('income-another');
const incomeAnother2 = document.getElementById('income-another2');
// costs
const costsApartament = document.getElementById('costs-apartament');
const costsCredits = document.getElementById('costs-credits');
const costsAnother = document.getElementById('costs-another');
//total-numb
const totalMonthInput = document.getElementById('total-month');
const totalYearInput = document.getElementById('total-year');

let totalMonth, totalYear;

//money box
const moneyBboxRange = document.getElementById('money-box-range');
accumulationInput = document.getElementById('accumulation');
spend = document.getElementById('spend');
//копим и тратить у меня нет

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs){
	input.addEventListener('input', ()=> {
		countingAvailableMoney();
		calculationPrecents();
	})
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvailableMoney = () => {
	const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeAnother) + strToNum(incomeAnother2);
	const totalCosts = strToNum(costsApartament) + strToNum(costsAnother) + strToNum(costsCredits);

	totalMonth = totalPerMonth - totalCosts;
	totalMonthInput.value = totalMonth;
}

moneyBboxRange.addEventListener('input', e => {
	const totalPrecentEl = document.getElementById('total-precents');
	totalPrecents = e.target.value;
	totalPrecentEl.innerHTML = totalPrecents;
	calculationPrecents();
});

const calculationPrecents = () => {
	accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
	accumulationInput.value = accumulation;

	spend.value = totalMonth - accumulation;
	totalYear = accumulation * 12;
	totalYearInput.value = totalYear;
}

//код для функции с советами
function toggleAdvice() {
    let boxAdvices = document.querySelector('.adviceContent');

    if (boxAdvices.style.visibility === 'hidden' || boxAdvices.style.visibility === '') {
        boxAdvices.style.visibility = 'visible';
        boxAdvices.style.opacity = '1';
    } else {
        boxAdvices.style.visibility = 'hidden';
        boxAdvices.style.opacity = '0';
    }
}









