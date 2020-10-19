# CRUD-Project-Front-end

This is the README for my first project at QA Academy as a graduate. 
It is a CRUD (Create, Read, Update, Delete) Application that incorporates Full stack development, HTML/CSS web design and Database management through the use H₂.

This README will outline the project, in how it came to be, the research and development and any crucial development documentation to go with it. 

# Parable Station Ship Manifest

Below is a contents area for the various parts of this markdown file. 

## Contents

1. Resources
2. Brief
3. Kanban Board
4. Risk Assessment
5. Database Structure
6. Data Stack
7. Testing
8. Fronted
9. Stretch Goals
10. Author

## Resources

* Presentation [here](https://docs.google.com/presentation/d/139HCllJ2zHiPPAEtSDXsN39Tq_1Fsb_fz8ALB8UiNEE/edit?usp=sharing)
* Jira Board [here](https://qatraineerelder.atlassian.net/jira/software/projects/PSCR/boards/4)
* Risk Assessment [here](https://docs.google.com/spreadsheets/d/1bFGP5dXZZ-XnUCaVH8s5lSRkrQeCfFvFlrfATnrzXjg/edit?usp=sharing)
* Back-end Github Repo [here](https://github.com/Reece-elder/CRUD-Project-Backend)

## Brief

To create a CRUD application with the utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training. 

This project will involve concepts from all core training modules; more specifically this will involve:

* Project Management
* Databases
* JAVA SE
* Spring Boot
* Front- Development
* Automated Testing

### My Approach

In order to achieve this functionality I have decided to produce a simple Ship Manifest database to implement with CRUD functionality. 
This Ship manifest will allow the user to do the following: 
* Create Records in the database 
* Read the records from the database, including creates ones
* Sort the data from the database(and read it) in Asc/Desc of the fields
* Update existing records in the database
* Delete any records from the database.

This database will be mocked to be in use by a fantasy trading port on an asteroid, and will feature aesthetics inspired by the Alien Movie and game series. 

## Kanban Board

My Kanban board for this project can be accessed [here](https://qatraineerelder.atlassian.net/jira/software/projects/PSCR/boards/4).
For the Kanban board I used Jira software and modelled it as an Agile Scrum board. 

![Jira board](https://i.imgur.com/VcG432x.png)

The Jira Board is using the Agile Scrum method with a Sprint to fulfill the user stories to complete the criteria set in the brief. 

An example of a user story is below: 

![User Story](https://i.imgur.com/YCsFEe5.png)

The Jira board has been designed so that elements move from left to right from point of conception (to do) to the 'in progress' column and finally once the task is completed it comes through as done.

## Risk Assessment

The risk assessment for this project can be found [here](https://docs.google.com/spreadsheets/d/1bFGP5dXZZ-XnUCaVH8s5lSRkrQeCfFvFlrfATnrzXjg/edit?usp=sharing). 
A screenshot of the risk assessment is below:

![Risk Assessment](https://i.imgur.com/aOrP9d4.png)

## Database Structure

Pictured below is an entity relationship diagram (ERD) for the database for my project. 
The fact it is rendered green means it has been implemented into my project. 

![ERD](https://i.imgur.com/y2WGeD2.png)

## Data Stack 

### Database

The database for this project is a local H₂ Console with a data-set.sql that has been saved in the back end to auto populate the fields to extend. 
By using a local database it is quicker and easier to test and implement to get a facsimile model working quicker than a cloud database. 

### Back-end 

The back-end is powered by Java using the Spring Boot Framework. This allows rapid and simple deployment of an integration structure between the database and the front-end. The back-end has the DB logic as well as the HTTP requests and allows the front-end to access the DB and work with the data there. 

### Front-end 

The front-end is powered by HTML, CSS and JS, utilizing Bootstrap to fine tune the navigation and placement of elements and JQuery to improve the logic of the application. It uses HTML and CSS to stylize the website, and JS to get data from the DB (through the back-end) to populate the elements created through JS logic. 

## Testing

The total test coverage of my back-end came to 97.5% as shown in the screenshot below. 

![coverage](https://i.imgur.com/VKsjTnf.png)

Testing for my back-end was done through integration testing (using JUnit) and unit testing (using Mockito). 
The integration testing mocked the various HTTP requests which took up the majority of my code (such as /getAll).
The tests were completed by using a mock repo created for testing purposes, passing in the request being tested, the body (if any is needed) for that specific request and the response we expect back out of it. By comparing the response that comes from the request compared to the one we expect, we can see whether the test failed or not. 

The other type of test in my project were unit tests done through Mockito, which mocks up a repo that isn't actually accessible. 
This testing allows us to see whether our methods on a granular level work, rather than whether multiple methods work in conjunction with each other. 

## Front-end

A screenshot of my final front-end can be seen below: 

![front-end1](https://i.imgur.com/ViBQd1a.png)
![front-end2](https://i.imgur.com/3zYCZHV.png)

The front-end is inspired by the UI of the original Alien movies with big clunky boxes, bold monotone colors and a simple and usable UX methodology. 
The main web page is a simple design with a simple database dominating the main page and large easily clickable buttons and logos surrounding the database. It is designed to be practical and robust, much like the philosophy of those engineering firms. That's why no time has been spent making separate pages or utilities to do the core functionality. 

The logo Parable Station is a mock up logo produced by myself to give some sense of reality to the project, and make a 'real' space faring colony that could use this software. 

![modal](https://i.imgur.com/0KwKbiC.png)

Modals have been used to allow new data to be added and updated to the database without disrupting the flow of the original database. 
By ensuring the access buttons to use these modals (new entry etc) are to the side of the web page, they're not obscured by the modal allowing the user to quickly see what modal (and what functionality) they have accessed.

I eventually would like to be able to add more colors and customizability to the site, giving the user the chance to choose the colour scheme for their own application. 

## Future Improvements

There are a number of improvements I would like to implement eventually: 

* Improve the functionality of the page by adding a second database, allowing the user to inspect specific details, such as a dock number log. 
* Add search by / Filter by functionality to the app.
* ~~implementation of a loading/landing page for the user.~~ 
 * Added a landing page with a loading bar 18/10/20
* Functionality to restrict updating and deleting of certain fields without authorization.

## Author

Reece Elder
