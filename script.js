function eventChange(inputID, eventIncrease) {
    const inputNumber=getInputValue(inputID);
    let finalInput=inputNumber;


    if (eventIncrease == false && finalInput > 0) {
         finalInput = inputNumber - 1;
    } if(eventIncrease == true) {
         finalInput = inputNumber + 1;
    }

    document.getElementById(inputID).value = finalInput;
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount =  getInputValue("first-class-value");
    const economyClassCount= getInputValue("economy-class-value");

    const subtotalCount = firstClassCount*150 + economyClassCount*100;
    document.getElementById('subtotal').innerText=subtotalCount;

    const vatCount =Math.round(subtotalCount*.1);
    document.getElementById('vat').innerText=vatCount;

    const totalCount= subtotalCount+vatCount;
    document.getElementById('total').innerText=totalCount;   
}

function getInputValue(category) {
    const inputValue = document.getElementById(category).value;
    const inputNumber = parseInt(inputValue);  
    return inputNumber
}

const bookNowButton=document.getElementById('book-now-button');
bookNowButton.addEventListener('click',function () {
    const bookingArea=document.getElementById('booking-area');
    bookingArea.style.display='none';
    const confirmationArea= document.getElementById('confirmation');
    confirmationArea.style.display="block";
})