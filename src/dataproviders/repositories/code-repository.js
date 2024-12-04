exports.repository = async (userCode) => {
    var generatedCode = null
    var cont = 0
    do{
        const randomNumber = Math.floor(Math.random() * (999998 - 100001 + 1)) + 100001
        if(randomNumber == userCode){
            cont++
        }else{
            generatedCode =  randomNumber
            cont = 5
        }
    }while(cont<5)
    return generatedCode.toString()
}