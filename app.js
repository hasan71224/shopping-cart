function updateCaseNumber(product, price, isIncrising){
    const productInput =document.getElementById(product + "-number");
    const productNumberText = productInput.value;
    if(isIncrising == true){
        productNumber = parseInt(productNumberText) + 1;
    }
    else if (productNumberText>0){
        productNumber = parseInt(productNumberText) - 1;
    }
    productInput.value = productNumber;
// update case total
    const caseTotal = document.getElementById(product + "-total");
    caseTotal.innerText = productNumber*price;

    //calculate total function call
    calculateTotal();
}


//sub total
function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal+caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("totat-amount").innerText = total;

}

//case-plus
document.getElementById("case-plus").addEventListener("click", function(){
   /* const caseInput =document.getElementById("case-number");
    const caseNumberText = caseInput.value;
    caseInput.value = parseInt(caseNumberText) + 1; */

    updateCaseNumber("case", 59, true);
})
// phone-plus
document.getElementById("phone-plus").addEventListener("click", function(){
    updateCaseNumber("phone", 1219, true);
})
//case minus
document.getElementById("case-minus").addEventListener("click", function(){
  /*  const caseInput = document.getElementById("case-number");
    const caseNumberText = caseInput.value;
    caseInput.value = parseInt(caseNumberText) - 1; */
    updateCaseNumber("case", 59, false)
})
// phone-minus
document.getElementById("phone-minus").addEventListener("click", function(){
    updateCaseNumber("phone", 1219, false);
})