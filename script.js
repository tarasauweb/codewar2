function squareDigits(num){
    let numString = new String(num)
    let arrNum = []
    for (let i = 0 ; i<numString.length ; i++){
        
        arrNum.push(numString[i]*numString[i])
    }
    let newNum = parseInt(arrNum.join(''))
   
    console.log(newNum)

    return newNum
    
}

squareDigits(3212)