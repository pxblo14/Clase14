class Persona{
    static idPersona = 0; //Atributos de clase
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona= ++Persona.idPersona; //Atributo del objeto
    }
    //Geter and Setter
    get idPersona(){return this._idPersona;}
    get nombre(){ return this._nombre;}
    get apellido(){return this._apellido;}
    set nombre(nombre){this._nombre = nombre;};
    set apellido(apellido){this._apellido = apellido;};

    //Metodo toString()
    toString(){
        return `ID_Persona: ${this._idPersona} Nombre: ${this._nombre} Apellido: ${this._apellido}`;
    }
}
//Creamos otra clase
class Promotor extends Persona{ //extender = heredad
    static idPromotor = 0;
    constructor(nombre, apellido, email){
        super(nombre, apellido);//PRIMERO SIEMPRE llamar al constructor de la clase padre
        this._idPromotor = ++Promotor.idPromotor;
        this._email = email;
    }
    get idPromotor(){
        return this._idPromotor;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    toString(){
        return `${super.toString()} ID_Promotor: ${this._idPromotor} Email: ${this._email}`;
    }
}
//Creamos otra clase
class Alumno extends Persona{ //extender = heredad
    static idAlumno = 0;
    constructor(nombre, apellido, cuil){
        super(nombre, apellido);//PRIMERO SIEMPRE llamar al constructor de la clase padre
        this._idAlumno = ++Alumno.idAlumno;
        this._cuil = cuil;
    }
    get idAlumno(){
        return this._idAlumno;
    }
    get cuil(){
        return this._cuil;
    }
    set cuil(cuil){
        this._cuil = cuil;
    }
    toString(){
        return `${super.toString()} ID_Alumno: ${this._idAlumno} CUIL: ${this._cuil}`;
    }
}

//Instanciamos objetos de la clase Persona
let persona1 = new Persona("Pablo","Areco");
console.log(persona1.toString());

let persona2 = new Persona("Jhon","Doe");
console.log(persona2.toString());

//Instanciamos objetos de la clase Promotor
let promotor1 = new Promotor("Luis", "Rodriguez", "lrodrigu@gmail.com");
console.log(promotor1.toString());

let promotor2 = new Promotor("Mike", "Smith", "msmith@gmail.com");
console.log(promotor2.toString());

//Instanciamos objetos de la clase Alumno
let alumno1 = new Alumno("Carlos", "Gonzalez", 34567890);
console.log(alumno1.toString());
let alumno2 = new Alumno("John", "Doe", 12345678);
console.log(alumno2.toString());