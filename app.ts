// to compile run "tsc app.ts -w"
// We compile typescript to javascript, making it 
// "more secure" than just plain JavaScript

// -------------------- Variable types --------------------------
// String
let myString: string = "Hello World!";
// Heavily typed lenguaje, we cant change the variable type as we do in JS
// myString = 12; wrong!!!
// number
let myNumber: number = 22;
// boolean
let myBool: boolean = false;
// any
let myVar: any = "Hello";
myVar = false;

// For using number type in TS, we need to convert it to string
document.writeln(myNumber.toString())
// Arrays
let StringArray: string[] = ["Danny", "Sophi", "Jerome", "Andy", "Dont know what to write!!!"];
let NumberArray: number[] = [16, 22, 17, 16, 55];
let booleanArray: boolean[] = [true, false, true, true, false];
let anyArray: any[] = [123, true, "Hello!!!"];


// tuple
let strNumTuple: [string, number];
strNumTuple = ["Hello", 22]

// void, undefined, null values
//let myVoid: void = undefined;
//let myNull: null = undefined;
// ---------------- Functions -----------------------------
// basic function
function getName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
// Arrow Function
let mySum = (num1: number, num2: number): number => {
    return num1 + num2;
}
// ------------------ Interfaces ------------------------------
interface ITodo {
    title: string;
    text: string;
}

function showTodo(todo: ITodo): void {
    console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = { title: 'Cook', text: 'Cook the dinner!!!' };

showTodo(myTodo);

// -------------------- classes -----------------------------
class User {
    public name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(): void {
        console.log(`the user ${this.name} with the email ${this.email} has been registered`);
    }

    shoeMeAge(): number {
        return this.age;
    }

    private AgeInYears() {
        return this.age + ' years';
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`);
        
    }
}

let Danny = new User('Danny', 'dricardosc15@gmail.com', 16);
// Extends
class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name,email,age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

let Sophi = new Member(1, 'Sophi', 'Sophi@gmail.com', 22);
Sophi.payInvoice();