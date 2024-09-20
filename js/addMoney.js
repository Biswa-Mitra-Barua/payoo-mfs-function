document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // using shared functions

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const p = document.createElement('p');
            // template string, dynamically input set
            p.innerText = `Added: ${addMoney} Tk. Total: ${newBalance}`;
            // console.log(p)

            // should be a common function
            document.getElementById('transaction-container').appendChild(p)
        }
        else{
            alert('Failed to proceed');
        }
    })