---
sidebar_position: 3
---

# Properties Window

The properties window of Live Timing contains all necessary properties for you to set up you broadcast.

![](/img/atvo-properties.png)

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
