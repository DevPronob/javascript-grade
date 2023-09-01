const array =[45,64,76,87,87,66,66,97,96,56,45]
// for loop
for(let x =0;x<array.length;x++){
    if(array[x] >=80 && array[x] <=100){
        console.log(`you Got A++ and yor number is${array[x]}`)
    }else if(array[x] >=70 && array[x] <= 79){
        console.log(`you Got A and yor number is${array[x]}`)
    }
    else if(array[x] >= 60 && array[x] <= 69){
        console.log(`you Got A- and yor number is${array[x]}`)
    }
    else if(array[x] >=50 && array[x] <= 59){
        console.log(`you Got B and yor number is${array[x]}`)
    }
    else if(array[x] >=40 && array[x] <= 49){
        console.log(`you Got B and yor number is${array[x]}`)
    }
    else if(array[x] >=33 && array[x] <= 39){
        console.log(`you Got C and yor number is${array[x]}`)
    }
    else{
        console.log(`you Fail and yor number is${array[x]}`)
    }
}