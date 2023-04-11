---
sidebar_position: 3
---

# Data Tunnel

The Data Tunnel is meant to transmit the iRacing data from one PC to another PC over a local network (LAN). This allows you to run iRacing and ATVO on separate PCs.

## Server
Run the ATVO Data Tunnel Server on the PC that runs iRacing. Once the connection to iRacing is established, start the server on your desired port.

## Client
Run the ATVO Data Tunnel Client on the PC that runs ATVO. Once the Data Tunnel Server is 
running on your other PC, connect to the server via its local IP address and the port. Once
the connection is established, ATVO should receive data from the Data Tunnel. Make sure the `Data Source` setting is set to `Data Tunnel` in ATVO, and restart ATVO if it was not.

### Data Source
On the client PC that runs ATVO, you must tell ATVO to look for the Data Tunnel as the Data Source, instead of an iRacing connection.