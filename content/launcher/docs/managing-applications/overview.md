---
sidebar_position: 1
title: Overview
description: The Apps tab — list sections, search, refresh, and the row-level controls for each application.
slug: /managing-applications
---

# Managing Applications

The **Apps** tab is the core of the Launcher. It lists everything you can install, what you already have installed, and anything that is not compatible with your current system.

![Screenshot: The Apps tab with all three sections visible — "Installed" expanded showing two apps, "Available" expanded showing several uninstalled apps, and "Unsupported" collapsed.](/img/launcher/apps-tab.webp)

## List Sections

The application list is divided into three sections, each with a count badge in its header:

- **Installed** — Applications currently installed on this device.
- **Available** — Applications you can install but have not yet installed.
- **Unsupported** — Applications that exist in the catalog but do not support your current operating system or hardware.

The **Available** and **Unsupported** sections can be collapsed by clicking their headers. The **Installed** section is always expanded so your installed apps are never hidden behind a click.

<!--![Screenshot: The Unsupported section expanded, showing an app entry that is grayed out with a small "Not supported on this platform" indicator.](/img/launcher/unsupported-section.png)-->

## Searching for an Application

Clicking the magnifying glass icon in the top bar expands an animated search field. The list filters in real time as you type, across all three sections simultaneously. A small clear (×) button appears once you have typed something; clicking it empties the field and restores the full list.

![Screenshot: The search bar expanded with the text "atvo" typed in, and the application list filtered down to only matching results.](/img/launcher/search-active.webp)

Closing the search bar (clicking the magnifying glass again) also restores the full list.

## Refreshing the List

The refresh icon next to the search button does two things:

1. Re-downloads the catalog of available applications from Appgineering's servers.
2. Checks every installed application for new versions on its configured release channel.

The icon spins while the refresh is in progress. The list updates automatically when it finishes — newly available apps appear in the **Available** section, and any installed app with a pending update gains an **Update** button on its row.

## Application Row Quick Actions

Each application row shows the app icon, name, and one or more action controls depending on the app's current state:

- **Not installed** — An **Install** button. See [Installing & Launching](./installing-and-launching.md).
- **Installed and up to date** — An **Open** button with a flyout menu (Versions, Settings, About, Uninstall).
- **Installed with update available** — An **Update** button alongside the Open button. See [Updating an Application](./updates.md).
- **Unsupported** — No action; the row is grayed out and shows an explanatory badge.

<!--![Screenshot: Three application rows side by side: one with an Install button, one with an Update button + Open flyout, and one with just an Open button.](/img/launcher/app-row-states.png)-->

Clicking the row body (anywhere outside the buttons) opens the [application detail view](./application-detail.md).
