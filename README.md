![](https://img.shields.io/badge/Microverse-blueviolet)

# To Do List Structure

> Solo programming project for module 2 week 2 of the Microverse Program.

## Live Demo

[Live Demo Link](https://yersel500.github.io/to-do-list/dist)

![Desktop Version](https://image.prntscr.com/image/-Q5uLtyzSy-NR1zYpAy2nA.png)
![Mobile Version](https://image.prntscr.com/image/6LxVt0m8TzeeZgwKlktsyg.png)

"To Do List" is a minimalist project that displays a list of task and allows you to add and remove task from that list.

### First requirements:

Project requirements 1

    Implement the structure of To Do List project

Basic UI

- Set up a new project with webpack that is based on the webpack exercise you have already completed.
- Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (div or ul element). The index.html file must be set as a template using the HTML Webpack Plugin.
- Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
  - description [string].
  - completed [bool].
  - index: [number].
- Write a function to iterate over the tasks array and populate an HTML list item element for each task.
  On page load render the dynamically created list of tasks in the dedicated placeholder. The list should appear in order of the index values for each task.
- Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.

TIP: If you separated the code in multiple files and you you have the following issues with the linter: complaining about having multiple classes at the same file, or an unused variables, disable the linter check for that rule in the file with a /_ eslint-disable rule-you-want-to-disable _/ .

Check the ESLint documentation for more details on how.

> To setup the project on your machine:

## Getting Started

Clone the repository and setup the linter

## Prerequisites

- npm ( Node Package Manager )
- git and Github Account

### Setup

To get a local copy up and running follow these simple example steps.

- Open terminal
- Change the directory you want put the repo
- Then run
  i. Run git clone git@github.com:mengiefen/awesome-books.git
  ii. cd repo-name/

### Install

- **Webhint** linter

  `npm install --save-dev hint@6.x`

- **Stylelint** linter

  `npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x`

- **ESLint** linter

  `npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x`

### Run tests

- **Webhint** linter -`npx hint .` on the root of your directory of your project.
- **Stylelint** linter
  - `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
- **ESLint** linter
  - `npx eslint .` on the root of your directory of your project.

### Second requirements:

## Built With

- HTML
- CSS
- Javascript
- Webpack
- Love

## Authors

???? **Yersel Hurtado**

- GitHub: [@yersel500](https://github.com/yersel500/)
- Twitter: [@YerselHurtado](https://twitter.com/YerselHurtado)
- LinkedIn: [Yersel Hurtado](https://www.linkedin.com/in/yersel-hurtado/)

## ???? Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ?????? if you like this project!

## Acknowledgments

- A big thank you to Microverse, for providing me the knowledge and tools to finish this project.
- An even bigger thank you to all my coding partners who helped me get here.

## ???? License

## Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

Disclaimer: This is a human-readable summary of (and not a substitute for) the [license](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

You are free to:

    Share ??? copy and redistribute the material in any medium or format
    Adapt ??? remix, transform, and build upon the material

    The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

    Attribution ??? You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

    NonCommercial ??? You may not use the material for commercial purposes.

    No additional restrictions ??? You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

Notices:

    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.
