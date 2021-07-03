# Week 3 Assignment: Life Tracker

Submitted by: **Henry**

Deployed Application: [Lifetracker Deployed Site](http://fiery-cook.surge.sh/)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [X] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [X] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [X] The activity tracked should be given a unique id for easy lookup.
  * [Table Schema](https://github.com/rrll3553/LifeTracker/blob/main/api/life-tracker-schema.sql) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

[animated video](<iframe width="640" height="400" src="https://www.loom.com/embed/435993df355d4a21a7b21f4e36921cf2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>)

[Link to Video](https://www.loom.com/share/435993df355d4a21a7b21f4e36921cf2)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The Vaccine Hub and the SQL Student Store were super helpful in walking through the process of creating a backend with a persistent PostgreSQL database. The Vaccine Hub was a useful reference for figuring out the login/logout authentication and the SQL Student Store was useful for figuring out the JWT and making sure that the user was authenticated in the session.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would do a complete rehaul of the backend. The way it's written now it requires multiple API calls in order to fetch information. I would instead place everything within a User model that would have all the exercise, nutrition, and sleep data so that I could always just pass user on the frontend and have it contain all the information instead of passing so many variables. If I had more time I would have also liked to work on the sleep data and on making the website look a bit better. I toyed around with Material-UI for creating the cards in the Activity tab but didn't have enough to experiment with really customizing the look and information on it. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

The project demo went well - in that nothing broke during presentation. I did see two websites that were incredibly well made with both Material-UI and just plain CSS. I want to improve my skills in both. 

### Open-source libraries used

- Material-UI

### Shout out

Shoutout to all the TA's and peers but especially to Matt and Paige! 
