# Available themes

There are 45 themes available in Volta, each of them being a beautiful, carefully picked gradient.

<ul class="themes-list">
  <li><a data-change-theme="volta">volta</a></li>
  <li><a data-change-theme="purple-bliss">purple-bliss</a></li>
  <li><a data-change-theme="love-couple">love-couple</a></li>
  <li><a data-change-theme="deep-space">deep-space</a></li>
  <li><a data-change-theme="from-beyond">from-beyond</a></li>
  <li><a data-change-theme="curiosity-blue">curiosity-blue</a></li>
  <li><a data-change-theme="orca">orca</a></li>
  <li><a data-change-theme="love-tonight">love-tonight</a></li>
  <li><a data-change-theme="love-and-liberty">love-and-liberty</a></li>
  <li><a data-change-theme="blue-lagoon">blue-lagoon</a></li>
  <li><a data-change-theme="grapefruit-sunset">grapefruit-sunset</a></li>
  <li><a data-change-theme="frost">frost</a></li>
  <li><a data-change-theme="mauve">mauve</a></li>
  <li><a data-change-theme="under-the-lake">under-the-lake</a></li>
  <li><a data-change-theme="vice-city">vice-city</a></li>
  <li><a data-change-theme="mild">mild</a></li>
  <li><a data-change-theme="nepal">nepal</a></li>
  <li><a data-change-theme="ibiza-sunset">ibiza-sunset</a></li>
  <li><a data-change-theme="sunset">sunset</a></li>
  <li><a data-change-theme="colored-lenses">colored-lenses</a></li>
  <li><a data-change-theme="disco">disco</a></li>
  <li><a data-change-theme="dania">dania</a></li>
  <li><a data-change-theme="50shades">50shades</a></li>
  <li><a data-change-theme="very-blue">very-blue</a></li>
  <li><a data-change-theme="dawn">dawn</a></li>
  <li><a data-change-theme="dusk">dusk</a></li>
  <li><a data-change-theme="dusk-2">dusk-2</a></li>
  <li><a data-change-theme="delhi">delhi</a></li>
  <li><a data-change-theme="cosmic-fusion">cosmic-fusion</a></li>
  <li><a data-change-theme="firewatch">firewatch</a></li>
  <li><a data-change-theme="lush">lush</a></li>
  <li><a data-change-theme="80s-purple">80s-purple</a></li>
  <li><a data-change-theme="royal">royal</a></li>
  <li><a data-change-theme="deep-sea-space">deep-sea-space</a></li>
  <li><a data-change-theme="solid-vault">solid-vault</a></li>
  <li><a data-change-theme="politics">politics</a></li>
  <li><a data-change-theme="transfile">transfile</a></li>
  <li><a data-change-theme="red-ocean">red-ocean</a></li>
  <li><a data-change-theme="pink-lime">pink-lime</a></li>
  <li><a data-change-theme="easy-med">easy-med</a></li>
  <li><a data-change-theme="cocoa-ice">cocoa-ice</a></li>
  <li><a data-change-theme="candy-ice">candy-ice</a></li>
  <li><a data-change-theme="dark-skies">dark-skies</a></li>
  <li><a data-change-theme="forest">forest</a></li>
  <li><a data-change-theme="miami-dolphins">miami-dolphins</a></li>
</ul>

<br/>

#### Setting a new default theme

Setting a new default theme is easy. First, choose a theme name from the list above. Let's say the theme is `purple-bliss`. To set the theme, all we need to do is change the `data-theme` attribute of the `body` tag:

~~~html
<body data-theme="purple-bliss">
~~~
{ .line-numbers}

Replace the theme name with the one you chose and it will be set once the stylesheet is loaded. Make sure you have the `resources/js/themes/base.js` script included to properly apply component theming.
