This is a drop-down menu function module that uses javascript.

---------------------------------------------------------------------------------------------------
How to use =>

Uses one function called dropDownMenu().
That takes 2 arguments, first one being the name of the button element. The second being the name of the menu element.

---------------------------------------------------------------------------------------------------
Example => 

(html)
<h1 id='btnElement'>Menu</h1>
<div id='menuElement'>
    <ul>
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
    </ul>
</div>

(javascript)
dropDownMenu('btnElement', 'menuElement');

---------------------------------------------------------------------------------------------------
Notes =>

1. Funtion only selects elements with id=''.
2. Automatically hides menu element so you don't need to hide it in css or add additional js code.
3. Nothing important, just added because 3 looks better than 2.