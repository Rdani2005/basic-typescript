// to compile run "tsc app.ts -w"
// We compile typescript to javascript, making it 
// "more secure" than just plain JavaScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// -------------------- Variable types --------------------------
// String
var myString = "Hello World!";
// Heavily typed lenguaje, we cant change the variable type as we do in JS
// myString = 12; wrong!!!
// number
var myNumber = 22;
// boolean
var myBool = false;
// any
var myVar = "Hello";
myVar = false;
// For using number type in TS, we need to convert it to string
document.writeln(myNumber.toString());
// Arrays
var StringArray = ["Danny", "Sophi", "Jerome", "Andy", "Dont know what to write!!!"];
var NumberArray = [16, 22, 17, 16, 55];
var booleanArray = [true, false, true, true, false];
var anyArray = [123, true, "Hello!!!"];
// tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
// void, undefined, null values
//let myVoid: void = undefined;
//let myNull: null = undefined;
// ---------------- Functions -----------------------------
// basic function
function getName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
// Arrow Function
var mySum = function (num1, num2) {
    return num1 + num2;
};
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: 'Cook', text: 'Cook the dinner!!!' };
showTodo(myTodo);
// -------------------- classes -----------------------------
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("the user ".concat(this.name, " with the email ").concat(this.email, " has been registered"));
    };
    User.prototype.shoeMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paid invoice"));
    };
    return User;
}());
var Danny = new User('Danny', 'dricardosc15@gmail.com', 16);
// Extends
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Sophi = new Member(1, 'Sophi', 'Sophi@gmail.com', 22);
Sophi.payInvoice();
