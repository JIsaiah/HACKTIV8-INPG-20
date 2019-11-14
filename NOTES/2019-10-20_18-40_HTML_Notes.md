*HyperText Markup Language Notes*
<h1>(WHEN VIEWING IN GITHUB, ALWAYS CHOOSE "Raw" TO PREVENT HTML FORMATTING!!)</h1>
<h6>(Best viewed in Visual Studio Code)</h6>
 
Always open with <html> and close with </html>.
Always end with a semicolon;
Common indentation practice is 1 'tab' or 2 'spaces'.
<title> always inside <head>, <title> is the name of the tab in the browser.
<head> is info that doesn't visually show.
<body> is the content that visually shows.
<div> is a universal tag, uses all styles. Can use when confused between <p>, <m>, etc.
<!DOCTYPE html> decides the file type.

**DEFINITIONS:**
-_Meta data:_ Important information that will be read by the computer/browser, usually for programmers to read.

-_Element:_ An entire single line of code.

-_Tag:_ The first part of the element in pointy brackets. (<a>, <html>, etc.)

-_Attribute:_ The part following the tag (href, src, type, etc.)

**STYLES:**
<i> italic text (Also can use <em>).

<h1> header (Number after 'h' can be changed to decrease size) [h1-h6].

<b> bold text (Also can use <strong>).

<s> adds a strikethrough.

<blockquote> adds padding to text.

<figure> adds padding to text.

<figcaption> to add a comment inside a <figure>.
    e.g.  <figure>
                <img src="myimage.jpg" alt="My Image">
                    <figcaption>My latest picture.</figcaption>
          </figure>

<p> to let code reader know the text is a paragraph. No affect on actual text.

<article> same as <div>, only describes contents for the code reader.

<script> place to drop in JavaScript code and will be shown on the page.

<br> adds blank spaces (Like hitting the 'enter' key).

<a href="Link to a website">Name of site</a>; to create hyperlink text. (a:anchor)

<!--"Comment"--> Comments for programmers that won't be shown on the final page.

**MEDIA:**
<img src="img.png" alt="Caption">; to display an image (Use './' to find images im compiler explorer).

<img src="img.png" alt="Caption" width="100px" height="200px">; to specify image size.

<video src="video.mp4" controls poster="StaticImage.jpg">; to show a video. (controls poster is the thumbnail shown).

<audio src="music.mp3" controls>; to add a playable audio controller.

<iframe src="Webpage link" height="300px" width="500px"></iframe>; to display a webpage within a webpage.

**BUTTONS:**
(Generic Button)
<button name="This is a button">Click Here</button>; to add a clickable button.
<button disabled name="This button doesn't work">Unclickable</button>; to add a grayed out button.

(Radio Button)
<input id="something-radio" type="radio" name="ThisButton" value="Something">; to add a radio button.

(Drop down list)
<input type="text" name="programming" list="programmingLangs"/>
<datalist id="programmingLangs">
  <select name="altProgrammingLangs">
  <option value="javascript">JavaScript</option>
  <option value="python">Python</option>
  <option value="cpp">C++</option>
  </select>
</datalist>

(Checkbox Buttons)
<input id="writing-checkbox" type="checkbox" name="skill" value="writing">

  <input type="submit" value="Submit"> (<--- Submission button.)

(Form Submission)
<form action="submissionsuccess.html" method="POST">
  <label>
    Name:
    <input type="text" name="name"/>
  </label>
  <input type="submit" value="send"/>
</form>

**LISTS:**
<ul> to make a list with no order, uses bullet points, adds padding. End with </ul>.
<li> put before every variable of the list to show. End with </li>.

<ol> to make a list with order, uses numbers instead of bullet points, adds padding. End with </ol>.
<li> put before every variable of the list to show. End with </li>.
    e.g. <ul>                                    <ol>
            <li>Alpha</li>                          <li>Alpha</li>
            <li>Beta</li>                           <li>Beta</li>
         </ul>                                   </ol>

**TABLES:**
<table> to make a table.
<thead> table header.
<tr> table row.
<th> title of the column.
<tbody> everything under <thead>.
<td> content of the body.
<tfoot> everything under <tbody>.

  e.g. <table>
         <thead>
           <tr>
             <th>Animal Name</th>
             <th>Required Meat (kg)</th>
           </tr>
         </thead>
           <tbody>
             <tr>
               <td>Lion</td>
               <td>60kg</td>
             </tr>
             <tr>
               <td>Tiger</td>
               <td>40kg</td>
             </tr>
            </body>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>100kg</td>
              </tr>
            </tfoot>
        </table>

**FORMS:**
<form> to set the form style.
<fieldset> set of category boxes.
<legend> title of the <fieldset>.
<label for="fullname">Full Name</label>; title of individual text box.
<input id="full-name" name="fullName" type="text">; text box to enter info, editable on browser.
  e.g. <form>
         <fieldset>
           <legend>Personal Information</legend>
             <p>
               <label for="full-name">Full Name</label>
               <input id="full-name" name="fullName" type="text">
             </p>
             <p>
               <label for="email">Email Address</label>
               <input id="email" name="email" type ="email">
             </p>
         </fieldset>
        </form> 



