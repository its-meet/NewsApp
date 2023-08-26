# NewsApp

![Website Screenshot](https://i.ibb.co/bFXW08z/screencapture-localhost-3000-general-2023-08-27-01-08-27.png) OR (https://ibb.co/42pmq5P)>


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Overview
This is the news website named 'NewsApp' which is build to provide the latest news top-headlines. i.e. to proivde the information of what is happening world wide. In this webiste a user can signup to create his/her account then user have to login with the credentials to watch the news. After the user logged in he/she will land to website's general news page which is basically the main news page of the website. The user can watch the plenty of news available, and even the user can watch the read the news based on his/her interest because this website have a categoriztion feature which means that this website show the news based on the categories available for e.g. technology, sports, business, entertainment, etc. Even the user can save the particular news to watch later if he/she is running out of time or they just wish to read it later by clicking on the 'read-later' button on that particular news article and then that news will move to the saved articles which a user can see by clicking the 'saved-articles' button available at the top right corner of the navbar. 
And the UI of this news webiste is made with a popular JavaScript library known as ReactJS and for the desigining part this website has use the popular frontend framework BootStrap, the news on this webiste is coming from an popular API for news named 'newsapi', & for the authentication this website has used the NodeJS to create a REST-API to provide the feature like signing-up a user, signing-in a user and to save the news articles to watch later and the last but not the least , to provide the relief from that infinte scrolling, this webiste has also the pagination feature.

## Features
- News on the website using NewsAPI (News feed)
- News on the basis of user's interest selection (News categorization)
- User authentication (login/signup)
- Saving the news articles to read later
- Relief from infinite scrolling with feature like Pagination.

## Getting Started
First fulfil the prerequisites then move to the installation process and ->
*DON'T FORGET TO INSTALL THE PACKAGES AND SETUP THE ENV FILE*

### Prerequisites
The software mentioned below should have installed in your computer/laptop
Software - 
1. An IDE like VS-Code.  
2. Verison control system like Git.
3. NodeJS

### Installation
Provide step-by-step installation instructions. Include code snippets if necessary. For example:
1. Clone this repository: `git clone https://github.com/its-meet/NewsApp.git`
2. Install dependencies: `npm install`
3. Now Navigate to the server directory: `cd server`
4. Install dependencies: `npm install`
5. Configure environment variables in server directory: Create a `.env` file and fill in the required values. provided below -> 

MONGO_URL = 'mongodb+srv://Ishmeet:nbjL7KaGAAJz9gyI@cluster0.rpkpod4.mongodb.net/' 

6. Run the backend/NodeJS server in the server directory :`npm start`
7. Run the development server in the root directory : `npm start`

## Usage
After running the backend and development server follow this link -> 'http://localhost:3000'
You will see a sign-up page , do sign-up using a email, username and password after signing-up you will land to the sign-in page , do sign-in using email and password which you used during signing-up. After signing-in you will move to the news webiste main page where you will see the top-headlines of general news and at the top you will see a navabr where you will find some categories like technology, sports, business, entertainment, etc. and can watch news based on your interested category and even you can save the articles which you can watch later or again if you wish to by clicking on the 'read-later' button available on the each news article and whenever you wish to read those saved articles just click on the 'saved-articles' button avilable on the top-right corner of navbar, you will see your all saved articles. And don't forget to use those arrow keys  " <-- "   " -->"  available at the bottom of the news page, to read more news articles or to coming back to the previous ones.