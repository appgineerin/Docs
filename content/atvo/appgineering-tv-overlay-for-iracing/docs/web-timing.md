---
sidebar_position: 6
---

# Web Timing

ATVO allows you to provide a web timing for your audience. A demo of the web timing (with static data) can be found here: 

* [Timing Screen](https://webtimingdemo.appgineering.com/#/timingscreen)
* [Events](https://webtimingdemo.appgineering.com/#/events)

## Setup

### System requirements
* Webserver (Apache or NGINX are recommended)
* PHP >= 5.0

### Setup outside of ATVO
In your ATVO install directory, you will find the `WebtimingServer` files that you need to deploy to your webserver. They are located under `(Install dir)/bin/WebtimingServer`.
1. Find the file `post.php` and open it with any text editor. At the very top, there is a line that lists your private password. By default it will say `change_me`, please change it to your desired password and save the file.
2. Upload all files of the WebtimingServer folder to your webserver.
3. Ensure the *sessions* folder exists and the webserver has **write access** to it.

*Note: By default the web timing files can be found at C:\Program Files (x86)\Appgineer.in\ATVO Launcher\bin\WebtimingServer*

### Setup inside of ATVO
After clicking the web timing button in ATVO a new window will be shown.
1. Specify the URL of the webserver you uploaded the web timing files to.
2. Enter the password you put in the `post.php` file earlier.
3. Set a name for the event you want to broadcast and provide a web timing for.
4. Set up the update interval for the web timing. We recommend an interval of at least 3 seconds to ensure the webserver is not being flooded by the web timing module of ATVO. Too many requests can cause the web server to fail.
5. Connect to an iRacing session and click the *Start* button.
6. Check the *Log* tab of the Web Timing in ATVO if there are any errors showing up.

![ATVO Web Timing](../static/img/webtiming/webtiming-connection.png)


## Usage
Once deployed and running, you can visit your web timing via your webserver URL at the following three locations:
* Timing screen: `(your server URL)/#/timingscreen`
* Events: `(your server URL)/#/events`
* Spotter Guide: `(your server URL)/#/spotterguide` (Note: default disabled)


## Settings

In the Settings tab, you can:
* Choose to output the Spotter Guide as well.
* Configure which columns you want the web timing screen to display.


## Spotter Guide

To save data, the Spotter Guide is only updated when you Refresh the spotter guide. If you have not yet visited or opened the Spotter Guide tab in your ATVO Timing Screen, the spotter guide will not be output. Make sure to open the Spotter Guide tab first, to refresh the images.

Note that outputting the Spotter Guide is disabled by default, enable it in the Web Timing Settings tab.