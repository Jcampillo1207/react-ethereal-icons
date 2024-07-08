
# Ethereal Icons

Ethereal Icons is a React icon library that provides a collection of customizable and scalable SVG icons for modern web applications.

## Installation

Install the library using npm or yarn:

```bash
# Using npm
npm install ethereal-icons@latest

# Using yarn
yarn add ethereal-icons@latest
```

## Usage

### Importing Icons

You can import individual icons directly from the library:

```jsx
import React from 'react';
import { User, Apple } from 'ethereal-icons';

const App = () => (
  <div>
    <User size={48} color1="blue" color2="green" className="custom-class" />
    <Apple size={48} color1="red" color2="yellow" className="custom-class" />
  </div>
);

export default App;
```

### Universal Icon Component

The library also provides a universal icon component that allows you to dynamically render any icon by name:

```jsx
import React from 'react';
import { IconUniversal } from 'ethereal-icons';

const App = () => (
  <div>
    <IconUniversal name="User" size={48} color1="blue" color2="green" className="custom-class" />
    <IconUniversal name="Apple" size={48} color1="red" color2="yellow" className="custom-class" />
  </div>
);

export default App;
```

### Props

- `size`: Sets the width and height of the icon. Defaults to `24`.
- `color1`: The primary color of the icon. If not provided, defaults to the original color of the SVG.
- `color2`: The secondary color of the icon. If not provided, defaults to the original color of the SVG.
- `className`: Adds a custom class to the SVG element.

## License

This project is licensed under the ISC License. See the LICENSE file for more details.
