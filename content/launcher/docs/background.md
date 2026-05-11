---
sidebar_position: 9
title: Running in the Background
description: How the Launcher stays running in the tray, how to bring the window back, and how to fully quit.
---

# Running in the Background

The Launcher is designed to stay running in the background so it can deliver notifications and serve update requests from other Appgineering tools. This page explains how that works and how to fully quit when you need to.

## Closing vs. Quitting

Clicking the window's close button hides the window — it does **not** quit the Launcher. The icon stays in your system tray (Windows) or menu bar (macOS), the Launcher continues to run, and you can bring the window back at any time.

To fully quit the Launcher, use the **Quit** option in the top-bar three-dot menu, or right-click the tray / menu bar icon and choose **Quit** from the context menu.

The first time you close or minimize the window, a native operating-system notification reminds you that the Launcher is still running and points to where the icon lives. This notification appears only once per installation.

<!--![Screenshot: A native OS notification (Windows toast or macOS notification) titled "Appgineering Launcher is still running" with body text explaining where to find the icon.](/img/launcher/background-notification.png)-->

## Showing the Window Again

Click the tray / menu bar icon at any time to bring the window back. If the Launcher is already in the foreground when you click, the window is hidden instead — clicking the icon always toggles visibility.

## Quitting the Launcher

There are two ways to fully stop the Launcher:

- **From the window** — Open the three-dot menu in the top bar and choose **Quit**.
- **From the tray / menu bar icon** — Right-click the icon (Ctrl-click on macOS) and choose **Quit**.

Quitting while an install or update is in progress will cancel that operation. The downloaded files are cleaned up automatically, and the next time you launch the Launcher the operation can be restarted from the application's detail view.

## Single Instance

Only one copy of the Launcher can run at a time. If you double-click the Launcher icon while it is already running, the existing window is brought to the front instead of a second copy being started. This applies whether the Launcher is already visible or hidden in the tray.
