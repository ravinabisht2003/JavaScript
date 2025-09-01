// for - loop

for (let index = 0; index <= 10; index++) {
    const element = index;

    // console.log(element);
}

for (let index = 0; index <= 10; index++) {
    const element = index;

    if (element == 5) {
        // console.log("5 is the best number");
          
    }

    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);  
        // console.log(i + `*` + j + ` = ` + i*j);
                
    }    
}

let myArray = ["batman", "flash", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}


// break and continue

for (let index = 1; index <= 15; index++) {
    const element = index;

    if (element==5) {
        // console.log(`Detected 5`)
        break
    }
    // console.log(`i value is ${element}`)
    
}

for (let index = 1; index <= 15; index++) {
    const element = index;

    if (element==5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`i value is ${element}`)
    
}



