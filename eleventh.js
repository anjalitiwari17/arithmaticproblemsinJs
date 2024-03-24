// prime or 
let a=17;
let i=1,c=0;
while(i<=a){
    if(a%i===0){
        c++;
    }i++;
}
if(c>2){
    console.log("It is not a prime number");
}else{
    console.log("It is a prime number");
}