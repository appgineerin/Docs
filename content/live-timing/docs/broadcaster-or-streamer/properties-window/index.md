---
sidebar_position: 4
---

# Properties Window

The properties window of Live Timing within ATVO contains all necessary properties for you to set up you broadcast.
Here you may control your profiles, rooms, race events, and shared permissions. To open the properties window, click on
`Live Timing` and then on `New Live Timing` within the menu bar of ATVO.

![](/img/atvo-live-timing-location.png)

Upon clicking on `New Live Timing`, the properties window will open.

## Create Your First Profile

When opening it for the first time, you will be asked to create your first profile.

You need to enter a unique name as well as a description and a website URL for your profile. With a click on the `OK`
button, your profile will be created. To ensure the newly created profile is not empty and can be used right away, we
will create a room with the same name as the profile with it.

![](/img/atvo-properties-first-launch.png)

## Overview of all Properties

Once your first profile has been created, the properties window should look like this.

![](/img/atvo-properties.png)

From here on, the properties window gives you full control over your Live Timing broadcast. The main components of the
properties window are the following:

### 1. Profile Controls

Profile controls allow you to create a new profile or delete the current one. A click on `Create Profile` reveals the
profile creation dialog, where you can enter a unique name, description and website for your profile similar to above.
A room with the same name as the profile will be created by default as well.

![](/img/atvo-properties-create-profile.png)

A click on `Delete Profile` allows you to delete the currently selected profile if your current permissions allow it.
You will be prompted to confirm the deletion of the profile.

**Note: this action cannot be undone.** Appgineering does not store any data of any deleted profiles. Upon confirming the
deletion of a profile, we will delete the profile and all its associated data immediately and irreversible.

### 2. Profile Selector

The profile selector allows you to switch between your profiles. The currently selected profile is the one which will be
used for broadcasting, once enabled.

### 3. Room Selector

Since a profile may contain multiple rooms, you can select the room to broadcast to using the room selector.

### 4. Tabs

There are multiple different tabs in the lower half of the properties window, each containing detailed properties for
parts of the system to control. The different tabs are the following:

1. [Live](tab-live.md)
2. [Event](tab-event.md)
3. [Manage Profile](tab-manage-profile.md)
4. [Help](tab-help.md)

Under these pages, you can find detailed information about the different tabs.


/*
This window provides you with the following abilities:

* [Manage your profiles](../manage-profiles)
* [Manage your rooms within your profiles](../manage-rooms)
* [Manage your race events](../manage-race-events)

Basically the structure is as follows.

![](/img/profile-room-race-event-hierarchy.png)

Every user may create one or multiple `profiles`. A profile is your identity within Live Timing, so you may set it to
your broadcasting channel or streamer name. A profile may not only belong to you. If you need, access to profiles (and
everything within) may be [shared with other Appgineering accounts](../share-profile-access).

Every profile may contain one or multiple `rooms`. A room is where the timing and scoring data is broadcast to. Since
access to profiles may be shared, there may be multiple parallel streams per profile. However, we only allow one stream
per room at a time, so you may be required to create more than one room. By default, when you create a profile, a room
is created with the same name as the profile.

> **_NOTE:_** Be aware that there is no mechanism in place to prevent you from overwriting your streams in your rooms.
> If one user is streaming to a room and another user starts streaming to that room, the second stream with block the
> first one.

Additionally, every profile may contain one or more `race events`. A race event is your session that you are
broadcasting. You may give it a proper name, description, and logo so users may find what they are looking for easier
on the Live Timing website.
*/