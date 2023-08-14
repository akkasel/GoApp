## Full Stack Restaurant CRUD Application with Go, Gin, React, and MongoDB  

**Description:**

Web Application to manage restaurant orders. This applications is built with Go as Backend, React as Frontend, and MongoDB as the database. I use Postman to test backend API that I have made with Go.

**Technologies Used:**

1. **Backend**: Go (with Gin Framework)
    - Efficient handling of HTTP requests
    - Middleware support for authentication, logging, etc.
    - Robust routing capabilities
2. **Frontend**: React
    - Dynamic and responsive user interface
    - Component-based architecture for maintainability and scalability
    - Integration with real-time updates for order status
3. **Database**: MongoDB
    - Schema-less NoSQL database for flexibility
    - Efficient querying and indexing
    - Reliable data persistence
4. ************************Other Tools :************************ Postman
    - to test the Backend CRUD [ Create, Read, Update, Delete ] API ( POST / GET / PUT / DELETE )

**Role:**

I worked on this project individually.

**Process:**

1. Setting up the database
    - Open up MongoDB website
    - Build new database
    - Create Cluster
    - Connect
2. Backend
    
    I use Go as my backend web server and built an 
    API with basic CRUD (Create, Read, Update, Delete) functionality that 
    my frontend application can interact with. I use Gin Framework.
    
    ![Backend API run successfully](https://github.com/akkasel/GolangFullStackApp/blob/main/screenshots/Screenshot%202023-08-14%20153651.jpg)
    
    After that, I use Postman to test all of the backend API that I have built (POST / GET / PUT / DELETE)
    
    ![Testing in Postman](https://github.com/akkasel/GolangFullStackApp/blob/afcc1edf94b5ea6ec0065c827249f55861c6940d/screenshots/Screenshot%202023-08-14%20153935.jpg)
    
3. Frontend
    - create-react-app frontend
    - install axios
    - install react-bootstrap@next bootstrap@5.1.0 (for UI styling)
    - use axios to handle requests to the server
    - create components for the app (list of orders, change order, change waiter, delete order)

**Challenges and Solutions:**

1. **Familiarity with the technologies and tools:**
    - **Challenge**: Being my first full-stack project with Gin Framework, understanding how to work with Gin Framework for building the web API was challenging.
    - **Solution**: I dedicated time to thorough research, tutorials, and hands-on coding exercises. Reading documentation, and constant trial and error helped me to grasp the core concepts. I was able to apply these learnings to create a robust and scalable backend.
2. **Integration between Go, React, and MongoDB**:
    - **Challenge**: Integrating the various technologies and ensuring that they work seamlessly together presented its unique set of problems. Managing the data flow between the frontend, backend, and database was challenging.
    - **Solution**: By breaking down the problem into smaller tasks and researching each specific integration point, I was able to piece together the entire system. Utilizing libraries and frameworks that facilitate integration also proved valuable.
3. **Testing and Debugging**:
    - **Challenge**: Building a comprehensive testing strategy for a full-stack application using technologies I was unfamiliar with was intricate.
    - **Solution**: I utilized Go's native testing tools to write tests. Debugging was approached methodically, using both automated tools and manual examination.

**Results/Outcomes:**

1. **Skill Enhancement**: Successfully completing this project allowed me to acquire a solid understanding of Go, Gin Framework, React, and MongoDB. It has broadened my skill set and made me more adaptable to various technologies.
2. **A Comprehensive Solution**: This restaurant WebApp has become a versatile tool that can be adapted to various restaurant models. It demonstrates my ability to manage complex projects and deliver solutions that cater to real-world needs.
3. **Opportunities for Growth**: With this foundational experience, I'm now prepared to take on more complex projects, explore further enhancements to the system, and possibly contribute to the Go community.

**Screenshots or Demo:**

![backend API](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/270033ff-3930-4718-9d00-2bfc7ce333ee/Screenshot_2023-08-14_153651.jpg)

backend API

![frontend (will be updated)](https://github.com/akkasel/GolangFullStackApp/blob/afcc1edf94b5ea6ec0065c827249f55861c6940d/screenshots/Screenshot%202023-08-14%20155656.jpg)

frontend (will be updated)

![Add Order functionality](https://github.com/akkasel/GolangFullStackApp/blob/afcc1edf94b5ea6ec0065c827249f55861c6940d/screenshots/Screenshot%202023-08-14%20155720.jpg)

Add Order functionality
  
Features:
- Add new Order
- Update Order
- Update / Change Waiter
- Delete Order
