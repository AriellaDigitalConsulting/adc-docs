---
title: "Metadata Mover"
description: "This Metadata Mover widget helps organizations reorganize their metadata structure to better fit their platform architecture strategy Widget Interface Select la"
lastUpdated: 2024-04-17
---

## Widget Overview

This Metadata Mover widget helps organizations reorganize their metadata structure to better fit their platform architecture strategy

![](/images/0997779605c8da02.gif)

## Widget Interface

Select label: Choose whether you would like to move metadata on the Platform or Site level

Search for the source metadata which you would like to move


Search for the destination metadata into which you’d like to move the metadata value into


Click “Move”


The metadata has successfully moved!

![](/images/2c77a267a236163c.png)
NOTE: After the metadata has been updated, you must refresh the page you’re on to see the changes take place

## Test Scenarios

Please read the following information carefully, as it outlines the tests which we have been performed on this widget:


\*PASS indicates that the test was passed successfully

###
Platform Metadata Mover Test Scenarios


<table><tbody><tr><td><p>Test scenario 1: Moving platform metadata from one parent to another - these tests were performed on two sites to ensure there are no breaks to any of the listed areas on either site</p></td><td><p>Result</p></td></tr><tr><td><p>Saves without any issues in the new parent metadata in back office</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings when content has one metadata</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings when content has multiple metadatas from different parents</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings - No breaks to the content list widget for content lists that are mapped to one metadata only</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings when mapped to multiple metadata values from different parent metadatas</p></td><td><p>PASS</p></td></tr></tbody></table>

<table><tbody><tr><td><p>Test scenario 2: Moving platform metadata from one parent to another - these tests were performed on two sites to ensure there are no breaks to any of the listed areas on either site</p></td><td><p>Result</p></td></tr><tr><td><p>Saves without any issues in the new subcategory where it was moved to</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings - No breaks to the content list widget</p></td><td><p>PASS</p></td></tr><tr><td><p>Global Search Results Screen - Does metadata appear correctly in the Global Search?</p></td><td><p>PASS</p></td></tr></tbody></table>

### Site Metadata


<table><tbody><tr><td><p>Test Scenario 1: Moving site metadata from one parent to another</p></td><td><p>Result</p></td></tr><tr><td><p>Saves in the new parent metadata</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings with one metadata only</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings from different parents</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings - impact on what content is served dynamically with the moved metadata</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings - When a content list widget is mapped dynamically to multiple metadata values from different parent metadatas</p></td><td><p>PASS</p></td></tr><tr><td><p>Roles - metadata gets updated correctly in Role settings</p></td><td><p>PASS</p></td></tr><tr><td><p>Roles - User retain the same level of permissions to access contents after the metadata was moved</p></td><td><p>PASS</p></td></tr><tr><td><p>Roles - User can create new contents with this metadata after it was moved</p></td><td><p>PASS</p></td></tr></tbody></table>

<table><tbody><tr><td><p>Test scenario 2: Moving site metadata from one subcategory to another within the same parent</p></td><td><p>Result</p></td></tr><tr><td><p>Saves in the new subcategory metadata</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings with one metadata only</p></td><td><p>PASS</p></td></tr><tr><td><p>Updates inside the Content Page Settings from different parents</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings - if content is mapped to one metadata</p></td><td><p>PASS</p></td></tr><tr><td><p>Content List mappings - When a content list widget is mapped dynamically to multiple metadata values from different parent metadatas</p></td><td><p>PASS</p></td></tr><tr><td><p>Roles - metadata gets updated correctly in Role settings</p></td><td><p>PASS</p></td></tr><tr><td><p>Roles - User retain the same level of permissions to access contents after the metadata was moved</p></td><td><p>PASS</p></td></tr><tr><td><p>Roles - User can create new contents with this metadata after it was moved</p></td><td><p>PASS</p></td></tr></tbody></table>

### Limitations

The following Metadata Mover widget limitations are post treated is a list of tests which failed our QA for this widget

-   Metadata Mover does not move metadata from Platform to Site or from Site to platform
-   If a Metadata is inherited, it can only be moved to another Metadata family which has the same inheritance settings as the original metadata family
-   Content List Widget Settings Back Office UI only - Content List page settings UI will still show metadata in the original place
    -   Solution A: Manual treatment to update metadata
    -   Solution B: Scripted treatment by doing a site audit of all pages with the Content List widget which has the metadata mappings (this may take an extremely long time for customers who have tens of thousands of migrated pages)


\*NOTE: These limitations pose no real risk based on what we’ve seen, and our customers find that the value of using this widget to do a full metadata restructure far outweighs the limitations outlined above


### Best Practices

We advise following best practices before executing this widget:

-   Have a metadata re-organization plan. The metadata strategy plan should clearly documented on a Google sheet or any other area, so that you can have a clear plan of how the new metadata structure will look once this widget has been used.
