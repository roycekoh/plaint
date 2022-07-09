# Plaint

The program functions by allowing the user to select two photographs, a source photo and a target photo, select individual pixels on both of the photos, and calculate the paint colors that need to be added to the source color to achieve the target color. The algorithm analyzes and compares the individual rgb values to determine the quantities of white, blue, and the primary colors that need to be added as well as their relative quantities. The user is able to then 'store' colors within their own account, saving and retrieving them for another painting session.

This software acts as the intersection between my growing passion for painting and desire to learn and develop an end-to-end software program from scratch with an emphasis on working with databases (MySQL for storing and retrieving login information), React (frontend customer-facing interface), and APIs to connect and communicate between components of the program. The end goal is to port this to iOS and Android and to allow users to take photos of their painting to more accurately and intuitively select their source and target colors, rather than selecting and uploading photos.

# Software

Plaint is bootstrapped using react (yarn) to initialize all of the style components and pages, and REST APIs were developed to and used in conjunction with a mySQL database to initialize the signup and login process, storing user credentials and colors.

Through experimentation and trialed comparisons across the color spectrum, an algorithm was developed that compares the rgb values of the source and target colors to determine what quantities of specific colors need to be added. What made this step exceedingly difficult was the fact that rgb values behave additively (white = (255, 255, 255) and increasing the 'blue' value in a color isn't equivalent to adding blue paint. Similarly, adding identical quantities of blue and yellow can have significantly different magnitudes of effect on a color (blue will bring about a more significant, darker change). Furthermore, almost always, more than a single paint is necessary to achieve the target color (up to 4) and thus it is difficult to guage the quantities each must be added in. Thus it was determined that the paint to be added is split into two components, black and white, and blue, red, and yellow. Another challenge was that rgb values don't take yellow as a source, but the primary colors are the most commonly used paint colors and thus yellow is the preferred choice over green.

All in all, the developed algorithm takes into account all of these challenges and attempts to accurately determine the quantity of white/black to be added, as well as the amount of blue/red/yellow to be added.

# Objective

The true objective of this endeavor was to learn the fundamentals behind full-stack development to better comprehend how each of the components communicate and cooperate with one another, while also solving one of the most frustrating yet fascinating challenges I've encountered while painting.
