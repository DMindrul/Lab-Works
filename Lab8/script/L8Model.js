class Employee {
    constructor(firstName, lastName, experience, baseSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.experience = experience;
        this.baseSalary = baseSalary;
    }
    getSalary() {
        let baseSalary  = this.baseSalary;
        if (this.experience >= 5) {
            baseSalary  = baseSalary  * 1.2 + 500;}
        else if (this.experience >= 2) {
            baseSalary  = baseSalary + 200;
        }
        return baseSalary ;
    }
    giveSalary() {
        return console.log(this.firstName + " " + this.lastName + " receives $" + this.getSalary() )
    }
}
class Developer extends Employee {
    constructor(firstName, lastName, experience, baseSalary) {
        super(firstName,lastName,experience,baseSalary);
    }
}

class Designer extends Employee {
    constructor(firstName, lastName, experience, baseSalary, effCoeff) {
        super(firstName,lastName,experience,baseSalary);
        this.effCoeff=effCoeff;
    }
    getSalary() {
        let baseSalary  = Employee.prototype.getSalary.call(this);
        return baseSalary  * this.effCoeff;
    }
}

class Manager extends Employee{
    constructor(firstName, lastName, experience, baseSalary,team) {
        super(firstName, lastName, experience, baseSalary);
        this.team=team;
    }
    getSalary() {
        let countedSalary  = super.getSalary();
        if (this.team.length>=10){
            countedSalary  = countedSalary  + 300;
        }
        else if (this.team.length >= 5) {
            countedSalary  = countedSalary  + 200;
        }

        let devcount = 0;
        for(let key in this.team){
            if(this.team[key] instanceof Developer){
                devcount++;
            }
        }
        if (devcount > (this.team.length / 2)) {
            countedSalary *= 1.1;
        }
        return countedSalary ;
    }
}

class Department{
    constructor() {
        this.managers = [];
    }
    giveSalary() {
        this.managers.forEach( function (manager){
            manager.giveSalary();
            manager.team.forEach(function (member)  {
                member.giveSalary();
            });
        });
    }
}

 function main() {
  let dev = new Developer("Tobiah", "Aeschylus", 1, 600);
  let dev2 = new Developer("Rasmus", "Seneca", 3, 600);
  let dev3 = new Developer("Clemente", "Fadzai", 25, 600);
  let dev4 = new Developer("Brock", "Iakopa", 4, 600);
  let designer = new Designer("Esau", "Aksel", 1, 1100, 0.5);
  let designer1 = new Designer("Vikki", "Nissa", 15, 1100, 1);
  let manager = new Manager("Daichi", "Ulla", 40, 1400, [dev, dev2, dev3, dev4 ,designer,designer1]);
  let department = new Department();
  department.managers.push(manager);
  department.giveSalary();
}

main();