
/**
 * Generate a random alphaNumeric string of length n
 * @param {Number} num 
 * @returns {String} s
 */
function genRandomString(num=10){
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let s = "";
    for(let i = 0; i < num; i++){
        s += alpha.at(Math.floor(Math.random()*alpha.length));
    }
    return s;
}

/**
 * Generate an array of random strings
 * @param {Number} num 
 * @returns {Array} data 
 */
function genRandomData(num=10){
    const data = [];
    for(let i = 0; i < num; i++){
        data.push(genRandomString(10))
    }
    return data;
}

/**
 * Produces some randomly generated data - when it feels like it !
 * @param {Function} callback
 * @returns a promise (if callback isn't defined)
 */
module.exports.getData = callback=>{

    const t = Math.floor(Math.random() * 1000 * 10);
    const numData = Math.floor(5 + Math.random() * 45);

    if(callback){
        setTimeout(()=>callback(genRandomData(numData)), t);
    }else{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(genRandomData(numData)), t);
        })
    }

}

/**
 * Adds more data to the Array - when it feels like it !
 * @param {Array} input 
 * @returns 
 */
module.exports.chainData = (input=[])=>{
    const output = [...input, genRandomString(5)];
    const t = Math.floor(Math.random() * 1000 * 10);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(output), t);
    })
}


module.exports.legacyCallbackMethod(callback=>{
    const t = Math.floor(Math.random() * 1000 * 10);
    const numData = Math.floor(5 + Math.random() * 45);
    setTimeout(()=>callback(genRandomData(numData)), t);
})



