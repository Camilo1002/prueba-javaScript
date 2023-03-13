INSTALACIÓN

Esta ampliación esta creada con ReactJS y Style Components, para ejecutarla 

Debemos descargar el repositorio, abrir la terminal y ejecutar el comando:

npm install el cual nos instala las dependencias para correr el programa, luego

ejecutamos el comando npm run start y este nos correrá la aplicacion

Prueba a realizar:

MEDIA MARATÓN ABURRÁ DE LOS YAMESÍES
En la ciudad ABURRÁ DE LOS YAMESÍES se realizará la media maratón donde más de veinte mil personas participarán. La organización de la carrera necesita información personal y del estado de salud de cada participante, por eso, necesita la ayuda de una plataforma tecnológica que le permita a los usuarios participantes poder registrar su información desde sus computadores, tabletas o teléfonos móviles.

Las restricciones técnicas para esta solución son las siguientes:

- Aplicación web utilizando el lenguaje JavaScript. (Puede usar frameworks o librerías como ReactJs, Angular, VueJs, …)

- Uso correcto de HTML5.
- Uso de hojas de estilos CSS para el comportamiento responsive de la aplicación.

Reto 1

La solución deberá presentar al participante un formulario de registro de información
- Nombre completo (*)
- Identificación (*)
- Correo electrónico
- Ciudad
- Altura (mts)
- Peso (kg)
- IMC (Campo calculado = Peso / (Altura)^2)
- Talla camiseta (M – L – XL) (*)
- ¿Durante el ejercicio o deporte que practica ha tenido dolor en el pecho? (Si/No)
- Valoración (Campo calculado)

Los campos (*) son obligatorios.

Tener en cuenta el tipo de valor a almacenar en cada campo del formulario para decidir el input correcto.

El formulario deberá incluir los botones de Cancelar (limpiar formulario) y Guardar (almacenar la información).

La acción Guardar, deberá mostrar en pantalla la información registrada por el participante. No es requerido almacenar la información en alguna base de datos)

Clasificación de cálculo IMC

Menos de 18.5: Bajo de peso
Entre 18.5 y 24.9 Peso normal o adecuado
Entre 25.0 y 29.9, Sobrepeso
Entre 30.0 y 34.9 Obesidad grado I
Entre 35 y 39.9 Obesidad grado II
Mayor a 40.0 Grado III o obesidad mórbida
  
El cálculo del campo Valoración será de la siguiente manera:

Está dentro del Rango de Peso Normal o Adecuado y No Dolor en el Pecho
ACTO

Está por fuera del Rango de Peso Normal o Adecuado o Sí Dolor en el Pecho
NO ACTO

Reto 2

Utilizar la RESTful API pública https://api-colombia.com/ para obtener el listado de ciudades del departamento de Antioquia. Este listado debe ser incluido en el formulario reemplazando el campo Ciudad por una lista desplegable donde la fuente de información será el servicio RESTful API.

Analizar la documentación de la RESTful API, encontrar el identificador del departamento de Antioquia por medio de los servicios expuestos por swagger. Implementar el endpoint que obtiene el listado de ciudades por un identificador de departamento.


