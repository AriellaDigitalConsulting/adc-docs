---
title: "Content Copier Tool"
description: "The Content Copier widget enables users to efficiently duplicate all LumApps Content(s) from one Custom Content Type (CCT) to another, both within one site, or "
lastUpdated: 2026-02-03
---

### Widget Overview

The Content Copier widget enables users to efficiently duplicate all LumApps Content(s) from one Custom Content Type (CCT) to another, both within one site, or **across sites** within one platform. Users can select both the source and destination sites, along with their respective Custom Content Types, to facilitate the copying process. Additionally, the widget provides advanced filtering options to narrow down the content selection based on specific metadata.


### Widget Interface

![](/images/133b3e6427df0506.png)

1\. Site and CCT Selection:

• Choose the source site and Custom Content Type (CCT) from which the content will be copied.

• Select the destination site and Custom Content Type (CCT) where the content will be copied to.

2\. Content Filtering:

• Optionally filter the source content by selecting content with specific metadata to refine the copying process.

3\. Preview and Confirmation:

• Once the source and destination CCTs are selected, the widget displays the total number of content items that will be copied.

• Links to both the source and destination CCT admin interfaces are provided for easy access and verification.

4\. Initiating the Copy Process:

• Click the “Copy” button to begin the operation. The widget respects LumApps API rate limits and automatically retries in case of rate limit-related failures.

5\. Success Notification:

• After the copying process is complete, the widget displays a success message with a link to the destination CCT for verification.

NOTE: If a piece of content with the same slug already exists in the destination CCT, the widget automatically retries the operation by appending a user-provided suffix to the slug.


### Widget Settings

This widget requires no specific configuration or installation.


### Added Value

• Comprehensive Content Duplication: Ensures that all supported widgets (including Rich Text), their styling, featured images, and CCT tags are copied seamlessly.

• Advanced Filtering: Allows users to target specific content using metadata for precise content management.

• Error Handling: Automatically manages rate limit restrictions and retries operations for uninterrupted performance.

• User-Centric Design: Respects the permissions of the requestor, ensuring that users can only access and copy content between sites where they have the necessary permissions.

• Time-Saving: Provides an efficient way to replicate content across CCTs and **across multiple sites**, avoiding manual duplication and saving valuable time.
