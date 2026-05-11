---
sidebar_position: 4
title: Updating an Application
description: How updates are surfaced, applied, and how mandatory updates differ from optional ones.
---

# Updating an Application

When an installed app has a newer version available on its current channel, the Launcher surfaces the update in three places:

1. The app row in the list shows an **Update** button next to **Open**.
2. The application detail view shows an **Update Available** button in the header.
3. The Versions tab shows the new version with an **Update** action.

<!--![Screenshot: The application detail view with the "Update Available" button highlighted in the header and a small badge indicating the new version number.](/img/launcher/update-available.png)-->

Clicking any of these triggers the update. The new version is downloaded, the running app (if any) is closed, the update is applied, and the previous version is removed.

## Closing a Running App Before Updating

If you trigger an update while the app is running, the Launcher shows a dialog asking whether to close the app and continue, or cancel the update.

<!--![Screenshot: The "Close App to Continue" dialog overlay with the app name, an explanation, and two buttons: "Close App" and "Cancel".](/img/launcher/close-to-update.png)-->

Choosing **Close App** asks the app to close gracefully. If it does not respond within a few seconds, the Launcher waits for you to close it manually before continuing.

## Mandatory Updates

Some updates are flagged by the publisher as mandatory — typically because they fix a serious bug or are required for compatibility with a server-side change. When a mandatory update is pending, the Launcher displays a red warning banner inside the application detail view and the **Open** button is replaced by **Update**.

<!--![Screenshot: An application detail view with a red mandatory-update warning banner across the top of the content area, and an "Update" button where "Open" would normally appear.](/img/launcher/mandatory-update.png)-->

Mandatory updates cannot be skipped: you must apply the update before you can launch the app again. The Launcher itself will keep functioning normally — only the affected app is blocked.
