# Frontend Of Bookstore

## Tasks

- [x] Basic React App

- [x] Header component with route links

- [ ] Routes

  - [ ] Books Routes

    - [ ] User Routes

      - [x] getBooks GET "/books",
      - [ ] getBooksByName GET "/books/search/:name"

    - [ ] Employer Routes

      - [x] getBooks GET "/books"
      - [ ] getBooksByName GET "/books/search/:name",
      - [ ] CreateBook POST "/books",
      - [ ] UpdateBook POST "/books:id",
      - [ ] deleteBook DELETE "/books:id",

  - [ ] Employee

    - [x] EmployeeLogin POST "/employes/login",
    - [ ] GetAllEmployee(Optional) GET "/employes",
    - [ ] RegisterEmployee(Optional) POST "/employes/register",

  - [ ] User Login

    - [ ] RegisterUser POST "/users/register",
    - [x] LoginUser POST "/users/login"
    - [ ] GetAllUsers(Optional) GET "/users/",

  - [ ] Book Transaction

    - [ ] User Routes

      - [ ] purchaseBook POST "/transactions/purchase"
      - [x] getAllTransactionByUser GET "/transactions/purchase"

    - [ ] Employer Routes

      - [x] get all transactions GET "/transactions",
      - [ ] getAllTransactionByUser GET "/transactions/purchase" (body containing userid)
