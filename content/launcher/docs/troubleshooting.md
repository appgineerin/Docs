---
sidebar_position: 11
title: Troubleshooting
description: Common Launcher problems and the steps that usually resolve them.
---

# Troubleshooting

This page collects common problems and the steps that usually resolve them.

## The Launcher window does not appear

The Launcher minimizes to the tray / menu bar rather than appearing on screen by default if it was previously closed in that state. Click the tray icon (Windows) or menu bar icon (macOS) to bring the window back. If the icon is not visible, the Launcher may not be running — start it from the Start Menu or `/Applications`.

## An app cannot be updated because it is running

Close the application and try again. If the **Close App to Continue** dialog appears, choose **Close App** to let the Launcher request a graceful shutdown. If the app does not close within a few seconds, close it manually from inside the app or via Task Manager / Activity Monitor.

## An app is stuck in "Installing"

Wait a minute first — large applications can take time to extract and install. If the progress has not advanced for several minutes, quit the Launcher fully (tray icon → **Quit**) and restart it. Any half-finished install is cleaned up on the next start and you can try again from the application's row in the **Available** section.

## The Launcher cannot reach the update server

Refresh failures are usually caused by a temporary network issue or by a firewall or VPN blocking outbound connections to `download.appgineering.com`. Try again in a minute, and check your network configuration if the problem persists.

## The tray / menu bar icon is missing

On Windows, the icon may be hidden behind the "Show hidden icons" arrow in the system tray. Drag it onto the visible tray to keep it in view. On macOS, the icon may be obscured if your menu bar is full — close other menu bar items, or expand the menu bar if your display supports it.

## Resetting the Launcher to a clean state

Quit the Launcher, then delete its configuration folder:

- **Windows** — `%LOCALAPPDATA%\Appgineering\Launcher`
- **macOS** — `~/Library/Application Support/Appgineering/Launcher`

Starting the Launcher again will recreate the folder and reset all preferences, including the first-launch tour state. Installed applications are not affected.

## Sharing logs with support

The Launcher writes diagnostic logs to:

- **Windows** — `%LOCALAPPDATA%\Appgineering\Launcher\logs`
- **macOS** — `~/Library/Application Support/Appgineering/Launcher/logs`

When reporting an issue, attach the most recent log file and the version number from the [About page](./about.md) so support can correlate the problem with a specific build.
