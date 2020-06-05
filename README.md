# Boilertplate para la ejecución de apliciones en Shopify.

Contiene toda la lógica para crear una aplicación personalizada en shopify y comenzar a trabajar.

## Pasos para que la app funcione

- Clonar este repo.

- En el partner de shopify, crear una nueva aplicación personalizada, al estar lista, esta te entregará un Api Key y un Api secrect. Copiar estos valores y colocarlos en el archiv `.example-env` en las variables correspondientes.

- renombrar el archivo `.example.env` y dejarlo como `.env`.

Para poder interactuar con shopify, se necesita tener un dominio registrado con HTTPS, para efectos de prueba se puede utilizar cualquier herramienta que permita acceder al servidor local por medio de un tunel que suministra una URL dinámica. Ejm: [Ngrok](https://ngrok.com/).

- Colocar la url HTTPS que te proveé Ngrok en la variable `HOST` del archivo `.env`

- Luego en el terminal ejecutar `npm install`.

- Una vez instaladas todas las dependencias, ejecutar `npm run dev` para encender el servidor.

Ya con esto, la aplicación debería funcionar sin problemas, ir al menú Aplicaciones del partner de shopify, click en la nueva aplicación y en el apartado "**Más acciones**" clickear en "**Prueba en Tienda en desarrollo**".

Despues de instalada la aplicación y si se quiere probar el routing realizar lo siguiente:

- En el partner de shopify, en la aplicación ir al apartado "**Extensiones**" Luego al apartado "**Administrar Aplicación incrustada**", luego donde dice Navegación presionar "**Configurar**".
- Crear dos menu-items uno llamado "_Inicio_" el cual como url final colocar `/index` y el otro llamado "_Prueba de routing_" como url colocar `/annotated-layout`.

Al realizar estos pasos, en la aplicación instalada en la tienda aparecerán 2 apartados de menú con estos nombres. Esto hará un routing entre el inicio y la pagina siguiente.

De aquí en adelante Enjoy. 😎

#### Tutorial Original:

[Build a Shopify App with Node and React](https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react)

## Herramientas utilizadas:

- [Nodejs V.12.16.1](https://nodejs.org/es/)
- [React](https://reactjs.org/)
- [Nextjs](https://nextjs.org/)
- [Koajs](https://koajs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [Polaris](https://polaris.shopify.com/)

Dependencias sugeriadas en el tutorial de Shopify 📡.

Saludos
Antonio Rodríguez
FullStack Developer
