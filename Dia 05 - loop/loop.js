// while = enquanto
// for = para
// foreach = faça até
// função recursiva

i=0
while(i <= 200){ // sempre que eu não souber o inicio e fim
    console.log(i)
    i++
}


for(var i = 0; i<=200; i++){ // sempre que eu sei o inicio e fim
    console.log(i)
}



console.log('==========================')


lista =[2,3,4,5,6,7,8]
lista.forEach(element => {
    console.log(element)
});

console.log('==========================')

for(let element of lista){
    console.log(element)
}