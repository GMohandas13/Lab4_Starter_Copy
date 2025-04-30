/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    //adding type check
    if (typeof num1 != "number" || typeof num2 != "number" || typeof add != "boolean"){
        return false;
    }

    if (add) {
        //const result = 0; const makes it so that the variable cannot be reassigned a different value
        let result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return false;       //return false if some input was incorrect
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    //adding type checking
    if (typeof discount != "number" || Array.isArray(prices) == false){
        return false;
    }

    const discounted = []
    const length = prices.length;

    if (discount < 0 || discount > 1 || length === 0){   //input validation basically
        return false;
    }

    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        //discountedPrice += prices[i] * (1 - discount); this makes it so that discounted price keeps getting added by each new price but we want it to reset each time
        discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }
    return discounted;
}

module.exports = {sumValues, discountPrices};