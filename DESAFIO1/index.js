class Usuario {
         constructor(nombre, apellido){
             this.nombre = nombre;
             this.apellido = apellido; 
             this.libros = [];
             this.mascotas = []; 
         }
         getFullName(){
             return `${this.nombre} ${this.apellido}`;
         }
         addMascota(mascota){
             this.mascotas.push(mascota)
         }
         countMascota(){
             return this.mascotas.length
         }
         addBook(nombre, autor){
             this.libros.push({nombre, autor})
         }
         getBookNames(){
             return this.libros.map(el => el.nombre)
         }
}

const usuario = new Usuario('Alejo', 'Marcó');
console.log(usuario);

usuario.addBook ('Harry Potter' ,'JK Rowling');
usuario.addBook ('El principito' ,'Antoine de Saint-Exupéry');
console.log(usuario.getBookNames());

usuario.addMascota('Lila');
usuario.addMascota('Maylo');
usuario.addMascota('Coco');
usuario.addMascota('Teo');


console.log(usuario.countMascota());
