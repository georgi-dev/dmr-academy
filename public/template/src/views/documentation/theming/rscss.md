# Reasonable System for CSS Stylesheet Structure

Any CSS greater than 1000 lines will get unwieldy. You'll eventually run into these common pitfalls:

- "What does this class mean?"
- "Is this class still being used?"
- "If I make a new class called green, will there be a clash?"

[RSCSS](https://rscss.io) is an attempt to make sense of all these. It is not a framework. It's simply a set of ideas to guide your process of building maintainable CSS for any modern website or application.

---

#### Styling CSS without losing your sanity

Volta uses the RSCSS principles for naming components and component class variations. Components will be named with one or multiple words, separated by a dash. Examples of components:

- A navbar (__.navbar__)
- A sidebar (__.sidebar__)
- A form element (__.form-control__)

---

#### Variants

Components may have variants. Elements may have variants, too. Classnames for variants will be prefixed by a dash (-).

- Dark Navbar (__.navbar.-dark__)
- Fixed Top Navbar (__.navbar.-fixed-top__)
- Dark Fixed Top Navbar (__.navbar.-dark.-fixed-top__)

---

#### Helpers

For general-purpose classes meant to override values, we name them beginning with an underscore. They are sometimes things that are tagged with !important. Use them very sparingly.

- ._margin-none { margin: 0; }
- ._margin-top-none { margin-top: 0; }
- ._text-muted { color: rgba(255, 255, 255, 0.6); }

We prefix classnames with an underscore. This will make it easy to differentiate them from modifiers defined in the component. Underscores also look a bit ugly which is an intentional side effect: using too many helpers should be discouraged.
