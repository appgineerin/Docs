---
sidebar_position: 10
---

# Championship Standings

The theme supports several methods of display live championship points and standings, such as the `Championship Standings Tower` and `Fullscreen Champ Standings` widgets.

In order to calculate and display live championship standings, you have to submit results of previous races, as well as the point system that will be used to award points during the current weekend. You need to use spreadsheets (Excel or csv files) to submit these files. Make sure to read the chapter on `Dynamic Data` on how to work with dynamic spreadsheets.


## Live championship standings update

Championship standings can be updated live during the race, taking into account the live positions of every driver. The theme also keeps track of the "previous" points and standings (before the current race weekend) so that it is able to display points gained or positions gained since the previous weekend.


## Championship calculation logic

Championship points and standings are calculated in the following sequence:

* Calculate the points and standings as they were before the current weekend (e.g. previous races). Including potential drop results.
* Award new points to entries in all the sessions of the current race weekend, according to their live positions and the specified point system.
* Apply any rules such as drop results or bonus points.
* Update the live standings with the new points and positions.


## Results

If you wish to import points from previous race weekends, you need to use the Results tab to load a spreadsheet file with those results. The file must have at least 2 columns for the identifier and class name, and is then followed by a new column for every individual race result.

* `Identifier column`: the first column is used to identify to which entry this row belongs, for example by Customer ID or car number. Make sure to select the appropriate identifier type in the spreadsheet properties on the right hand side.
* `Class column`: in case of multi-class standings, you must specify the **name** of the class to which this entry belongs.
* `Points columns`: each additional column is interpreted as a new race result and should contain the points that this entry scored for each race. If you are not using drop results, it is also possible to have a single column with the total of all previous results. For drop results support however, you must specify every race separately.

**DO NOT** include a "Total" column that sums the results, as this will be interpreted as a new race.

### Example spreadsheet

The following table shows an example of a valid Results spreadsheet for 3 drivers with 2 classes and 5 races. Note that the automatically generated column headers include up to 3 races, but you can add as many columns as desired. The value of these column headers are not relevant so you can leave them empty, or fill them as desired.

| CustomerId | Class | R1 | R2 | R3 |    |    |
|------------|-------|----|----|----|----|----|
| 1234       | LMP2  | 25 | 0  | 12 | 5  | 9  |
| 4567       | GT3   | 16 | 16 | 3  | 25 | 25 |
| 8274       | GT3   | 6  | 0  | 0  | 3  | 11 |


## Points System

If you wish to have live updates of the championship standings, then you must specify the points system to use via another spreadsheet. The points system controls how many points are awarded to each position and in each session.

The points system spreadsheet should have just 3 columns:
* `(Live)Position`: the position to award these points to.
* `Session name`: the name of the (sub)session to award these points for.
* `Points`: the amount of points to award.

The `Session name` column is necessary to ensure that only the desired subsessions award points. For example, you probably want to award points for the **Race** session, but not for the *Warmup* or *Qualification*. It is also used to support weekend with multiple race sessions, such as heat racing. You can award different amount of points in different heats by specifying a new system per session name.

**NOTE:** Make sure the session name is spelled *exactly* like the in-sim session name. For example, inputting "Heat1" without a space will not work if the actual session is named "Heat 1" with a space. The only exception is lower vs uppercase: this is ignored. The correct name is also visible in the Sessions List on the Timing Screen in ATVO. 

### Identifier: Live Position vs Position

The Identifier can be used to choose between using the "live" positions of each entry (which updates during the lap), or the static position which only updates at the end of each lap. 

### Example spreadsheet

The following table shows a valid Points System spreadsheet that awards points to the *Heat 1* and *Feature* heats.
| LivePosition | Session name | Points |
|--------------|--------------|--------|
| 1            | Heat 1       | 25     |
| 2            | Heat 1       | 16     |
| 3            | Heat 1       | 6      |
| 1            | Feature      | 35     |
| 2            | Feature      | 20     |
| 3            | Feature      | 10     |


## Rules

The Rules tab can be used to control various rules for point scoring, such as configuring bonus points or drop results.


### Misc Championship settings

The setting called `Add entries missing from the Results spreadsheet...` controls how to handle entries in your current race that do not show up in your Results spreadsheet. When enabled, these missing entries are added to the list of championship drivers and will score points in the current weekend (though they will start with 0 points). If disabled, these entries will not show up as championship drivers and will also not show up in any of the championship widgets.

### Bonus points and drop results
You can add the following rules and then configure their properties by selecting them in the list.

* `Bonus: fastest lap`: award bonus points to the entry with the fastest lap in the specified sessions.
* `Bonus: most laps in the lead`: award bonus points to the entry with the most laps in the lead in the specified sessions.
* `Bonus: one lap in the lead`: award bonus points to each entry with at least 1 lap in the lead in the specified sessions.
* `Requirement: minimum distance`: only award championship points to entries that have completed at least some percentage of the total race distance.
* `Drop results`: remove a specified number of the worst few results for each entry. See the Drop results section below for more details.

### Session names setting
Each rule has its own Session names setting where you can specify for which session(s) this rule applies. You can input multiple session names separated by a comma, such as: "Qualification, Race, Heat 1, Feature".
If the Session names setting is empty, the rule is applied to all sessions.

You can use Session names to award bonus points in specific sessions only, or prevent them from being applied in unwanted sessions. For example, to award a "Pole position bonus", you can use the "Fastest lap" bonus rule with Qualification as the session name, to award some points to the winner of the qualification session only.

### Drop results
To support drop results, it is *required* that you have added each race result separately in the Results spreadsheet. Each entry in the Results is a candidate for a drop result. 

When "Include current session" is enabled, the points in the current race weekend may also be dropped. 

When "Separate drops per subsession" is enabled, then each subsession or heat in the current weekend is considered *separately* as a candidate for a drop result. When it is disabled, only the total sum over all heats can be dropped at once.

**NOTE:** For drop results including the current session, it is almost always necessary to specify the Session names to which drop results should apply, by specifying only those sessions that are actually supposed to award points. If you do not specify session names, then it is likely that Practice, Warmup or Qualification sessions (usually awarding 0 points) are being dropped instead of actual results.
