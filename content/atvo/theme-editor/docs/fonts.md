---
sidebar_position: 5
---

# Fonts
The font of text shown on your overlay can be controlled using various font properties. The available properties can be found under the Font category and include:

* Font family (typeface)
* Size
* Color
* Weight (e.g. bold, semibold, thin)
* Italic
* Underline

Font properties can be set on the following levels of the so-called font inheritance chain:

* Theme font
* Widget font
* SubWidget font
* Label font

The font inheritance allows child elements to use the same font as their parent element without having to specify it. This is useful because most themes will use the same font throughout almost all elements on the overlay. For example, by default, every Wigdet, SubWidget and Label does not have any font properties set (they are all empty). Only the Theme itself has a specified font, and this cannot be empty. Because the Widget font is empty, it will use the next available font "up the chain" of inheritance.

If you change a font property of one particular item (for example: the Theme itself), every child item that does not specify a value for that property will inherit the value of its parent. The same is true for every grandchild, all the way down the chain.

If you specify a value for a certain font property in a Widget, SubWidget or Label, that value will no longer be inherited from the parent item. It will stay the same if you change the value of the parent item. To go back to the inherited value, simply remove the value in the property grid.


## Example
The main Theme item has specified the a font size of 12, and a font color of white. All Widgets, SubWidgets and Labels have not specified any value for the font size and color. Therefore, every Label in the overlay will use a fontsize of 12 with a white color.

Now, you change the font color of one single Label 'Label 1' to red. Only this one label will change its font color, all other labels in the theme will remain white.

Now, you change the font size on a particular SubWidget 'SubWidget 3' to 15. All Labels that are children of this SubWidget will change their font to size 15, as they are inheriting the value of their parent SubWidget. All labels in other SubWidgets remain unchanged (size 12).

Finally, you change the font size of the main Theme item to 20, and you change the font color to blue. The following will happen:
* The font size of all labels that are not children of 'SubWidget 3' will change to 20. The size of all labels in SubWidget 3 will remain 15, because this value is no longer inherited.
* The color of all labels except 'Label 1' will change to blue. Label 1 will remain red, because this value is no longer inherited.