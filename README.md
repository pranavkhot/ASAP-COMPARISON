# 📱 ASAP-COMPARISON: Mobile Comparison Website

The **ASAP-COMPARISON** website is a comprehensive platform where users can explore, compare, and manage their favorite mobile phones. The site includes features for user authentication, subscription management, tracking favorites, and history logging, with dedicated tools for admin content management.


---

## 📜 Table of Contents

- Features
- Tech Stack
- Project Structure
- Detailed File Descriptions
- Installation
- Usage

---

## ✨ Features

- **🔒 User Authentication & Role Management**: Secure login/registration with Google OAuth and differentiated access for admins, guests, and registered users.
- **📊 Mobile Comparison Tool**: Allows users to compare mobile specifications and view detailed information on various models.
- **🔔 Subscription Management**: Enables users to subscribe to updates and newsletters, with easy unsubscribe options.
- **❤️ Favorites and History Tracking**: Stores user activity, including favorite devices and browsing history.
- **🛠 Admin Tools**: Admins have access to pages for managing mobile models, news, user roles, and contact inquiries.
- **🎨 Dynamic UI with Visual Enhancements**: Provides an intuitive interface with sliders, dropdowns, and color options to enhance the browsing experience.

---

## 🛠️ Tech Stack

- **Backend Framework**: Node.js with Express for handling API requests and server management.
- **Authentication**: Passport.js with Google OAuth for secure login.
- **Database**: MongoDB and Mongoose for flexible data management.
- **Cloud Storage**: Cloudinary API for managing media files.
- **Email Service**: SendGrid API for contact and subscription-related emails.
- **Frontend**: EJS templating, CSS for styling, and responsive design.

---

## 📁 Project Structure

The project is organized into a modular structure for efficient management of configurations, HTTP handling, models, public assets, resources, and routing.

- **app/**
  - **config/**: Configuration files for setting up services and environment variables.
  - **http/**: Contains controllers and middleware to handle HTTP requests.
  - **models/**: Defines data models representing entities like users, mobile models, and subscriptions.

- **DB/**: Contains database connection setup or migration files.

- **public/**: Contains static assets accessible by the client-side.
  - **css/**: Stylesheets for various pages and components.
  - **img/**: Images used across the website, including icons and product visuals.
  - **js/**: Client-side JavaScript files for interactive elements.

- **resources/**
  - **views/**: EJS templates for server-side rendering of HTML pages, covering user, admin, and content management interfaces.

- **routes/**
  - **web.js**: Defines routing for various application endpoints, linking URLs to controllers.

- **server.js**: Main server file that initiates the application, sets up middleware, and loads configurations.

- **sitemap.xml**: Structured sitemap file to improve search engine optimization (SEO).

---

## 🔍 Detailed File Descriptions

### Controllers

- **`authController.js`**: Manages user authentication functions, including registration, login, logout, and Google OAuth.
- **`profileController.js`**: Manages user profile retrieval and updates.
- **`compareController.js`**: Core functionality for comparing mobile models.
- **`subscribeController.js` & `unsubscribeController.js`**: Manages subscription status and notifications.
- **`contactController.js`**: Processes user contact inquiries.
- **`favController.js`**: Allows users to add and view their favorite mobile models.
- **`historyController.js`**: Tracks and displays user activity history.

### Models

- **`user.js`**: User schema defining login credentials, role management, and preferences.
- **`subscriber.js`**: Manages records for subscribed users.
- **`model.js`**: Defines schema for mobile models with specifications and other details.
- **Other Models**: `token.js`, `brand.js`, and `contact.js` manage tokens, brand information, and contact form messages, respectively.

### Views (EJS Templates)

- **User Pages**:
  - **`home.ejs`**: Homepage showcasing featured mobiles and navigation.
  - **`about.ejs` & `contact.ejs`**: Pages for static information and user inquiries.
  - **`login.ejs`, `register.ejs`**: Templates for user login and registration.
  - **`password.ejs`, `reset.ejs`**: Templates for password management, including reset options.
  - **`profile.ejs`**: Allows users to view and update their profile details.
  - **`unsubscribe.ejs` & `unsubSuccess.ejs`**: Pages for managing subscriptions.
  - **`404.ejs`**: Custom error page.
  - **`layout.ejs`**: Common layout structure used across the website.

- **Admin Pages**:
  - **`adminHome.ejs`**: Admin dashboard for managing site content and settings.
  - **`addModel.ejs`, `adminEdit.ejs`**: Pages for adding and editing mobile models.
  - **`adminNews.ejs` & `editNews.ejs`**: Templates for managing news articles.
  - **`addColor.ejs`**: Allows admins to add color options for mobile models.
  - **`contactTable.ejs`**: Displays user inquiries for admin review.
  - **`newsPass.ejs`**: News notification management for admins.
  - **`roleUpdate.ejs`**: Allows admins to update user roles.

- **Additional User Functionality**:
  - **`allModel.ejs`**: Displays a list of all available mobile models for users to browse.
  - **`dropdown.ejs`**: Custom dropdown menu for filtering models based on specific criteria.
  - **`fav.ejs`**: Displays the user’s favorite mobile models.
  - **`history.ejs` & `historyView.ejs`**: Provides an interface for users to view their history of interactions with the site.
  - **`preCompared.ejs`**: Shows previously compared models for user reference.
  - **`search.ejs`**: Search results page to help users find specific models.
  - **`searchError.ejs`**: Error page displayed if no search results are found.

### CSS Files

- **`about.css`**: Styling for the about page with team information and mission.
- **`adminHome.css`**: CSS for admin dashboard and related admin tools.
- **`allModel.css`, `history.css`, `profile.css`**: Styles for viewing all models, browsing history, and profile settings.
- **Additional CSS Files**: Includes styling for dropdowns, sliders, single-page views, and search components to maintain a cohesive look and feel.

---


## 🚀 Usage

- **User Authentication**: Users can register, log in, and manage their profiles.
- **Compare Mobiles**: Users can use the comparison tool to evaluate mobile specifications.
- **Subscription Management**: Users can opt-in or unsubscribe from updates and newsletters.
- **Favorites and History**: Users can save favorite devices and access their history of viewed models.
- **Admin Functionality**: Admins have dedicated tools to manage mobile models, news articles, contact messages, and user roles.


---

**Thank you for exploring the Mobile Comparison!📱🔍**

