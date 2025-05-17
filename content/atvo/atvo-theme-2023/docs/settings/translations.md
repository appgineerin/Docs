---
sidebar_position: 13
---

# Translations

Translations allow customization of specific text elements in the theme, either to your own language or just to customize the text. Note that there are no "built in" translations to specific languages, you will have to do the translation yourself.

## Using and changing translations

You can find the list of translatable text elements in the Theme Settings - Translations tab. Each element has a name which provides the context for where that text is being used. You can change the text by updating the text under the `Translation` header for each item.

Most translations update in real time, with a few exception which may require a widget hide/show action or even a theme restart.

## Macros and dynamic elements

Some translations support macros, e.g. parts of the text that will be replaced with a dynamic value at runtime. For example: the `SessionState.Laps` translation supports showing the current lap and the total number of laps to complete such as "LAP 3/18". In the translation, you can use the macros `{0}`, `{1}`, etc. which will be replaced with these dynamic values. 

The number of macros that a translation supports is shown on the right side. Hover your mouse over the number of macros count to see a list of which macros are supported and what index you should use for them.

The `Example` column shows the macros with some default value replaced.

## Formatting and styling

The translation supports some limited styling options similar to HTML:
* Use `<b>text</b>` for <b>bold text</b>
* Use `<B>text</B>` for <b>extra bold / 'black' text</b>
* Use `<i>text</i>` for <i>italic text</i>
* Use `<u>text</u>` for <u>underlined text</u>

You can see the result of the formatting under the `Example` column. Make sure the tags are valid and closed to avoid a translation error.