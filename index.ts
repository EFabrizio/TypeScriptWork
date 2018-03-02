interface Person{
    name: string;
    email: string;
    salary: string;
    active: boolean;
}

var people = Array<Person>();

function createPeople(): void{
    let newPerson:any;
    for(let i = 0; i < 10; i++){
        newPerson = {
            name: `Fabrizio ${i}`,
            email: `i${i}@gmail.com`,
            salary:(i+1000),
            active: i%2==0?true:false
        }
        people.push(newPerson);
    }
}

function activePeople(): void{
    for(let i = 0; i < 10; i++){
        if(people[i].active){
            console.log(`Activo ${i}`);
        }
        if(validateEmail(people[i].email)){
            console.log(`Valido ${i}`);
        };
    }

}


function validateEmail(email:string): boolean{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLocaleLowerCase());
}


createPeople();
activePeople();
