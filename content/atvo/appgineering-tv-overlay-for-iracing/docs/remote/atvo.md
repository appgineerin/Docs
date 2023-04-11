---
sidebar_position: 2
---

# ATVO

It is possible to remote control ATVO. This is especially helpful in a professional environment using multiple computers for production.
While it is possible to use the ATVO Remote Feature over the internet, you will achieve the best results if the computers are on the same network.

## Using ATVO Remote over the internet
To use ATVO Remote over the internet you most likely need to set up port forwarding (TCP) on your router, and possibly in your Windows Firewall.
Make sure the port that is specified in the Server has been forwarded in your router, using the right protocol (TPC) and the right local IP address. 

The remote client should connect to the **public** IP address of the computer running the Remote Server, not the local IP address.

We highly recommend to also specify a password if you want to use ATVO Remote. After setting up port and password just hit the **'Start Server'** button.

![ATVO Remote Server](../../static/img/remote/remote-server.png)

Other ATVO clients can connect to the **'ATVO Remote Server'** by entering the corresponding IP address, ATVO Remote port and password of the server.

![ATVO Remote Client](../../static/img/remote/remote-client.png)

#### Send Bookmarks
If checked the bookmarks will be kept in sync between server and client.

#### Follow Server
If checked the client will follow the actions of the server. For example if the server changed the camera, the client will do the same.
