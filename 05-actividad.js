class Count {
    constructor(name){
        this.name = name;
        this.count = 0;
    };

    static countGlobal = 0;

    getResponsable(){
        return this.name;
    };

    getCountGlobal(){
        return Count.countGlobal;
    }

    getCountIndividual(){
        return this.count;
    };

    countMethod(){
        this.count++;
        Count.countGlobal++;
    }
};

const ariel = new Count(`Ariel`);
const alvaro = new Count(`Alvaro`);

console.log(ariel.getResponsable());
console.log(alvaro.getResponsable());
console.log(`--sumo 1 a ariel--`);
ariel.countMethod();
console.log(`contador ariel =`, ariel.getCountIndividual());
console.log(`contador global =`, Count.countGlobal);

console.log(`--sumo 1 a alvaro--`);
alvaro.countMethod();
console.log(`contador alvaro =`, alvaro.getCountIndividual());
console.log(`contador global =`, Count.countGlobal);
console.log(`--sumo 1 a alvaro--`);
alvaro.countMethod();
console.log(`contador global =`, Count.countGlobal);