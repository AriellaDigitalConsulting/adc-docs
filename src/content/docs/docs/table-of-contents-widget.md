---
title: "Table of Contents"
description: "The Table of Contents widget makes it much easier for site and page administrators to create and maintain a table of contents for their knowledge and document p"
lastUpdated: 2025-11-04
---

## Widget Overview

The Table of Contents widget makes it much easier for site and page administrators to create and maintain a table of contents for their knowledge and document pages in lumApps

![](/images/30f21d3f619795a9.gif)

##
Widget Settings

**General Best Practice (IMPORTANT)**. It is important to note the following:

1\. **Anchor Tags**. All widgets must include an **Identifier** for proper display in the table of contents (see Use of identifiers below).

Use of Identifiers. This widget will render an HTML content widget into the table of contents only when the widget has an identifier in the widget Style > Advanced. (See [this](https://docs.lumapps.com/docs/docs/design-visual-design-and-layout-landing/design-l8845750598632305/design-l5232283705504523/design-l2164739165572429) article on the LumApps documentation for more information). Once an anchor is added and the page is saved, this widget will display.

See screenshot below on how to add an identifier in LumApps:

![](/images/23fca87f44e57e12.png)

**2\. Widget Title.** All non-HTML Content widgets must contain a title to display in the Table of Contents.. An HTML content may contain a title but it's optional.

**\- How this widgets renders HTML Content Widget Title and H1 tags**. If the HTML Content has no Title, the first h1 (Heading 1) will display in the Table of Contents. If an HTML Content Widget has multiple h1's, only the first one will display when Toggle expended is unchecked.

**NOTE**. It's advisable that your HTML Content only has one h1 (Heading 1

The widget offers a lot of customization to match both the look and feel of the customer brand, as well as offers advanced enhancement options for users to improve the content navigation experience.


Toggle expanded. This option allows the user to see the full uncollapsed view of the widget with all the subnavigation elements on the page. Unchecking this option would only show the first level navigation items.

Sticky. This option makes the widget stick to the page. This option was designed to quickly and easily allow the user to set the widget in a sticky position without leveraging LumApps’ [sticky cell](https://docs.lumapps.com/docs/design-l4226285321025882) option. For more advanced users who want to have more control of the sticky functionality, the sticky cell option is recommended

![](/images/1b8dfa63cc897a04.png)


Colors. You are able to modify the link neutral state color, link hover color and link active color. The defaults. For any of the following colors, you can use the HTML hex value or color name, and any CSS variable you could have defined in your instance style. You could also find useful the LumApps color palette.

![](/images/4e68c1fe85f4f7fe.png)


Generate IDs. This function allows to generate a hyperlink for any of the page’s subnavigation elements which do not have an identifier. Please follow the instructions presented in the widget to generate a hyperlink.

\*IMPORTANT: When clicking the “star” symbol to generate the hyperlink, make sure the refresh the page once before saving.
