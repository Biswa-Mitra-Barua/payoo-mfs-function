document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // getInputFieldValueById();
        // const addMoney = getInputFieldValueById('input-add-money').value;

        // using shared functions

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        // console.log('Added money by parameter', addMoney, pinNumber);
        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to proceed');
        }
    })