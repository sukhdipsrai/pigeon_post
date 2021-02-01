# PigeonPost

## Background and Overview:
PigeonPost is a Web Application that allows users to hire other users to make same day deliveries; customers make delivery tasks, while drivers process and complete these tasks.

### What we will need to:
Build a database to store users (customer and driver) and delivery data
Use the Google Maps API to calculate the distance between pick up location and drop off location.
Make sure to update the redux states with no perceptible delay for interactions between customers and drivers.

## Functionality & MVP:

* Authentication Dual Login/Account creation for Customers and Drivers.

* Post Delivery Tasks -  Customers can post delivery tasks and hire Drivers to deliver packages on the same day.

* Accept Delivery Tasks  - Drivers can accept deliveries on a dashboard that is visible to all drivers, they can also see the location of the delivery and distance.

* Pricing/Distance - Using the Google Maps API we calculate the distance of the delivery, which factors into the minimum price that has to be charged along with the weight of the package. Customers are informed of the pricing before submitting the form.

* Tasks/Receipts/History (3 Dashboards ) - Delivers are shown accordingly to both customers and drivers based on their status.

  * Customer sees own deliver tasks they make (finished/unfinished)
  * Driver sees own deliveries, ones they accept. ( history of completed/accepted tasks)
  * All Drivers can see all deliveries from customers that are waiting to be accepted (index of delivery tasks any driver can claim.).

* Heroku
* Production Readme


## Technical Challenges:

* Learning to utilize the Google Maps API to account for delivery distance (how far the driver would need to travel, and how to estimate a price for the customer).
* AWS for user profile images
* Backend: MongoDB/Express
* Frontend: React/Node.js


## Accomplished over the Weekend
* All members of the team read the Chrome and MERN tutorials
* Set up database
* Wrote proposal Readme and planned work for the week

## Group Members and Work Breakdown:
Sukhdip Rai(Leader, Flex), Juan Sanchez(Frontend), Zihao Li(Backend)

* Day 0 
  * Setting up the repo for PigeonPost, along with the README and a base skeleton of the project with dependencies included.

* Day 1
  #### AUTH
  * Setting up User Auth for both kinds of users incorporated with the landing page, the customer and the driver. The driver and  regular user tables will have similar attributes but different in a few ways (Driver provides car information, User doesn’t.
    * Sukhdip - seeding data, Google API module, Outline of how app looks
    * Juan - developing action creators, reducers, the form components, for both the user and driver
    * Zihao - backend API for authentication

* Day 2
  #### Delivery tasks CRUD:
  * Allowing users to create delivery tasks (setup locations)
  * Allowing users to cancel tasks before the driver takes it.
  * Creating the frontend flow of customers to create, cancel , view they deliveries.
      * Sukhdip - flex role, assisting frontend and/or backend through task delegation
     * Juan - leading frontend, build out different dashboards: one for the user to view their history/place task; one for the driver to see their history/accept task
     * Zihao - leading backend
     
* Day 3
  #### Delivery tasks CRUD cont.:
  * Allowing drivers to edit delivery tasks (finished/accepted)
  * Allowing drivers to view delivery tasks from which to choose from.
  * Creating the frontend flow of drivers to accept, update, and view their deliveries.
      * Sukhdip - flex role, assisting frontend and/or backend through task delegation
     * Juan - leading frontend, build out different dashboards: one for the user to view their history/place task; one for the driver to see their history/accept task
     * Zihao - leading backend
     
* Day 4
  #### Polishing our app with CSS.
  * Sukhdip - Finish up Styling related issues or remaining backend/frontend features
  * Juan - Finishing up/continuing any styling needed to pages previously made.
  * Zihao - Finish up Styling related issues or remaining backend/frontend features

