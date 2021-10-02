# Frontend Of Bookstore

## Tasks

- [ ] Basic React App

- [ ] Header component with route links

- [ ] Routes

  - [ ] Books Routes

    - [ ] User Routes

      - [ ] getBooks GET "/books",
      - [ ] getBooksByName GET "/books/search/:name"

    - [ ] Employer Routes

      - [ ] getBooks GET "/books"
      - [ ] getBooksByName GET "/books/search/:name",
      - [ ] CreateBook POST "/books",
      - [ ] UpdateBook POST "/books:id",
      - [ ] deleteBook DELETE "/books:id",

  - [ ] Employee

    - [ ] GetAllEmployee(Optional) GET "/employes",
    - [ ] RegisterEmployee(Optional) POST "/employes/register",
    - [ ] EmployeeLogin POST "/employes/login",

  - [ ] User Login

    - [ ] GetAllUsers(Optional) GET "/users/",
    - [ ] RegisterUser POST "/users/register",
    - [ ] LoginUser POST "/users/login"

  - [ ] Book Transaction

    - [ ] User Routes

      - [ ] purchaseBook POST "/transactions/purchase"
      - [ ] getAllTransactionByUser GET "/transactions/purchase"

    - [ ] Employer Routes

      - [ ] get all transactions GET "/transactions",
      - [ ] getAllTransactionByUser GET "/transactions/purchase" (body containing userid)
