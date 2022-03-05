Hosted on https://andreibtc84.github.io/react-dice-app/

# Task 0

Create a Dice app.

It should have a button. On click, the button will roll a number between 1 and 6.

The number rolled should be displayed below it. Every time the button is clicked, it should add the number to the output, or log of clicks, in a new p tag going from most recent roll at the top to least recent at the bottom.

A button that says Roll 1d6 and has a log of the previous rolls beneath it

# Task 1

Make a Dice/Die component that has a button and takes the number of sides on a die (singular for dice) as a number.

When you click the button, it will calculate a random number; the number must be between 1 and the value of the dice (a roll).

Use this dice component in a parent component (e.g. App). Every time one of the dice buttons is clicked, add the result to state, and display each result as a p tag on the page (like the screenshot).

App with buttons representing dice, with numbers underneath the buttons representing rolls

# Task 1.1

If you haven't already, make the p tags with the rolls their own component (Output or RollLog would be good names).

# Task 2

Make a number input with a button, to add a new value of die.

When the user clicks the button, the Dice App should add another Dice component, that has the number of sides the user put in the input.

If there is no value in the input, do not add a Dice button.

Same image as above, with a form for adding an additional dice

# Task 3

When the user has clicked the "Add a die", clear the value in the form, so that the user does not have to backspace to add another value.

# Task 4

If a dice of that value already exists, do not show duplicate buttons.

# Task 5

Add a "Clear log" button at the top of the p tags with the rolls. If there are no rolls, do not show the button.

Form and buttons as above, with a Clear Log button
