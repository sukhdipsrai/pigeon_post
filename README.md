# PigeonPost

## Background and Overview:

PigeonPost is a Web Application that allows users to hire other users to make same day deliveries; customers make delivery tasks, while drivers process and complete these tasks.

Let's meet our pigeon army https://thepigeonpost.herokuapp.com/#/

### What we will need to:

Build a database to store users (customer and driver) and delivery data
Use the Google Maps API to calculate the distance between pick up location and drop off location.
Make sure to update the redux states with no perceptible delay for interactions between customers and drivers.

## Functionality & MVP:

- Authentication Dual Login/Account creation for Customers and Drivers.

- Post Delivery Tasks - Customers can post delivery tasks and hire Drivers to deliver packages on the same day.

- Accept Delivery Tasks - Drivers can accept deliveries on a dashboard that is visible to all drivers, they can also see the location of the delivery and distance.

- Pricing/Distance - Using the Google Maps API we calculate the distance of the delivery, which factors into the minimum price that has to be charged along with the weight of the package. Customers are informed of the pricing before submitting the form.

- Tasks/Receipts/History (3 Dashboards ) - Delivers are shown accordingly to both customers and drivers based on their status.

  - Customer sees own deliver tasks they make (finished/unfinished)
  - Driver sees own deliveries, ones they accept. ( history of completed/accepted tasks)
  - All Drivers can see all deliveries from customers that are waiting to be accepted (index of delivery tasks any driver can claim.).

- Heroku
- Production Readme

## Features:

### Map shows when user login

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/map.gif)

### Showing tasks which driver can claim

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/claim.gif)

### Showing customer's in-progress tasks

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/progress.gif)

### Changing task status when delivery is done

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/status.gif)

### Uploading package image by user

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/upload.gif)

### Showing user's task history/ driver's past delivery

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/history.gif)

### Posting task by real address; Calculating price automatically; Giving alert messages to user about task post.

![alt text](https://github.com/sukhdipsrai/pigeon_post/blob/main/frontend/src/images/post.gif)

## Technical Challenges:

- Learning to utilize the Google Maps API to account for delivery distance (how far the driver would need to travel, and how to estimate a price for the customer).
- AWS for user profile images
- Backend: MongoDB/Express
- Frontend: React/Node.js
