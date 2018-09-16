var hello = {}
for (let i = 0; i < 500; i++) {
    let key = i+0.5;
    let value =  i+" san "+i+" san "+i;
    hello[key] = value;    
}
console.log(JSON.stringify(hello));