# Assignment 3

This Assignment updates the social media app to add signup and signin capabilities.

## Installation

Use npm install to install the necessary components that will make the project work.
Next, seed the database with some user data with:
Then, to run the program, enter 
```
npm install
node seed
npm start
```
## Sign up - David
The sign up form works as follows.  

In main.js there is an app.get which shows the signup page, and two app.posts.  The first checks the user and the second saves the user and is called from a next function in checkUser.  Please let me know if this was the correct way to do this.

When the user clicks "Signup" after entering their credentials, a post request is sent to the checkUser method within the usersController.  which populates a newUser object with the user's inputs. 

The fields of the newUser are checked to see if any of the required field was left blank.  If a required field is blank, the checkUser method renders the signup page with data passed into the template. 

The data passed to the template includes the fields the user previously filled out, in order to repopulate the form, and the fileds which were left blank all get their background color changed to yellow.  A div with an error message in red text is also shown below the blank element.  This will happen untill all of the required fields are filled in.  Once all required fields are filled in, the checkUser methods calls next(); which then calls the saveUser method which saves the user to the database.  I wasn't sure if that was the right way to do that.  Please let me know.

## Log In - Fernando
The login form works as follows.

In main.js there is an app.get which shows the login page.  There is also an app.post which checks the login credentials and once verified renders the home.ejs page.

When the user clicks login, the app.post calls the usersController.logIn function. This checks the database for a user with the entered email.  

If the email does not exist the signin page shows an error message beneath the input box describing the error. I tried to turn the background to yellow and the "hasError" class (which turns background color yellow) is being applied to the element but the css is not showing so I am not sure why because it should be the same as signup which works. If you have any suggesetions please let me know.  

If the email exists but the password was entered incorrectly, the login page is rendered with data which repopulates the email and shows an error that the password was enterred incorrectly.  Once everything is correct and the credentials match a user in the database, the home.ejs page is rendered.

## Error Controller
The errorController shows 404 and 500 hundred errors and are called after all the get and post lines in main.js.



# Questions
 I looked into fixing the responsivenss of the homepage (the follow sidebar which is on the left in big screen mode get hidden underneath the main data)  other than looking more into bootstrap responsiveness do you know of any changes we could make to fix this? If not that is ok, I can research.