# HerramientasBuildSystemsTE_Maritza_Moreira
 
  Proyecto de Tienda Online en React JS y Angular 8
 
 
 # Especificaciones
 
 Existen dos directorios:
 
  * reactjs  ->  Proyecto de Tienda Online en ReactJS
  
  * angular  ->  Proyecto de Tienda Online en Angular8
  
  Ambos proyectos utilizan la base de datos de Google "Firebase" llamada 'tienda' en la nube, por lo que no se necesita crear ni preinstalar una base de datos, cada  proyecto utiliza distinta base de datos:
  
    react   ->  utiliza Realtime Database de Firebase
  
    angular ->  utiliza Cloud Firestore de Firebase
  
  Ambos utilizan los mismos usuarios para ingresar (se puede acceder con cualquiera de estos usuarios preregistrados en la base de datos):
  
    email : mary@nextui.com     password: mary
   
    email : tutor2@nextui.com   password: tutor2
   
   
  El proyecto de react   fue construidos con: Webpack, Redux, Express, Firebase
  
  El proyecto de angular fue construidos con: Angular-cli, Firebase
  

 # Indicaciones para correr el proyecto:
 
  Para correr los sistemas se debe garantizar tener la versión de node
  
   node v12.12.0
   
  Para utiliza el proyecto en #ReactJS, ubicarse en el directorio "reactjs" y dar los siguientes comandos:
  
    # garantizar que todas las dependencias se encuentren instaladas
    ?>npm install      
    
    # correr la aplicación
    ?>npm start
    
    # revisar la aplicación
    Ir a: http://localhost:5000
    
   Para utiliza el proyecto en #Angular, ubicarse en el directorio "angular" y dar los siguientes comandos:
   
    # instalar la última version de angular y angular-cli de manera globlal (la 8.3.5 o superior)
    ?>npm install -g @angular/cli
    ?>npm install -g @angular/core
    
    # garantizar que todas las dependencias se encuentren instaladas
    ?>npm install      
    
    # correr la aplicación
    ?>ng serve
    
    # revisar la aplicación
    Ir a: http://localhost:4200
    
