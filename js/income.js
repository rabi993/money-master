
document.getElementById('btn-calculate1').addEventListener('click', function(){
    
    const incomeAmount = getInputFieldById('income-field');
    const foodAmount = getInputFieldById('food-field');
    const rentAmount = getInputFieldById('rent-field');
    const clothesAmount = getInputFieldById('clothes-field');

    const totalExpenses = foodAmount + rentAmount+ clothesAmount;
    const balance = incomeAmount-totalExpenses;

    if(totalExpenses>incomeAmount){
        alert("sorry! eto DOLOR nai to!!!");
        return;
        
    }

    const previousExpensesTotal = getTextElementValueById('total-expenses');
    const currentExpenses =totalExpenses+ previousExpensesTotal;
    setTextElementValueById('total-expenses', currentExpenses);

    const previousBalanceTotal = getTextElementValueById('balance');
    const currentBalance =balance + previousBalanceTotal;
    setTextElementValueById('balance', currentBalance);

    // console.log(incomeAmount,foodAmount,rentAmount,clothesAmount, totalExpenses,balance);

})

document.getElementById('btn-calculate2').addEventListener('click', function(){
    
    
    const saveAmount = getInputFieldById('save-field');
    const incomeAmount = getInputFieldById('income-field');
    const totalSave = (incomeAmount * saveAmount)/100;

    const foodAmount = getInputFieldById('food-field');
    const rentAmount = getInputFieldById('rent-field');
    const clothesAmount = getInputFieldById('clothes-field');

    const totalExpenses = foodAmount + rentAmount+ clothesAmount;
    const balance = incomeAmount-totalExpenses;
    

    const previousSaveTotal = getTextElementValueById('save-amount');
    
    const currentSave =totalSave+ previousSaveTotal;

    if(currentSave> balance){
        alert("SORRY!!! Saving Hobena. eto DOLOR nai to!!!");
        return;
        
    }
    setTextElementValueById('save-amount', currentSave);

    // const foodAmount = getInputFieldById('food-field');
    // const rentAmount = getInputFieldById('rent-field');
    // const clothesAmount = getInputFieldById('clothes-field');

    // const totalExpenses = foodAmount + rentAmount+ clothesAmount;
    // const balance = incomeAmount-totalExpenses;
    
    const previousReTotal = getTextElementValueById('remaining-balance');
    const currentReBalance =previousReTotal+ balance -currentSave ;
    setTextElementValueById('remaining-balance',currentReBalance);


    
    


  

    

})


