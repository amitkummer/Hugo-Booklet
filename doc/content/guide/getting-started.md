---
title: 'Getting Started'
description: 'Example documentation guide.'
categories:
  - 'User Guides'
---

## Content Management

Posts should be written with Markdown only. They should contain the following front matter options:

- _title_: serves as the post's name across the site
- _date_: displayed in few places around the site, and also used for sorting posts display order.

### Categories and Tags

'Categories' is the only taxonomy which is displayed in the site. Each post in the list-page has two categories displayed.

### About Section

To enable the about section in the footer, simply create in the root content directory a `about.md` file with the text inside and nothing more.

After this an 'about' section in the footer should appear with your custom content.

## Project Commands

Running the theme's documentation dev-server:

```
npm run dev:doc
```

Running the theme's Hugo dev server:

```
npm run dev
```

Running the automatic formatting:

```
npm run format
```
