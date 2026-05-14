---
sidebar_position: 8
title: Updating the Launcher
description: How the Launcher updates itself, what the banner states mean, and how mandatory launcher updates work.
---

# Updating the Launcher

The Launcher updates itself in much the same way it updates the applications you install through it. Update status is communicated in a banner at the top of the main window.

## The Update Banner

A persistent banner across the top of the window communicates the Launcher's own version status.

<!--![Screenshot: A composite image showing the four main banner states stacked vertically: idle (showing current version), checking, update-available (with blue Update button), and downloading (with progress bar).](/img/launcher/update-banner-states.png)-->

The banner has the following states:

- **Idle** — Shows the current Launcher version. No action required.
- **Checking** — Shown briefly while the Launcher contacts the update server.
- **Update available** — Shows the new version number and a blue **Update** button.
- **Downloading / applying** — Shows a progress bar with a percentage.
- **Failed** — Shows an error message and a retry button. Common causes are a dropped connection or a temporarily unreachable update server.

## Applying an Update

Clicking **Update** downloads the new version, applies it, and restarts the Launcher. The whole process usually takes under a minute on a normal broadband connection.

When the Launcher restarts, its window state is preserved — if the window was open before the update, it opens again after; if it was hidden in the tray, it stays hidden. Any application that was installed or running through the Launcher is unaffected: the Launcher updating itself does not touch managed apps.

## Mandatory Launcher Updates

When a Launcher update is marked as mandatory, the Launcher displays a full-screen blocking dialog instead of the banner. You cannot use the Launcher until the update is applied — the dialog cannot be dismissed and there is no "later" option.

<!--![Screenshot: The full-screen mandatory update dialog with a dimmed background, a centered card showing the title "Update Required", the new version, an explanation, and a single "Update Now" button.](/img/launcher/mandatory-launcher-update.png)-->

Mandatory Launcher updates are reserved for changes that fix a security issue or are required to keep the Launcher able to talk to Appgineering's servers. They are rare.
