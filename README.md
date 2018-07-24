# react-python-flask
A simple project that uses React on the front end and Python on the server

## System pre-requisites
The project needs to have Python, NPM/Node and PIP installed on your machine
Check if your system already  has them installed by running these commands:
    > npm -v
    > node -v 
    > pip --version


### Download links
- [node/npm](https://nodejs.org/en/)
- [python](https://www.python.org/downloads/) - v3.7.0
- [pip](http://pipenv.readthedocs.io/en/latest/install/#make-sure-you-ve-got-python-pip)

## Code structure
- The ```client``` section contains HTML, CSS, JavaScript and React
- As of now there are no CSS or Sass changes set up.
- The  ```src``` section contains the Python server. 
- This is an in-progress project and the structure is bound to change.

## Commands to run
- Go to ```/src/client``` and run
> npm install

Make sure the node_modules folder is created
- Build the javascript bundle
> npm run dev-build

Make sure the  ```/wwwroot/js/bundle.js``` is created and has some mumbled JS in it
- For making progress changes, leave one of the following running in a seperate command prompt
> npm run  build
 (or)
> npm run build-min

To load up the python server
Go to ```/src/server``` and run
> python app.py

Open ```localhost:5000``` on your browser.
Notice that the ```/hello``` link was created and gets a random value from Python into the front-end!
This can be changed to use with a component to consume the 'data'.

Contact one of the core committers with issues or questions

## Core Committer(s)
[Amrita Rajamani](https://github.com/amrita-griffin)
