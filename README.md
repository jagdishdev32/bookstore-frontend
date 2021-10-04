# Frontend Of Bookstore

## Tasks

- [x] Basic React App

- [x] Header component with route links

- [x] Routes

  - [x] Books Routes

    - [x] User Routes

      - [x] getBooks GET "/books",
      - [x] getBooksByName GET "/books/search/:name"

    - [ ] Employer Routes

      - [x] getBooks GET "/books"
      - [x] getBooksByName GET "/books/search/:name",
      - [x] CreateBook POST "/books",
      - [x] UpdateBook POST "/books:id",
      - [x] deleteBook DELETE "/books:id",

  - [x] Employee

    - [x] EmployeeLogin POST "/employes/login",
    - [x] RegisterEmployee(Optional) POST "/employes/register",
    - [ ] GetAllEmployee(Optional) GET "/employes",

  - [x] User Login

    - [x] RegisterUser POST "/users/register",
    - [x] LoginUser POST "/users/login"
    - [ ] GetAllUsers(Optional) GET "/users/",

  - [x] Book Transaction

    - [x] User Routes

      - [x] purchaseBook POST "/transactions/purchase"
      - [x] getAllTransactionByUser GET "/transactions/purchase"

    - [x] Employer Routes

      - [x] get all transactions GET "/transactions",
      - [x] getAllTransactionByUser GET "/transactions/purchase" (body containing userid throw error with axios get request)
