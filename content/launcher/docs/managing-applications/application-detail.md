---
sidebar_position: 3
title: Application Detail View
description: The three-tab detail page for each application — About, Versions, and Settings.
---

# The Application Detail View

Clicking the body of an installed app row opens its full detail view. This view has three tabs and a header that always shows the app icon, name, and (where applicable) an **Update Available** button.

<!--![Screenshot: The Application detail view for an installed app, showing the app icon and name at the top, the back arrow, the three tabs (Settings / Versions / About), and the active About tab content.](/img/launcher/app-detail.png)-->

## About Tab

Shows the app's icon, name, current installed version, a markdown description provided by the publisher, and any helpful links such as a homepage, support contact, or documentation. Clicking a link opens it in your default browser.

<!--![Screenshot: The About tab of an application detail view with a long markdown description and a couple of external links rendered as buttons.](/img/launcher/app-about.png)-->

## Versions Tab

Lists every version of the application available across all release channels, newest first. Each row shows the version number, release date, a channel badge (Stable / Beta / Alpha), an optional **Required** badge for mandatory versions, and an action button that depends on the version's relationship to your current install:

- **Installed** — A non-interactive label on the version you currently have.
- **Update** — Blue button on newer versions on your current channel.
- **Downgrade** — Orange button on older versions on your current channel.
- **Install** — Blue button on any version when no version is currently installed.

If a version belongs to a different release channel than the one you are on, an info icon appears next to it. Hovering the icon explains that switching to that version will also switch your release channel.

<!--![Screenshot: The Versions tab showing a scrollable list of versions. The current version is marked "Installed", newer versions on the same channel show an "Update" button, older versions show "Downgrade", and a beta-channel version shows an info icon explaining channel mismatch.](/img/launcher/app-versions.png)-->

Clicking a version row (outside its action button) opens the release notes for that version. See [Version History](./version-history.md) for details.

## Settings Tab

Per-application settings, including the installation path, release channel, version lock, and the uninstall button. See [Per-Application Settings](./per-app-settings.md).
