# Description

First, here some hints on grading.

In this assignment you will practice using HTML, CSS, and JavaScript.

For this assignment you may not use any libraries, frameworks, code generators, or other code (HTML, CSS, or JS) you didn’t personally write. You should type your own code from scratch and use the APIs and functionality provided by the browser directly.

Your work will be checked in a current version of either Firefox or Chrome. If you want to be 100% sure it will work for the grader, get both browsers and test your work in each.

# Part A
Go to w3schools.com and read through the following tutorials:

* Learn HTML
* Learn CSS
Do exercise 3 for each chapter of the tutorials. You don’t need to submit any of your answers.

Create a web page, “animal.html”, that contains the following stuff:

* A link to the “Learn HTML” tutorial.
* A link to the “Learn CSS” tutorial.
* A link to a Wikipedia article about an animal.
* A picture of that animal, taken from the Wikipedia article.
* The name of the animal, as a header, with each letter being a different color.
* A table of the first eight powers of two in two columns (x and 2^x). There should be visible table cell borders, and space around the contents.

Things that can be accomplished with CSS should be done that way, using a single STYLE tag in the page’s HEAD.

# Part B
Go to W3schools and read through the “Learn JavaScript” tutorial chapters in the section JS HTML DOM, as well as the “JS Examples”.

Do exercise 3 for each chapter. You don’t need to submit any of your answers.

Create a web page, “calc.html”, that displays a working 4-function calculator.

See this page more detail on how a 4-function calculator should work.

Note that the above page and what is written here is all the information you will be provided about the expected functionality of your calculator. If something is unclear, you should:

1. Try calculators or calculator programs you have access to, like gnome-calculator, and see what they do.
2. If something is still unclear, make a design decision and document what you’ve decided to do.
3. If something is clearly specified (e.g. a single “+/=” button), you should conform to that specification.

Your page should:

* Use an external CSS file, with no CSS in the HTML page.
* Have CSS formatting to try to look somewhat like a calculator, with the buttons in a nice even grid, etc.
* Use an external JavaScript file, with no JavaScript in the HTML page, not even in onClick attributes.

Your JavaScript code should:

* Use anonymous function(s) and lexical scope to avoid polluting the global namespace with more than - at most - one new global name.
* Wait until the document is loaded before trying to bind button click events.
* Work in the current versions of Chrome and Firefox.
* Not use any external libraries.

Note: Testing web pages that include separate CSS / JS files works best through a web server. You can serve a directory as a web site by running the following command in that directory:

`python3 -m http.server`

Then you can visit http://localhost:8000/ to view your site.

# Part C
* Create index.html web page that links to your pages from parts A and B.
* Deploy your new site as hw02.yourdomain
  * Everything on your site should be served from your VPS.
* Push your web site code, new nginx config, and filled in status-hw02.txt file to github
* Submit your git repo here on Inkfish.
* Link from yourdomain to your new homework site.

Note: It is expected for this assignment that you will be copying a picture of an animal from Wikipedia. Provide attribution so as to follow good practices, but this won’t be considered plagiarism either way.
