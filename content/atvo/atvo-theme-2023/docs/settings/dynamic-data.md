---
sidebar_position: 9
---

# Dynamic Data

Dynamic Data allows you to specify and override various properties of drivers, teams and sessions via spreadsheets (Excel or CSV files). For example, you can use dynamic data to override driver names, team names, session names and car numbers. Or you can specify colors (primary and secondary) that may be used in various widgets, such as in car numbers and highlight bars. You can also specify additional information such as country, bio, social media handles, etc.


## General dynamic data information

To use dynamic data, navigate to the Dynamic Data settings tab and then to the tab of the data you want to override: Drivers, Teams or Sessions.

### Loading a file

Click `Browse` to browse for an Excel (*.xlsx) or csv file. The file will be parsed and displayed as a preview. Make sure it displays correctly, if not modify the properties on the right hand side.

### Creating an example file

If you don't have any file yet, you can click `Create Example` to create a new csv file with the supported columns. Make sure you click Yes to enable column headers so you can see what headers are expected.

### Live editing is supported on most widgets

When you edit the spreadsheet and save it, ATVO will automatically detect the change and is able to load it into the theme. Make sure `Auto refresh` is turned on to update the data automatically, or turn it off to get a popup asking you to update. Most widgets support live updates too, so once you update the data, the graphics will update to reflect the latest change.

### Dynamic Data Lookup help

Use the `Dynamic Data Lookup` button to open a helpful window with information about the currently connected session, including ID numbers, names, etc. This can help speed up filling in the spreadsheet.

## Types of Dynamic Data

### Driver Info

Set or override properties of individual drivers.

### Team Info

Set or override properties of a team in team sessions.

### Session Info

Set or override the name of a session, for example to rename "Qualification" to "Qual".


## Spreadsheet properties

The properties on the right hand side control how the spreadsheet is read, and how the data is linked to the connected session.

### Choose the right Identifier type

The `Identifier` property decides what property of a driver, team or session is used to link a row in the spreadsheet to an entry in the live session. The **first column** of the spreadsheet is always the identifier column, which should contain the value for the selected identifier type. For example: if your first column contains Customer ID values, then the `Identifier` should be set to CustomerID.

### Other properties
* `Sheet`: when using an Excel file, you can select which worksheet you want to use.
* `Encoding`: select the file encoding. If your file does not look correct (look for 'special characters' too) you can try to change the encoding until it looks correct.
* `Separator`: for CSV files, select which kind of separator character is used to separate each column.
* `Has column headers`: if your file has column header names that are not part of the data, enable this checkbox to make sure they are not included.
* `Trim whitespace`: remove any whitespace characters from each data entry.
* `Has quoted fields`: enable this checkbox if your data is surrounded by double quotes "like this".
* `Auto refresh`: when enabled, changes to the file are automatically detected and updated. If disabled, you'll first get a popup asking to update or not.
* `Ignore locks`: in some cases, the spreadsheet file may become locked by another application (such as Excel). Enable this option to attempt to ignore the lock and read the file anyway.