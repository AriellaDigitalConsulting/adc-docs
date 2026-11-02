---
title: "Kaltura"
description: "ADC’s Kaltura Extension for LumApps was designed to help LumApps customers who are also using Kaltura for Live Streaming and/or VOD to seamlessly and securely i"
lastUpdated: 2024-08-29
---

## Widget Overview

ADC’s Kaltura Extension for LumApps was designed to help LumApps customers who are also using [Kaltura](https://corp.kaltura.com/) for Live Streaming and/or VOD to seamlessly and securely integrate the Kaltura experience directly on a LumApps Page, Space or Community.

##
Extension Architecture

The Kaltura Extension is composed of two distinct components:

1) The Kaltura Token Exchange service

2) The Kaltura Extension interface


Proxy Service. A service to run the extension is required in order to protect the Kaltura secret required to create users and sign kaltura sessions.


Extension Interface. An extension widget is required in order to encapsulate the Kaltura player and the logic required to exchange the token and load the Kaltura plug-ins in the right order.

##
Extension Interface

The widget interface is a responsive design developed with LumApps Designer best practices in mind,

### Extension Features

1.  Supports Live Streaming.
2.  Supports Reactions and Live Reactions (both are tracked for analytic purposes, only the second ones will appear in the Live Stream).
3.  Supports Hive Streaming, for analytics.
4.  Supports VOD
5.  Supports Chat and Collaboration and custom player configurations.
6.  Supports multiple partner IDs across the same LumApps organization.
7.  Lets the designer specify the aspect ratio, the width and the height of the viewport.
8.  Supports private events - ie. events that require the user to have an account on Kaltura.
9.  Seamless authentication. We provide a service to seamlessly authenticate LumApps users into Kaltura, without the need for an Authentication Prompt or Consent screen.
10.  Secure events - only the users you have selected in Kaltura will be entitled to consume the event. We will map LumApps users to Kaltura users.
11.  Attribute recognition. Supports identifying users across the corporate digital landscape. (ie. even if the email address of the users differs across the products, we can still identify them by means of another attribute).

### Configurations

#### Extension Global Settings

In order to deploy the extension, you will need to provide the following:

-   Kaltura Token Exchange Service URL. This will be the path to the proxy service (provided by ADC)
-   Partner ID. This is the Kaltura Partner ID of your client Kaltura instance
-   \[Optional\] Use HTTP POST method. Provide a json path identifying the “user ID” in the LumApps users apiProfile that will be used to identify the users in Kaltura.



![](/images/4b9a48497ce63135.png)

### Widget Settings

Partner ID (override). The partner ID entered here will override the value set at the global level in case a customer organization uses multiple partner ID. This is convenient to decentralize the governance at the LumApps page level.

![](/images/39d81da17e25cc46.png)

####
How to Obtain a Partner ID in Kaltura

Visit the KMC, specifically the Integration Settings: [https://kmc.kaltura.com/index.php/kmcng/settings/integrationSettings](https://kmc.kaltura.com/index.php/kmcng/settings/integrationSettings)

![](/images/0d663ca63e067619.png)

#### Player Settings

![](/images/db3ed7fcac4d24ad.png)


Entry ID. This is the ID required to play the Kaltura video.

##### Obtain an entryID

Open a session on the events site

Open an event

Open a session in that event

Now you have two options

-   Copy the session link OR

![](/images/3d270865436d4de7.png)

-   Scroll to the bottom, Copy and paste the value right of “entry ID”

![](/images/c6ee22d48fe957c1.png)

Player UI Conf ID. This is the Player UI Configuration ID


**How to obtain a PlayerID**

\- Access the KMC Studio ([https://kmc.kaltura.com/index.php/kmcng/studio/v3](https://kmc.kaltura.com/index.php/kmcng/studio/v3))

\- Select one of the players or create a new one, matching your expectations

\- On the right of the Player title (EP All Plugins Do Not Delete in the sample), you will find a little, gray-scale number - that is the player ID.

![](/images/128518688ab77d8d.png)


\*NOTE: Screenshots taken from Kaltura are for reference only and may become obsolete should Kaltura UI change. It is the responsibility of the Kaltura customer to follow these steps in order to find the required information.

####
Aspect Ratio

Aspect Ration. Define the desired aspect ratio. Note that the default aspect ratio is as it is defined in Kaltura


Player Width & Height. Specify a unit of measure; i.e., % or 'px' after the value. 'Note: Setting up custom width and height will override the aspect ratio.

![](/images/2abcc515af53f64d.png)

#### Reactions plugin settings

Reactions UI Conf ID. The reactions UI configuration ID is required in order to have reactions in a Live Stream. Leave this field empty to disable the reactions plugin.


CnC Player ID. The CnC player ID allows for the Kaltura Chat experience within the player. Leave this field empty to disable the ChatNCollaboration plugin.


Hive Streaming Ticket URL. The HiveStreaming Ticket URL will active the Hive plugin to collect analytics. Leave this field empty to disable the HiveStreaming plugin.


![](/images/fc78ec29249316a1.png)

###
Technical Requirements Recap

In order to authenticate lumapps users in Kaltura, we need to know

-   The LumApps organization ID
-   The Kaltura Partner ID
-   The Kaltura Admin email address
-   A Kaltura secret allowing us to digitally sign the Kaltura Sessions and the CnC JWT tokens.
-   Optionally, a json path identifying the “user ID” in the LumApps users apiProfile that will be used to identify the users in Kaltura.
