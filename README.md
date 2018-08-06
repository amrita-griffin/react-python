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
- [python](https://www.python.org/downloads/) - v3.7.0 - The 32-bit version is used, but instructions are provided on using  64-bit version instead.
- [pip](http://pipenv.readthedocs.io/en/latest/install/#make-sure-you-ve-got-python-pip)

## Code structure
- The ```client``` section contains HTML, CSS, JavaScript and React
- As of now there are no CSS or Sass changes set up.
- The  ```src``` section contains the Python server. 
- This is an in-progress project and the structure is bound to change.

## Client side setup
- Go to ```/src/client``` and run
> npm install

Make sure the ```node_modules``` folder is created
- Build the javascript bundle
> npm run dev-build

Make sure the  ```/wwwroot/js/bundle.js``` is created and has some mumbled JS in it
- For making progress changes, leave one of the following running in a seperate command prompt
> npm run  build
 (or)
> npm run build-min

- At this point, if you want to set up a site in  IIS, all you need to do  it point to the ```src/client``` folder, we're all set. For any UI changes, all you need to do is run the rebuild scripts and it should work across different browsers, with minified JS/CSS.

- Read on to use a Python server

## Server (Python) setup
- There are a few challenges in setting this up in an IIS like server that are still in progress for the README
- Also from Flask's documentation, using Python Flask is not recommended on a production server. If Python is preferred, use Django for serving the site/server side instead. 

- Now, if you are up for the challenge, read on to setup a local Python server: 
Go to ```/src/server``` and [create a virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtualenv/)

- Upgrade pip version (optional step, may be requested for Python 32-bit)
> python -m pip install --upgrade pip

- Run on the ```/src``` folder: 
> py -m pip install --user virtualenv

It will install it here: ```C:\Users\<Username>\AppData\Local\Programs\Python\Python37[-32]``` 
The packaged site folder can be deleted manually once done. 

- Create a virtualenv (will create it in the ```AppData\Local\Programs\Python\Python37[-32]``` and local ```src```folders)
> py -m virtualenv env

- Activate
> .\env\Scripts\activate.bat

- Deactivate (optional)
> .\env\Scripts\deactivate.bat

- Before running the above command, ensure the ```Python\Scripts``` folder is in the User PATH system variables.
It may be in ```AppData\Roaming``` or ```AppData\Local``` folder.
> C:\Users\<userName>\AppData\Roaming\Python\Python37[-32]\Scripts

- Install python Flask (distributions like Werkzeug are used)
> pip install flask

- Run the app locally
> python app.py

Open ```localhost:5000``` on your browser.
Notice that the ```/hello``` link was created and gets a random value from Python into the front-end!
For now, the link won't work without the Python server setup, as Python does the routing as well as sends mock data back. 

Contact one of the core committers with issues or questions

## Core Committer(s)
[Amrita Rajamani](https://github.com/amrita-griffin)
