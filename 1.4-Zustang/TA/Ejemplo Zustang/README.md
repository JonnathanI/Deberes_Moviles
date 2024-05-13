# Gestión de Fábrica con Zustand y React

Este proyecto es una pequeña aplicación que utiliza Zustand para manejar el estado de una fábrica ficticia que produce y distribuye productos. El proyecto está escrito en React con TypeScript.

## Archivos Principales

### 1. `factoryStore.ts`

Este archivo define el estado y las acciones de la fábrica utilizando Zustand.

- **Estado**: Contiene una lista de productos.
- **Acciones**:
  - `produceProduct(name: string)`: Agrega un nuevo producto a la lista de productos con el nombre especificado.
  - `distributeProduct(productId: number, quantity: number)`: Distribuye la cantidad especificada de un producto dado por su ID.

### 2. `FactoryComponent.tsx`

Este archivo contiene el componente de React que interactúa con el estado de la fábrica.

- **Funcionalidad**:
  - Muestra la lista de productos de la fábrica.
  - Permite producir nuevos productos.
  - Permite distribuir productos existentes.

### 3. `App.tsx`

Este archivo es el punto de entrada principal de la aplicación.

- **Funcionalidad**:
  - Renderiza el componente principal `FactoryComponent`.

## Uso

Para ejecutar el proyecto:

1. Instala las dependencias usando `npm install`.
2. Ejecuta la aplicación con `npm start`.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Zustand**: Biblioteca de gestión de estado ligera basada en hooks para React.
- **TypeScript**: Superset de JavaScript que agrega tipado estático opcional.

## Desarrollo Futuro

Algunas mejoras que podrían implementarse en el futuro incluyen:

- Incorporar estilos CSS para mejorar la apariencia de la aplicación.
- Añadir funcionalidades adicionales, como eliminar productos o editar cantidades.
- Implementar pruebas unitarias y de integración para garantizar la fiabilidad del código.
