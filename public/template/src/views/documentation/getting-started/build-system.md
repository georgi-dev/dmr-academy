# Setting up the development environment

To setup our automated development environment we will need to follow a few trivial steps. At the moment, the build system has been tested with MacOS and Linux, with Windows support coming soon. The build system is based on [GulpJs](http://gulpjs.com), a popular worflow automation tool.

<br/>

##### 1. Install NodeJS
First of all, our Gulp build system will need to have `node` installed (we use the latest 7.10.0 version) together with `npm`. To install node, please follow the Official NodeJS Installation guide, found here [https://nodejs.org](https://nodejs.org/en/download/package-manager/).

<br/>

##### 2. Install CoffeeScript
Our Gulp setup is written in CoffeeScript, so we will need to have Gulp and CoffeeScript globally installed. Stylus and SASS are used for CSS processing. Run the following command in a terminal:

~~~sh
npm install -g gulp coffee-script stylus sass
~~~
{ .line-numbers}

<br/>

##### 3. Install Development Dependencies
Next, open the folder where you've extracted your Volta download in a terminal using `cd` (MacOS and Linux) or `dir` (Windows) and run the following command to install the required dependencies using npm:

~~~sh
cd path/to/volta

npm install
~~~
{ .line-numbers}

<br/>

##### 4. Start Gulp
Last, we need to start our Gulp automated build system. We can do so by simply running the following command:

~~~sh
gulp
~~~
{ .line-numbers}

##### 5. Open The Server in Browser
The `gulp` command above also creates a minimalistic Koa development server for you to develop your application in. Yes, it's that simple. Open the following URL in your browser:

~~~sh
http://localhost:3000
~~~
{ .line-numbers}

<br/>

### How does it work?
Whenever you modify a `.styl`, `.coffee`, `.css` or `.js` JavaScript file, the build system will automatically transpile and optimize the files you modify, making your workflow fast and easy. The build system also supports `.scss` and `.sass` files.

To process the project entirely, run the `gulp build` command.

Files can be processed individually by running the following commands:

- `gulp stylus`
- `gulp cssmin`
- `gulp coffee`
- `gulp jsmin`
- `gulp imagemin`
- `gulp sass`
- `gulp scss`
