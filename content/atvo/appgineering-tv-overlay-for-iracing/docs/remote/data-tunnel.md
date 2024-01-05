---
sidebar_position: 3
---

# Data Tunnel

The Data Tunnel can transmit iRacing data from one PC to another PC over a local network (LAN). This allows you to run iRacing and ATVO on separate PCs. 

The typical use-case is:
* "Server PC": one computer running iRacing and the Data Tunnel Server. Streams iRacing to your video mixer.
* "Client PC": another computer running ATVO and the Data Tunnel Client. Streams ATVO graphics to your video mixer.

You will likely need to use NDI and a video mixer to merge the streams together for your broadcast.

### Do not combine Data Tunnel with ATVO Remote!
* ATVO Remote is meant to allow multiple people to control your graphics and cameras at the same time and stay in sync.
* Data Tunnel is meant just to send data from one PC to another. The Server PC should not be used for anything other than streaming iRacing.

## Two-way communication
The Data Tunnel allows communication of data in both directions:
* All iRacing data (standings, telemetry, etc) will be sent from the Server PC to the Client PC. On the Client PC, ATVO will read the data as if it is coming from a real iRacing session.
* All commands you may send to iRacing from ATVO are also sent back from the Client PC (ATVO) to the Server PC (iRacing). For example: changing the camera group or focused driver, replay settings, etc. 


## Server PC
On the Server PC, start the ATVO Data Tunnel and use the Server tab. **Note: the Data Tunnel application must be running as administrator!**
Start iRacing and wait for the Data Tunnel to recognize the iRacing connection. Once the connection to iRacing is established, click Start to start the server on your desired port.

**Important:** it is recommended to **close ATVO** on this computer, since it is not needed.

Obtain the local IP address of the Server PC. Most likely you can use the following steps to obtain it:
* Run 'cmd' command line tool in Windows.
* Type 'ipconfig' and hit enter. Some details about your network will be displayed.
* Look for your network adapter and the `IPv4 Address`. It most likely starts with "192.168.178.x", but other values are possible too. This is the IP address to use on the Client PC later.

## Client PC
On the Client PC, start ATVO and the Data Tunnel, then use the Client tab. 
Once the Data Tunnel Server is running on your other PC, connect to the server via its local IP address and the port you specified. Once the connection is established, ATVO should receive data from the Data Tunnel. Make sure the `Data Source` setting is set to `Data Tunnel` in ATVO, and restart ATVO if it was not.

### Data Source
On the client PC that runs ATVO, you must tell ATVO to look for the Data Tunnel as the Data Source, instead of an iRacing connection.


## Trouble shooting
### Data Tunnel Server does not start
Please ensure Data Tunnel is running as administrator.

### Data Tunnel Client does not connect
Please try the following:
* Double check that the IP address matches the **local** IP address of the **server** PC.
* If the Server was stopped and started for some reason, try closing and restarting the Data Tunnel application on the server PC. Once the server is stopped, it may refuse future connections.
* Check your Windows Firewall settings to ensure Data Tunnel is not being blocked.