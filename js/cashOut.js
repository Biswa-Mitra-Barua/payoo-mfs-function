document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutAmount = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');

        if (pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - cashOutAmount;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Failed to proceed');
        }
    })