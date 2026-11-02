---
title: "Organization Chart"
description: "The Organization Chart (also called the Reporting Structure widget) displays the same org chart you see on a user’s profile page—now available anywhere on your "
lastUpdated: 2025-09-15
---

## Widget Overview

The Organization Chart (also called the Reporting Structure widget) displays the same org chart you see on a user’s profile page—now available anywhere on your site. If no user is selected, the widget automatically shows the current viewer’s organization chart. You can also search and pick any colleague to display their chart.

Current limitation: due to the LumApps sAPI, the widget shows the selected user plus one level of direct reports (one level below). Deeper levels are not displayed at this time.

## Widget Interface

The widget interface is a responsive design developed with LumApps Designer best practices in mind, so it adapts nicely on desktop and mobile. It contains:

-   User picker (search): start typing a name to find and select a user.

-   Org chart area: renders the selected user at the top and their direct reports one level below.

-   Fallback view: when no user is selected, the chart shows the current viewer’s org chart.


How to use it

1.  Open a page that contains the Organization Chart widget.

2.  Click the User field and type a few letters of a colleague’s name.

3.  Select the correct user from the suggestions.

4.  The chart refreshes to show that person and their direct reports (one level).


Tip: If you arrive on the page without choosing anyone, you’ll see your own org chart by default.

## Widget Settings

-   Default behavior: If no user is preselected in the widget configuration, the widget shows the current viewer’s org chart.

-   User selection (search): Enables content editors (and end users if exposed) to search by name and display that user’s chart.

-   Levels displayed: Fixed to 1 level of direct reports below the selected user (current sAPI limitation).


Installation Instructions

1.  In LumApps Designer, add a Widget block to your page.

2.  Choose Organization Chart from your catalog.

3.  (Optional) Preselect a Default User if the page should always open on a specific person; otherwise leave blank to default to the current viewer.

4.  Publish your page.



## Added Value

-   Familiar experience anywhere: Brings the profile-page org chart to any page where it’s useful (team hubs, project spaces, onboarding pages).

-   Quick people discovery: Type a few letters to jump to a colleague’s reporting line and direct reports.

-   Context-aware: Shows the viewer’s own org chart when no one is selected—zero configuration needed.

-   Mobile-friendly: Responsive layout keeps the chart readable on all devices.

-   Governed by source of truth: Mirrors the profile page data, reducing inconsistencies.


As deeper hierarchy levels become available via the LumApps sAPI, the widget can evolve to display multiple levels below the selected user.


![](/images/04db8ccf1218d7eb.jpg)
