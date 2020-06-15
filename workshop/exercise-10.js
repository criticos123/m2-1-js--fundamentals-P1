// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for(let n=0;n<=6;n++){
    let result="#";
    for(let i=1;i<=n;i++){
        result=result+"#";
    }
    console.log(result);
}