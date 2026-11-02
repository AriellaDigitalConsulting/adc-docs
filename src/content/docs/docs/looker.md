---
title: "Looker"
description: "The Looker Extension for LumApps allows users to view Looker dashboards directly in LumApps securely, without ever having to be authenticated in Looker."
lastUpdated: 2024-08-28
---

## Extension Overview

The Looker Extension for LumApps allows users to view Looker dashboards directly in LumApps securely, without ever having to be authenticated in Looker.

![](/images/948fb0845a3335b7.gif)

## Extension Interface

The widget interface is a responsive design developed with LumApps Designer best practices in mind,


### Extension Features Overview

-   Knack integration. Embed a Looker Dashboard in Knack with this proxy service offered by ADC.
-   Embed a Looker Dashboard. Drop in a direct embed URL to display in LumApps.
-   Embed a Look.
-   Display an Explore. Allow specific types of users to create their own visualization dashboards directly in LumApps with this feature.
-   Display Query Visualization.
-   Extra Parameters.

## Configurations

#### Extension Global Settings

In order to deploy the extension, you will need to supply a toexen exchange service URL in the dialogue box as indicated below:

![](/images/0b1caba99d4928e8.png)

### Widget Settings

Select how do you want to configure the widget.

Wizard. Choose this option in order to have richer options of selecting the Looker Embed Type.

Automagical. Choose this option if you would simply like to provide an embed URL

Dashboard option. With the Dashboard radio button selected, you can simply enter the Dashboard ID. Enter the Dashboard ID for the dashboard desired for the embed

Filters. Please enter a list of 'Hide filter' (comma separated) in this dialogue box. Comma-separated list of filter names to hide. For example: "Date, Country". Please see the [Looker documentation](https://cloud.google.com/looker/docs/filters-user-defined-dashboards#:~:text=You%20can%20hide%20dashboard%20filters,that%20you%20want%20to%20hide.) for additional reference.


![](/images/6e609614a754bf8c.png)

![](/images/24cd14dd663719e4.png)

Look. Please enter a look ID in the dialog box. Check the [Looker documentation](https://cloud.google.com/looker/docs/publishing-looks-with-public-urls?version=23.8&is_cloud_provider_native=false) to make sure that this Look is public.

![](/images/3f0ab00a2f417576.png)

Explore. Use this option to leverage the full Looker Explore directly in LumApps to be able to build looks and dashboards.

Model name. Please provide a model name of the Explore for this extension to map with which is specified in the wizard. Please see more on the [Looker documentation](https://cloud.google.com/looker/docs/reference/param-explore-explore) page.

Explore name. Please provide an explore name for this widget to map to

![](/images/6da3407e9ed76ae9.png)


Query Visualization. You must provide a query client\_ID (qid) in the dialogue box to display data based on custom queries.

![](/images/3319c57850b6afde.png)


Theme. Please add a theme from your Looker instance directly into this widget, and you will see the Embed automatically update to the new theme!


Extra Parameters. Use this feature to specify additional custom filters for the data surfaced in the extension, restricting the data to a subset.


![](/images/32482fa4b3ee165d.png)

##
Watchpoints

-   Looker Embeds use Third-Party cookies. Safari does not allow the use of third-party cookies. Google Chrome does not allow use of third-party cookies in Incognito mode. Hence,
-   Looker embeds will not be visible in Chrome's Incognito Mode and they will not be available in Safari at all.
-   Accessing a Looker Embed on a LumApps page will overwrite any existing Looker cookie. This means that if you were previously logged in Looker, you shall log into Looker again after you visited a Looker Embed in LumApps. Accordingly it is best practice for end users to only view looks directly in LumApps from this extension, as opposed to going to Looker.
