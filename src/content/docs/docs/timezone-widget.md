---
title: "Timezone"
description: "The Timezone widget gives the end user the ability to personalize the widget by selecting the timezone relevant to the user to display in the widget."
lastUpdated: 2023-02-28
---

## Widget Overview

The Timezone widget gives the end user the ability to personalize the widget by selecting the timezone relevant to the user to display in the widget.

![](/images/7babb60ff396cd68.gif)

## Widget Interface

The widget interface is a responsive design developed with LumApps Designer best practices, When a user clicks on the cog wheel, they are able to select from numerous timezones by city or country.

![](/images/1d8068e108a1fd41.gif)

The settings selected by the user will persist in the widget.

## Widget Settings

![](/images/501d5a912683f2a8.png)

Message to display above the clocks. Customize the label of the message. The label is typically used to indicate to the user what to do or what the widget displays; i.e., Choose your timezone, or World Clock


Font family. Define which font family you would like to display in the widget. To choose a different font family, please type it into the widget; i.e., Times, Avenir, etc. The widget imports and uses the “[Orbitron](https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap)” font, by default. You can use any custom font you will have included in your Instance Custom Style.


Available date/time formats. Select either a 24h or am/pm format to display in the widget


Available clock type.

![](/images/579b63378e617851.png)

Choose between analog or digital clock displays that best fits your homepage needs!

![](/images/8c9ab35fda272ccd.gif)

Toggle seconds. Toggle seconds on/off to display them in the widget, to add more dynamics to the page

![](/images/1a36b08089e23525.gif)

Maximum number of timezones. Choose how many timezones you would like to have displayed in the widget


## Installation Instructions

\*NOTE: The following settings can be accessible by the Global administrator user only.


All of the values in this widget are based on a dictionary of [IANA Codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). It is possible for a user to select cities from the same time zone; i.e., someone can select New York and Philadelphia.


Once the widget is installed, you will be able to add new timezones, set the widget default state and control how you would like the labels to display in the

![](/images/f1724264572c482f.png)

Available timezones. This shows how many timezones are currently set up in the widget. Upon installation, the widget will have 79 timezones. In the Danger Zone of the Global widget configuration you have three useful buttons: the “Clear all timezones” in case you are unhappy with the current configuration; the “Reload Default Configuration”, to load the default 79 timezones, and a “Load cities” button, to load a second preset, mapped to 71 cities. If you use the “cities” preset, make sure you select the “verbatim” Label Style for a better display.

Default timezones. This shows how many default timezones are set in the widget. It is generally not recommended to have more than three widgets in the default state

ADD TIMEZONE option. Clicking this option opens a new window below where the global administrator can add and new timezones. To add a new timezone, the admin must perform the following steps

1\. Enter the desired timezone into the dialgoe box

2\. Click the “ADD TIMEZONE” blue call to action on the bottom of the screen

3\. Continue adding new timezones as needed per steps 1 and 2 above

4\. Once all of the desired timezones have been added, click the top “ADD TIMEZONE” to close the dialogue box

5\. Click SAVE

\*IMPORTANT: Not clicking SAVE as the last step will not save your settings.

![](/images/f6ee5839e5288be9.png)

ADVANCED SETTINGS option. Clicking this section opens up a popup window with all of the currently configured time zones. This dialog is useful to copy and paste the configuration across Organizations, if you have more than one LumApps instance.

These timezones are expressed as a JSON dictionary, where the key is the IANA code of the timezone and the value is the “verbatim” value that should be used on the UI.

The administrator can either add new timezones manually one by one as described above in the ADD TIMEZONE option, or they can copy and paste a JSON dictionary directly.

NOTE: ⚠️The widget will update the configuration only if the supplied text is a valid JSON.

![](/images/a1ea68dab8322b83.png)

Scrolling further down to the bottom of the popup will show the Default Timezones settings. Use this section to input the default timezones. Timezones will display in the widget as entered in this popup in the order of left to right

Once any updates have been done on this popup, click the blue SAVE call to action at the bottom of the button, to close the popup window.

\*IMPORTANT: Not clicking SAVE as the last step will not save your settings.

![](/images/9ff515f774e988c9.png)
