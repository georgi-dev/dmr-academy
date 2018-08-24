# What do I need to know?
While __Volta__ is meant for both beginners and professionals, we recommend having basic HTML and CSS knowledge before proceeding.

##### Where can I learn that?
There are plenty of websites where you can learn HTML, CSS and JavaScript. The most popular ones are [CodeCademy](http://codecademy.com), [CodeSchool](http://codeschool.com) and the classic [W3Schools](http://w3schools.com).

---

##### What do I need to write HTML?
Besides knowing basic HTML, you also need to use a __text editor__. You might do just fine with your Operating System's default text editor, but having a text editor which highlights your code and points out when you're making mistakes is much better. For that purpose, we recommend using [Atom by GitHub](http://atom.io) or [Sublime Text](http://sublimetext.com).


<!--
#### Short introduction to HTML
---
If you're just starting to learn how to create websites, here's a short introduction to things you need to know when integrating a plugin into your own website.

Inside any project folder, we need to have an ```index.html``` file. Whenever a visitor enters your website, the browser will initially serve the index file.

HTML is a markup language which uses tags. You can think of tags as labels which have a start point and an end point (except some special tags which have only a start point). Tags come in pairs: an opening tag and a closing tag. Every tag is opened using ```<tagname>``` and closed using ```</tagname>```. In this example *tagname* is just a placeholder. Each and every tag means something specific. For example a ```<p></p>``` tag designates a paragraph. You can write text inside of tags and also write tags inside of tags.

~~~ html
<p>Hello world!</p>
~~~

The structure of any webpage, including our ```index.html``` page, is the following:

~~~ html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My webpage</title>
  </head>
  <body>
  </body>
</html>
~~~
{ .line-numbers }

#### Stylesheets

Stylesheets are used to design how a page looks like. Whenever you want to add a new stylesheet to your webpage, you use the link tag and point the path to that file. Link tags always go inside the ```<head>``` tag as follows:

~~~ html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My webpage</title>
    <link href="assets/css/style.css" rel="stylesheet">
  </head>
  <body>
  </body>
</html>
~~~
{ .line-numbers }

The ```style.css``` file is found in ```assets/css```. The rel tag is used to point out the relation to the style.css file. This means that the webpage will use the style.css file as a stylesheet. The ```<link>``` tag is a special tag which doesn't need to be closed.

#### Scripts

Scripts are used to add custom functionality to your page. Whenever you want to add a new script to your webpage, you use the script tag and point the path to the script file. Script tags always go at the bottom of the page, right before the ```<body>``` tag closes, as follows:

~~~ html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="assets/css/style.css" rel="stylesheet">
  </head>
  <body>
    <script href="assets/js/script.js" type="text/javascript"></script>
  </body>
</html>
~~~
{ .line-numbers }

The ```script.js``` file is found in ```assets/js```. The webpage will run the script.css file as soon as it's loaded. We put the ```<script>``` tags at the end of the page to improve page load speed.

You can also write JavaScript directly inside a ```<script>``` tag, as follows:

~~~ html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="assets/css/style.css" rel="stylesheet">
  </head>
  <body>
    <script>
      alert("Hello world!");
    </script>
  </body>
</html>
~~~
-->
