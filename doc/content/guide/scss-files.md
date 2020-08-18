---
title: 'Theme SCSS files reference'
description: 'Short explanation about each scss file and the overall design.'
categories:
  - 'User Guides'
---

The theme's style is written entirely with just SCSS which is then transpiled to CSS using Webpack.

All files try to follow SMACSS idioms and are thus seperated into 5 folders:

- **base** - global settings.
- **layout** - style that controls the site layout.
- **mixins** - useful mixins.
- **modules** - site components for example the navbar, footer, header.
- **theme** - files that are used to create a system of predefined values.

## SCSS Files Reference

### Layouts

#### container

Virtual selector that is extended in the site's navbar, content and header sections to position their child elements.

#### pagewrapper

Flexbox that is used for the entire page and makes the header and footer float up and down respectively while the page content flex-grows's to min-height of 850px~.

### Mixins

#### responsive-block

Stolen from Lander. Used for custom behavior that depends on the viewport size.

### Modules

#### sectionview and section

Homepage list of sections style. Sectionview is a wrapper for section. (idiomatic)?

#### post-list

List page style for everything including list of posts of current section.

#### article

Single page style.

#### footer

Style for site footer.

#### header

Style for site header.

### Theme

#### headings

Default font sizes of headings.

#### italics

Collection of font oblique values.

#### screens

Breakpoints and container width for mobile, tablet and desktop.

#### spaces

Collection of font margin sizes.

#### type

Collection of font sizes. (Stolen from Lander?)

#### weights

Collection of font weights.
