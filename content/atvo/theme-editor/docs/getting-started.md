---
sidebar_position: 2
---

# Getting started
This page describes the ATVO Theme Editor functionality from a high-level and explains the most important features to get you started.

## Overview
An ATVO theme consists of at least the following elements, most of which are described further below:
* Widgets: the visual elements of your overlay graphics, such as a tower, lap counter, weather graphic, etc.
* Buttons and other controls to control your theme, such as showing and hiding Widgets, starting animations and many other actions.
* Media such as Images and Videos to show in your graphics.


## Overlay: Graphics & Widgets
In the editor, you can add Widgets to your theme and position/scale them in your Overlay as desired.

### SubWidgets and Labels
Widgets can contain one or more `SubWidgets` as 'child' elements. Each SubWidget can in turn contain one or more `Labels`. SubWidgets and Labels can be position relative to their parent element. 

SubWidgets and Labels share most properties with Widgets, and the term Widget will often be used interchangeably in the rest of this documentation.

### Visuals
You can configure the look of a Widget by assigning a background color or an image. To use an image, first add it to the theme via the `Images` list, then select it from the Background Image property on the Widget.

### Text & Data
To display text, you must use a Label. Labels can show static text or dynamic data from iRacing via the [Data Binding](../data-binding) system.


## Controls
Your theme is controlled via a dedicated Controls screen which is also fully customizable in the Theme Editor.

Most controls will trigger `Actions` in some way, which have various effects when executed.

The most important controls are shortly described by:
* Buttons can trigger actions when clicked.
* Inputs can be used to input text.
* Timers will trigger action on timed intervals.
* Dropdowns consist of a dropdown list and can trigger actions when specific items are selected.
* Data Triggers and Event Triggers can trigger actions when specific data conditions are met or events (such as green / yellow flags) occur.
* [Storyboards](../storyboards) offer an easy way to chain and time multiple actions in sequence.
* Driver Pickers can be used to select a specific driver or car, from which data is being pulled to show in widgets.
* [Condition Flags](https://atvo.appgineering.com/Forum/Thread/307) are advanced controls that you can use to control state flow of your theme, and allow or disallow actions when a specific condition flag is set or unset. For example; you can prevent 'Show widget' actions from executing when the widget is already visible.



## Actions
Actions are executed via your theme controls and decide what your theme is doing. Many types of actions are available, some are described in short here. Each `Action Type` has one or more `Effects`. Some actions also require a Target and Value to be set to determine for example which Widget is being affected.

The most important actions include:
* Change Widget visibility: Show, Hide, Toggle, Hide All.
* Change Data Source: change data bindings and offsets, e.g. to flip to a next page of a Grid widget.
* Playing media via Play Sound, Play Video, Play Gif.
* Change Camera: to change the camera group and focus in iRacing.
* Execute Scripts

Keep an eye on the Error List when setting up actions, if they are not configured correctly a warning will be shown.


## Exporting and using the theme in ATVO
To use your theme in ATVO, use the File - Export menu option. A dialog window will guide you through creating a new 'compiled' ATVO theme file. You can optionally encrypt the file with a password so it cannot be edited in the Theme Editor without the password.