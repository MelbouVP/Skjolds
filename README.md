# Skjolds

Skjolds is a small e-commerce website, which provides users with possibility to shop for clothes.

**PROJECT STATUS:  Work-In-Progress**

## Project Outline

Project will consist of developing a small e-commerce website, which will be involved in sales of clothes for both men and women. Users of the website will be able to choose clothes among different categories such as hats, pants, shoes and upper-body clothes such as t-shirts, sweaters and jackets. Users will be able to pay for items using a credit card. 

<img src="https://s3.gifyu.com/images/Front-page.png" />

## Table of contents 
* [Team of developers](#team-of-developers)
* [Main functionality (MVP)](#main-functionality-mvp)
* [Data registry](#data-registry)
* [MVC](#mvc)
* [User roles](#user-roles)
* [User authentification](#user-authentification)
* [Design mock-up](#design-mock-up)
* [Project status](#project-status)

## Team of developers

One developer is participating in development of the project:
* **MelbouVP**

Responsibilities of the developer are following:
* Design - user interface design and design mock-up
* Design of database
* Business logic development
* Programming of controllers, models and views
* Code back-up storage – version control


## Main functionality (MVP)
As mentioned, the project will be developed as an e-commerce website, where users will be able to do following:

*	Choose between variety of clothing for both genders based on different categories of clothing such as hats, pants, shoes and upper-body clothes like t-shirts, sweaters and jackets.
*	Filter clothing based on prefered parameters, for example, price or size.
*	Based on user’s choice of clothing, choose between different size and color (if chosen item has different parameters avaialable).
*	User will be informed about particular clothing item’s price and avialability in terms of quanitity.
*	Every user chosen item will be added to his/her shopping cart.
*	User will be able to check order information before finishing the order.
*	User will be able to pay for their shoping cart using credit card.
*	Make an account for shopping purposes.

## Data registry
The data will be held in main components: User, Order, Category, Item, Shopping cart.
<br/>
<br/>
The web-shop contains multiple categories where in each category there is particular piece of clothing item. Users chooses a clothing item that they wish to buy and the item is added to their shopping cart. After user is finished browsing web-shop, he/she proceeds to checkout and pays for items within the shopping cart – all of the payment information is shown in order information.
<br/>
<br/>
Below layout of main database components can be seen (rough sketch). Additional data components are to be added to support main components, for example, Item_sizing component could be added to support Item component and provide user with ability to choose clothing size. 

<p align="center">
    <img src="https://s3.gifyu.com/images/rough_sketch.png" width="800" height="500"/>
</p>
<br/>
<br/>


## MVC

The project will be implemented through MVC paradigm, where following components will be utilised: 
<br/>

Models:
*	User
*	Order
*	Category
*	Item
*	Shopping cart
<br/>

Views:
*	View for home page.
*	View for shop page where all individual items are listed and filter options can be aplied.
*	View for individual shopping items where they can be added to shopping cart.
*	View for shopping cart to check, adjust and remove cart items.
*	View for checkout/payment page to pay for shopping cart items.
*	View to create shopping item for database.
*	View to update shopping item in database.
*	View to shopping items from database.
<br/>

Controllers:
*	ProductsController with methods for displaying items (index), creating new item (create), saving item (store), editing item (edit) and updating it (update) and deleting an item (destroy) as well as searching/filtering items (search).
*	CartController with methods for displaying cart items (index), adding new item (create) and persisting it (store), adjusting quantities of items in shopping cart (edit) and updating them (update), and removal of items from shopping cart. (destroy).
*	OrderController with methods for displaying order information (index), creating a new order (create).


## User roles
Since the project is revolving around ability of users to purchase items from the website, there will be limited amount of user roles within this project.
<br/>
Users will be divided into following user roles – unauthenticated user, authenticated user and administrator. The users will have following abilities on the website
<br/>

Unauthenticated user:
*	Browse home page.
*	Browse shop and item pages.
*	Use filtering options while browsing shop page.
*	Add items to their shopping cart.
*	Change item quantities in their shopping cart.
*	Visit checkout page.
*	Won’t be able to proceed to payment page and pay for their order.
*	Upon leaving the website, shopping-cart won’t be saved and will reset.
<br/>

Authenticated user:
*	Same abilities as unauthenticated user.
*	Able to proceed to payment page and pay for their order.
*	Upon leaving the website, shoping-cart will be saved in it’s current state.
<br/>

Administrator:
*	Same abilities as authenticated visitor
*	Able to add/remove items from web-shop.

## User authentification
Users will be able to register and authenticate by using a local registration and authentication system. 
<br/>
System interface
Design mock-up has been developed using Adobe XD, which highlights the aforementioned core functionality. It must be noted that design mock-up is not the final product, therefore small changes in design can be implemented during development phase.
<br/>

Design mock-up consists of main components of e-commerce website: 
*	Home page. 
*	Shop page. 
*	Item page.
*	Checkout/order page.

## Design mock-up

**1. Shop page**

<p align="center">
  <img src="https://s3.gifyu.com/images/Web-1920--2.png" width="805" height="500"/>
</p>
<br/>
<br/>

**2. Item page**

<p align="center">
  <img src="https://s3.gifyu.com/images/Item-page.png" width="805" height="500"/>
</p>
<br/>
<br/>

**3. Checkout/order page**

<p align="center">
  <img src="https://s3.gifyu.com/images/Checkout-page.png" width="805" height="500"/>
</p>
<br/>
<br/>

<p align="center">
  <img src="https://s3.gifyu.com/images/Order-details-page.png" width="805" height="500"/>
</p>
<br/>
<br/>


## Project status

**Project is WIP.**


