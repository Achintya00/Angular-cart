# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

#Product Fetching Application

This is a Product Fetching Application built with Angular and managed in an NX workspace. The app fetches products by category from a public API (https://fakestoreapi.com) and uses state management to handle actions, reducers, and effects efficiently.

## Table of Contents
- Features
- Technologies Used
- Setup Instructions
- Folder Structure
- Running the Application
- API Reference
- State Management
- Contributing

## Features
- Fetch and display products by category.
- State management implemented with Angular's @ngrx store and functional effects.
- Modular design using NX libraries for scalability.
- Fully responsive layout using Tailwind CSS.
- Lazy-loaded product library.
## Technologies Used
- Angular (Standalone Components)
- NX (Monorepo management)
- @ngrx/store for state management
- @ngrx/effects for handling side effects
- Tailwind CSS for styling
## Setup Instructions
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- NX CLI (Install globally):
```bash
npm install -g nx
```
### Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### Install Dependencies
```bash
npm install
```
### Generate a New NX Workspace (if needed)
If you want to recreate the workspace:

```bash
npx create-nx-workspace@latest my-workspace
```
### Folder Structure
```bash
/apps
  /product-app   # Angular application
/libs
  /product-lib   # Standalone product library with store, actions, reducers, selectors, and effects
/tailwind.config.js # Tailwind CSS configuration
```
## Running the Application
### Start the Application
Run the following command to start the development server:

```bash
nx serve product-app
```
The application will be accessible at `http://localhost:4200`.

## API Reference
### Base URL
```plaintext
https://fakestoreapi.com
```
### Endpoints
1. Get All Products

      `GET /products`


2. Get Products by Category

      `GET /products/category/{categoryName}`

## State Management
This app uses @ngrx/store for state management.

### Key Concepts:
1. Actions:

   - `fetchProductsByCategory:` Dispatched when products need to be fetched by category.
   - `fetchProductsSuccess:` Dispatched when API returns products successfully.
   - `fetchProductsFailure:` Dispatched when an API error occurs.
2. Reducers:
   - Updates the state based on dispatched actions.
3. Selectors:
   - Used to fetch specific slices of the state.
4. Effects:
   - Handles asynchronous operations (e.g., API calls).
### Example:
#### Action Group
```typescript

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Fetch Products By Category': props<{ category: string }>(),
    'Fetch Products Success': props<{ products: Product[] }>(),
    'Fetch Products Failure': props<{ error: string }>(),
  },
});
```
#### Functional Effect
```typescript
export const fetchProductsEffect = createEffect(
  (actions$) =>
    actions$.pipe(
      ofType(ProductActions.fetchProductsByCategory),
      switchMap(({ category }) =>
        this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`).pipe(
          map((products) => ProductActions.fetchProductsSuccess({ products })),
          catchError((error) => of(ProductActions.fetchProductsFailure({ error: error.message })))
        )
      )
    ),
  { functional: true }
);
```
#### Selector
```typescript
export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);
```
