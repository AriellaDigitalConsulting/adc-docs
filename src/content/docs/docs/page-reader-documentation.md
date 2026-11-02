---
title: "Page Reader"
description: "Page Reader Extension Widget Give employees the freedom to listen to LumApps content anytime, anywhere."
lastUpdated: 2026-07-15
---

Page Reader

Extension Widget

Give employees the freedom to listen to LumApps content anytime, anywhere. Whether they're multitasking, commuting, or away from their desks, the Page Reader makes staying informed effortless.

Your content. Your voice. Your way.

Key Features

Instant Audio Playback

Turn any LumApps page into a listening experience, making content accessible whether employees are at their desks or on the move.

Boosts Accessibility and Inclusion

Empower every employee to consume content in the format that works best for them, supporting diverse needs and preferences.

Increases Content Engagement

Help employees stay informed by making it easier to absorb updates, articles, and announcements without adding screen time.

The Employee Experience

Once enabled, employees see a simple, unobtrusive audio control docked on the page. They can choose to have the entire page read aloud, or highlight a specific passage and have only that selection read back to them.

The front-end Page Reader control, offering “Read page aloud” and “Read selection aloud.”![](/images/9ec8d389de171e70.png)

Widget Settings

Administrators configure the Page Reader through the widget's Settings panel. The panel is organized into three areas: which content is read aloud, the primary text-to-speech voice and playback behavior, and an optional fallback provider.

Content to Read

Choose which parts of a page the widget should include when generating audio. By default, all four content types are enabled:

• Title

• Intro

• HTML

• Rich text

Content-to-read selection in the widget settings panel.

![](/images/6d221d851d55567f.png)

Voice & Playback

Administrators select the primary voice and can fine-tune how audio is delivered:

• Voice — select the primary text-to-speech voice used for playback.

• Streaming Mode — plays audio chunks as soon as they're generated, reducing latency and improving performance on longer pages.

• Device — select the processing device used to generate audio.

• Browser Native TTS — optionally enable the browser's built-in text-to-speech engine as an additional voice source.

• Speed — adjustable from 0.5x to 2x, default 1.00x.

• Pitch — adjustable from 0.5x to 2x, default 1.00x.

Voice, streaming, device, and speed/pitch controls.![](/images/a1d550c496d85f39.png)

Fallback TTS Provider

To ensure reliable playback, administrators can configure a fallback text-to-speech provider that activates if the primary voice is unavailable:

• Kokoro TTS — enable a secondary TTS engine as a fallback provider.

• Voice — select the fallback voice (e.g., “Adam”).

• Streaming Mode — applies the same low-latency chunked playback behavior to the fallback provider.

• Dtype — select the data type used by the fallback provider.

• Device — select the processing device used by the fallback provider.

Fallback TTS provider configuration in the Page Reader panel.![](/images/a58a7adefda16ccd.png)

\***NOTE**: This widget does **NOT** leverage any AI nor does it send any information to any third party source and operates entirely within the user's browser, thereby insuring the user information remains local, ensuring privacy of data and security.

Ariella Digital Consulting — LumApps Widget Documentation
