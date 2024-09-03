---
sidebar_position: 4
---

# Streaming ATVO graphics to your viewers

There are several ways to stream the ATVO graphics to your viewers. The best scenario for you depends on your circumstances. In most cases, you will use a screen recording and streaming software such as Open Broadcaster Software (OBS) to capture your screen or the graphics, and send it to your live stream.


### Single computer, single screen capture of iRacing and ATVO
The simplest method is to put the ATVO overlay physically on top of your iRacing window, then using Display Capture or similar to capture and stream both at the same time. Note that iRacing must be running in **Windowed mode** for the ATVO graphics to appear on top.

### Capture ATVO via 'browser source'
It is not possible to capture ATVO via a browser source. The alternatives are `Window Capture` (OBS) and `NDI` (OBS and others).

### Window Capture (OBS)
It may be possible to capture the overlay graphics via the Window Capture mode. Select the ATVO Overlay window as the window, and make sure the `Capture Method` setting is set to: "Windows 10 (1903 and up)". If this does not capture the overlay properly, then you must use NDI instead.

### Separately capture iRacing and ATVO via NDI
To capture ATVO separately, you need to use our `NDI Recorder` tool, which you can find through the Tools menu. NDI Recorder is able to capture the ATVO graphics and send them to OBS or other streaming software/hardware via NDI, a popular livestreaming technology. 
If you are using OBS, you'll need to install an [OBS NDI plugin](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/).

NDI can also be used to send the ATVO graphics over your local network (LAN) to another streaming computer, see below.

### Multiple computers
If you have access to multiple (high performance) computers, it may be advantageous to run (and stream) iRacing from one computer, while running the ATVO graphics from a different computer. In this case, you can use our `Data Tunnel` tool to send the iRacing data from the iRacing PC (the Data Tunnel server) to your ATVO PC (the Data Tunnel client). See our Data Tunnel documentation how to set this up.

The ATVO graphics can be streamed via NDI Recorder to your streaming computer over a local network (LAN).

This setup offers higher performance for both iRacing and ATVO as they don't compete for CPU resources.