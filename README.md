# Frontend Of Bookstore

## Tasks

- [x] Basic React App

- [x] Header component with route links

- [ ] Routes

  - [ ] Books Routes

    - [x] User Routes

      - [x] getBooks GET "/books",
      - [x] getBooksByName GET "/books/search/:name"

    - [ ] Employer Routes

      - [x] getBooks GET "/books"
      - [x] getBooksByName GET "/books/search/:name",
      - [ ] CreateBook POST "/books",
      - [ ] UpdateBook POST "/books:id",
      - [ ] deleteBook DELETE "/books:id",

  - [ ] Employee

    - [x] EmployeeLogin POST "/employes/login",
    - [x] RegisterEmployee(Optional) POST "/employes/register",
    - [ ] GetAllEmployee(Optional) GET "/employes",

  - [ ] User Login

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
