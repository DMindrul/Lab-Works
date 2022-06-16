let choice = prompt('Choose task variant: 1 = 1 : 2 = 2 : 3=3 : ');
choice = parseInt(choice);
if (choice === 1) {
	num = prompt("Enter number for 1st task")
        if (isNaN(num) === false) {
            if (num % 2 == 0) {
                console.log('Num is even')
            } else {
                console.log('Num is odd')
            }
        } else {
            console.log(' ')
        }

} else if (choice === 2) {
    let arr = [];
    let sch = 0;
    let flag = true;
    let suma = 0;

        for (let b = 1; b < 20; b++) {
            if (b === 1) {

            } else {
                for (let i = 2; i < b; i++) {
                    if (b % i == 0) {
                        flag = false;
                        break; // выйдем из цикла
                    } else {
                        flag = true;
                    }
                }

                if (flag == true) {
                    arr.push(b);
                    sch++;
                }
                if (sch === 5) {
                    break;
                }
            }
        }
        console.log(arr);
        for (let z = 0; z < 5; z++) {
            suma += arr[z];
        }

    console.log(suma);

} else if (choice === 3) {
    let to = prompt('Enter num for 3rd task: ');

        let go = 0;
        let fa = '0';
        let i;
        for (let y = 0; y < to; y++) {
            fa = fa + "1";
            i = parseInt(fa);
            go = go + i;
        }
        console.log(go)

} else {
    console.log(' ')
}
