
# Weather vs CPU <h1>


#### Electron, React cross-platform application, to detect how current, local weather influences my computer's core temperature and performance <h6>


![Preview](src/assets/screenshot.png)
- 
## Changes

Version 0.01
- [x] README boilerplate added
- [x] Basic project structure created
- [x] Initialised basic dependencies 
- [x] React with electron integrated
- [x] Added UI waves
- [x] Icon designed and added
- [x] Added application grid and some dummy data
* 
Version 0.02
- [x] Project structure optimised 
- [x] Added OpenWeatherMap API 
- [x] Implemented ability to pass Location data as props
- [x] Obtained API Keys, Stored and Secured
- [x] Added ability to read API from pc data

* 
Version 0.03
- [x] Project structure and size reduced
- [x] Added ability for front-end to communicate with backend 
- [x] Added Bat script to read the temperature on Windows (need admin rights)
- [x] Added Custom Menu, submenu options
- [x] Added Shortcuts for menu items
- [x] Added Ability to package the application for production
- [x] Added Openhardwaremonitor https://github.com/openhardwaremonitor/openhardwaremonitor
* 
Version 0.04
- [x] CPU Temperature Monitoring function added
- [x] Added Start and Stop auto-monitoring from the main menu
- [x] Added ability to stop monitoring from app
- [x] Add ability to identify and quit running processes 

* 
Things to do
- [-] Add proper description on how to use
- [-] Add ability to identify processors cores
- [-] Add ability to Change town or get location data
- [-] Add support for React dev tools

- [-] Optimise for different OS (process.platform darwin, win32, linux)
- [-] Load and Display data side by side for (visual representation)
- [-] Collected data need to be pushed to db ( or on users machine )
- [-] Analyse results (visual representation)





## Running instructions
* Copy project to your directory ( `git clone https://github.com/ibnzUK/weather-vs-cpu` )
* If you are Running a Windows Subsystem for Linux (WSL), it is recommended to install the project using PowerShell, GitBash or Command Prompt terminal (Concurrently dependency related) 
* Make sure to have Node.js Version >= 12.13.0. For Electron Forge 
* Install project packages (`npm install`)
* To Start electron application project (`npm run dev`)
* To Package up application for distribution (`npm run make`) 
* 

## For Testing
..
.
.


   

## 
