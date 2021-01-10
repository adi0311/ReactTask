# Repository Data Visualizer

## Requirements.
To run this project, you need following:-
1. **Xampp** - To run MySQL.
2. **Node.js** - To run React.
3. **Git** - To get the code in your system.
3. Other requirements are present in **package-lock.json**.

## How to run?
1. Fork this repository and clone this repo in your system.
2. Start **Apache** and **MySQL** from **Xampp Control Panel**.
3. Visit http://localhost/phpmyadmin in your browser and create a database named **taskdb**.
4. Add **3 columns** to the created database. Name them as:-

Field     | Type    | Auto Increment | Primary Key
--------- | ------- | -------------- | -----------
id        | INT     | True           | True
username  | VARCHAR | False          | False
password  | VARCHAR | False          | False

5. Add two users, **John** and **Micky** with passwords **12345** and **98765** respectively. Passwords should not be added as **raw**. Pass them through the script present in **passwordGenerator.js** and then add it to database.
6. Now, just open a terminal and change directory to the project's root and then, **reacttaskbackend**. Run command `npm start` and your application is ready.
7. Open `localhost:3000` in your terminal and enjoy the data visualization!

## Login Page.
![](https://github.com/adi0311/ReactTask/blob/master/ReactTaskPictures/LoginPage.png)

## Login With John.
![](https://github.com/adi0311/ReactTask/blob/master/ReactTaskPictures/LoginWithJohn.png)

## Data Visualization shown to John.
![](https://github.com/adi0311/ReactTask/blob/master/ReactTaskPictures/DataToJohn.png)

## Login With MICKY.
![](https://github.com/adi0311/ReactTask/blob/master/ReactTaskPictures/LoginWithMICKY.png)

## Data Visualiazation shown to MICKY.
![](https://github.com/adi0311/ReactTask/blob/master/ReactTaskPictures/DataToMICKY.png)
