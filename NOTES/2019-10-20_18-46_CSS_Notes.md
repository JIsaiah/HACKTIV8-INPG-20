*Cascading Style Sheet Notes*
<h1>(WHEN VIEWING IN GITHUB, ALWAYS CHOOSE "Raw" TO PREVENT CSS FORMATTING!!)</h1>
<h6>(Best viewed in Visual Studio Code)</h6>

Always open and close a style with {}.
Always end a single command with a semicolon;
Common indentation practice is to 'enter' after every individual command with the {} on their own lines.

**Integrating CSS into HTML:**
-Embed into the HTML using <style> in the <head>.
-Inserting the metadata into an HTML head (Linking to a separate file).
-Inside HTML tags/elements using <style>.
-Importing the CSS file using @import.

_To link a CSS file to HTML:_
<link href="mystyle.css" rel="stylesheet" type="text/css" media="screen">

_To add CSS style to individual elements of HTML:_
<h1 style="font-weight:100; color:#ff0486;">

**DEFINITIONS:**
-_The Box Model:_ All elements exist within their own boxes on a webpage that separate them from other elements.

-_./:_ Search the same folder.

-_../:_ Search the entire PC.

-_#:_ 'id'.

-_id:_ Used to identify one element (More specific than class).

-_.:_ 'class'.

-_class:_ Used to identify more than one element (Broader than id).

**STYLES:**
_To apply the style to every element of HTML that has the id 'name' in it._
#name{
    color:#594894;
}

_To apply the style to every element of HTML that has the class 'h1' in it._
.h1{
    font-size:73px;
}

_When you want to style an element inside and element._
.element 1 element 2{}

_To move an element in the specified direction. scale = change size; skew = rotate_
transform:scale(1,2) skew(-15deg);

_To change transparency of the element._
opacity: 1;

_Adds a border around the element._
border: 3px solid white;
  _Adds curves to the borders corners._
  border-radius: 15px;

_Adds space inbetween elements in the directions stated above. Directions MUST be listed in CLOCKWISE order or else the computer wont understand._
padding(-top,-right,-bottom,-left): 15px;

_Adds margins to the element/page. Directions MUST be listed in CLOCKWISE order or else the computer wont understand._
margin(-top,-right,-bottom-left): 60px;

_Controls what happens to content that overflows out of its box._
overflow: hidden/scroll/visible;

_Controls what elements are visible on the browser._
visibility: visible/hidden;

_To add comments for programmers that won't be shown on the final page._
/* comments */

_Can be applied to any attribute and will override any style. Put it after the command and before the semicolon._
!important

**FONTS:**
_Changes the style of the text._
font-style: italic;

_Changes the thickness or thinness of the text._
font-weight: bold;

_Displays all the text in a small-caps font._
font-variant: small-caps;

_Changes the fonts size._
font-size: 42px;

_Changes the font used by the text._
font-family: Helvetica;


