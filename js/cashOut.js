document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutAmount = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        if(isNaN(cashOutAmount)){
            alert('Failed to cash out');
            return;
        }

        if (pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            if(cashOutAmount > balance){
                alert('You do not have sufficient balance');
                return;
            }
            const newBalance = balance - cashOutAmount;
            document.getElementById('account-balance').innerText = newBalance;

            // add transaction
            const div = document.createElement('div');
            div.classList.add('bg-blue-600');
            div.innerHTML = `
                <h4 class= "text-2xl font-bold">Cash Out</h4>
                <p>WithDraw: ${cashOutAmount} Tk. New Balance: ${newBalance} Tk.</p>
            `
            document.getElementById('transaction-container').appendChild(div);
        }
        else {
            alert('Failed to proceed');
        }
    })