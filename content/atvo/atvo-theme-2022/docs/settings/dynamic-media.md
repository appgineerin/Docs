---
sidebar_position: 12
---

# Dynamic Media

Dynamic Media allows you to specify and override images, such as sponsor images, driver headshots, car numbers, car images, etc.


## Loading dynamic media

For each type of dynamic media, you can use the Browse button to browse for a folder on your hard drive. Once selected, it will try to load all images (PNG, JPG, GIF, etc) into memory and display them below. 

## Binding images to drivers, teams, cars, manufacturers, etc.

The **filename** of each image is used to link an image to a specific object in the sim, such as a driver, team or car. You can use the **Identifier** dropdown to select what property to use to link the images. For example, selecting *CustomerId* will make the theme look for images that match the customer ID of a driver. This means your media should be named to match the customer IDs of the drivers you are expecting. Selecting *CarNumber* instead will look for a matching car number, etc.


## Image caching in memory
By default, all images are loaded and cached in memory. If your image folder is massive, it may cause overflows or cause ATVO to use too much memory. In that case, you can turn off caching by disabling the *Pre-cache all images on profile load* setting. Now, images for this type of media will be loaded on demand. This may have a very small impact on the theme performance, but is generally not noticable.


More information will follow soon.

