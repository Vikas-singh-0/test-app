const add= function name(p1,p2) {
    console.log("2");
    setTimeout((a,b,c) => {
        console.log("1");
        console.log(a+b+c);
    }, 2000,3,5,6);
    console.log("3");
}
const sub=()=>{
    setTimeout((a,b,c) => {
        console.log("1");
        console.log(a+b+c);
    }, 1000,1,1,1);
}
console.log("0");
sub(2,1)
add(23,21)
add(233,11)