
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAAKIqdPkUFT3vTgXt8YnhO0pVk3HghTTc",
      authDomain: "tienda-c813e.firebaseapp.com",
      databaseURL: "https://tienda-c813e.firebaseio.com",
      projectId: "tienda-c813e",
      storageBucket: "tienda-c813e.appspot.com",
      messagingSenderId: "750936372693",
      appId: "1:750936372693:web:f3eaad46bac2b667c9795c"
};


class DB {

    constructor(){
        if (!firebase.apps.length) {
            // Inicializamos firebase
            firebase.initializeApp(firebaseConfig);
        }

        // Get a reference to the database service
        this.db  = firebase.database();

        this.setCollections(); // colocamos los datos en las colecciones
    }

    // coloca los datos en las collecciones correspondientes
    setCollections(){
        this.users = [];
        this.products = [];

        // obtiene la referencia a la colleccion user
        let users = this.db.ref('user');

        // verifica si tiene el usuario
        users.orderByChild("id").on("child_added", (snapshot) => {
            this.users.push(snapshot.val());
            console.log("Users: ", this.users);
        });


        // obtiene la referencia a la colleccion user
        let products = this.db.ref('product');

        // verifica si tiene el usuario
        products.orderByChild("id").on("child_added", (snapshot) => {
            this.products.push({...snapshot.val(), purchase:1});
            console.log("Productos: ", this.products);
        });
    }

    // verifica que exista el usuario
    existUser(user, pass){
        let exist = false;
        this.users.forEach ( u => {
            if(u.email == user && u.pass == pass){
                exist = true;
            }
        });
        return exist;
    }

    // obtiene los productos filtrados
    filterProducts(filter){
        if(!filter || filter.length == 0){
            return this.products;
        }
        return this.products.filter ( p => p.name.toUpperCase().startsWith(filter.toUpperCase()) );
    }
}

// inicializa la base de datos
let db = new DB();


export default db;



