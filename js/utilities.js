// Common Shared Functions Here

// function getInputFieldValueById (){
//     console.log('will get the value by id')
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id, inputValue, inputNumber);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-sec').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}
