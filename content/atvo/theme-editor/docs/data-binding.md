---
sidebar_position: 4
---

# Data Binding system
To show dynamic data such as data from the sim (driver names, positions, laptimes, track data, weather data, etc), the data binding system must be used. The data binding system consists of several important concepts:

* **Data Set:** The data set defines a group of a specific type of data. Common examples include the standings or followed data sets which contain data about the race standings (in order of position or starting with the driver that is currently being followed by the camera), the pit data set which contains data about drivers in the pits, or the sessionstate data set which contains data about the current race session (track data, weather, fastest lap, etc).

* **Data Binding:** The data binding defines a specific data property to show. Common examples include driver name, position, last laptime, track temperature or last pitstop time. The list of available data bindings depend on the data set. Many data sets contain the same set of bindings (such as standings, followed, pit data sets containing driver information) but other data sets can return a different list of bindings (such as the sessionstate data set).

* **Data Offset:** Most data sets contain multiple data items, such as (a subset of) all drivers. The data offset is used to select one specific item from the list of available data. Typically the data offset is 0 which means the first item in the list is selected (no offset). However, it is common to apply a data offset of +1 or -1 to select for example the next/previous driver in the standings or the next/previous driver on track to show a comparison. Tickers also make heavy use of the data offset as each repeated template element shows the next available data by incrementing its data offset.

* **Data Order:** The order in which data is returned from a data set is defined by the data order. The most common examples are the position or pitstoptime orders. Note that some data sets exist for which the data order is not meaningful (e.g. a list of laptimes).

* **Data Class Filter:** Data filters are used to filter data from a data set by car class. You can select a specific class or leave it default to obtain all classes mixed.

## Example
As a simple example, to show the name of the driver in second place, one would use the 'standings' data set, with the 'fullname' data binding, and a data offset of 1 (no offset would show the leader). To show the name of the driver in front of the currently followed driver, one would use the 'followed' data set instead, and a data offset of -1.

## Specifying data sets, bindings and offsets
Data sets and bindings are selected for a specific widget in the following way:

* The data set is selected on the parent widget. Only the widget defines the data set, and every label inside this widget must use the same data set.

* The data bindings are selected on each label. Only labels can define data bindings as they show the resulting data (text). One label can define multiple data bindings if desired, although proper data formatting should be used to show them in that case.

* The data offset is defined in two places. The parent widget defines the top-level offset, while a subwidget can apply an additional offset. The offsets from the wigdet and subwidget are summed together to obtain the data offset used in the label to select the data.

* Data order and filter are defined on the parent widget.



## Text formatting
Before any data can be displayed on a label, it must first be represented as a 'string', e.g. textual data. Especially for bindings that return numeric data, the conversion to a string can have many choices with different results. To control the conversion of any kind of data to textual string data, we support a specific kind of formatting to the data via the label's Text property.

### Binding data placeholders
The Text property defines the placeholders that the data binding system replaces with the actual data. Around these placeholders, you can type any other static textual data. Placeholders are of the form '{x}', where x is the ID (number) of the data binding as shown in the selected data bindings of the label (starting with 0).

The most simple example is therefore to simply return the first data binding value directly:
* Text: `{0}`

If the data binding is for example driver 'firstname', the result displayed will be:
* Result: `Nick`

To add static text around this placeholder, you'd use for example:
* Text: `My name is {0}.`
* Result: `My name is Nick.`

If you have selected multiple data bindings on one label, you can show the additional bindings via the placeholders {1}, {2}, {3}, etc.

### Formatting numeric data
Almost all data bindings that deal with numbers return actual numeric data, which is not yet converted to a string for you. Therefore, simply applying the default {0} formatting will often show numbers in far too many decimals (e.g. a speed of "241.483981387517 km/h"). To control the number of decimals or apply any other numeric formatting, you can supply a formatting string for each placeholder, in the syntax of:
* Text: `{0:format}`

There is a wide variety of possible formatting strings. For example, to control the number of decimals, you can use the "N" or "0" format. The "N" format can be followed by the desired number of decimals such as "N3". The "0" specifier will be replaced with the corresponding digit if it is present, or 0 otherwise. Some examples are listed below for a raw data value of 241.483981387517 (the formatting string and result given in blue):
* `{0:0}` results in `241`
* `{0:N3}` results in `241.484`
* `{0:0.0}` results in `241.5`
* `{0:0.00}` results in `241.48`
* `{0:0000.0}` results in `0241.5`

The formatting string supports much more options than can be described here. Please refer to the Microsoft .NET articles on [standard format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings) and [custom formatting strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings) for advanced information.