# File Structure
First of all, let's analyze the file and folder structure of Volta, what each file does and why we need it. __We love being extremely organized__, that's why we're following the standards for file and folder organization in web applications.

<ul class="folder-tree-view">
  <li class="folder disabled">
    <span><i class="fa fa-folder"></i> build</span>
    <span>Compiled Volta views and resources</span>
  </li>
  <li class="folder disabled">
    <span><i class="fa fa-folder"></i> config</span>
    <span>Application build configuration</span>
  </li>
  <li class="folder disabled">
    <span><i class="fa fa-folder"></i> dist</span>
    <span>Compiled and minified Volta views and resources</span>
  </li>
  <li class="folder disabled">
    <span><i class="fa fa-folder"></i> helpers</span>
    <span>Application helper functions</span>
  </li>
  <li class="folder open">
    <span><i class="fa fa-folder-open"></i> src</span>
    <span>Source code for developers</span>
    <ul>
      <li class="folder disabled">
        <span><i class="fa fa-folder"></i> bundles</span>
        <span>
          Unprocessed asset bundle files.
        </span>
      </li>
      <li class="folder open">
        <span><i class="fa fa-folder-open"></i> resources</span>
        <span>
          All the assets you should add to your website.
        </span>
        <ul>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> css</span>
            <span>Stylesheets related to volta</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> fonts</span>
            <span>Font files in various formats</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> icon</span>
            <span>Favicons generated with <a class="text-gray" href="http://www.favicon-generator.org">favicon-generator.org</a></span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> img</span>
            <span>Image files related to Volta</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> js</span>
            <span>Scripts related to volta</span>
          </li>
        </ul>
      </li>
      <li class="folder disabled">
        <span><i class="fa fa-folder"></i> vendors</span>
        <span>
          External plugins used in Volta.
        </span>
      </li>
      <li class="folder open">
        <span><i class="fa fa-folder-open"></i> views</span>
        <span>
          Pug mixins, views and layout files.
        </span>
        <ul>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> dashboard</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> documentation</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> helpers</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> home</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> layouts</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> mixins</span>
          </li>
          <li class="folder disabled">
            <span><i class="fa fa-folder"></i> partials</span>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li class="folder disabled">
    <span><i class="fa fa-folder"></i> tasks</span>
    <span>Gulp task module files</span>
  </li>
  <li class="file">
    <span><i class="fa fa-file"></i> changelog.md</span>
    <span>Changelog for every version of volta</span>
  </li>
  <li class="file">
    <span><i class="fa fa-file"></i> gulpfile.js</span>
    <span>Gulp automation setup</span>
  </li>
  <li class="file">
    <span><i class="fa fa-file"></i> readme.md</span>
  </li>
</ul>

<!-- Your template might be already using the `bootstrap` or `foundation` CSS Frameworks. Volta works well with any front end framework, but we've included the bootstrap files which you can use in your application.

In the `js` folder, the following scripts are *optional*, unless you want to use the features they provide: `mousewheel` for mousewheel bindings, `vimeo` and `youtube` for embedding videos. Be careful if you're choosing not to include them, because we'll be using them for the purpose of this tutorial.

Volta also comes with a great collection of fonts, converted properly to be available in any browser. Among these you can also find icon fonts such as __Font Awesome Icons__, __Pixeden Stroke Icons__ and __Material Design Icons__ for which you have the CSS files in the `icons` folder. -->
