# Ethereal Icons

Ethereal Icons is a React icon library that provides a collection of customizable and scalable SVG icons for modern web applications. Enhance your UI with beautiful, consistent, and highly customizable icons.

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
import React from "react";
import { User, Apple } from "ethereal-icons";

const App = () => (
  <div>
    <User size={48} color="blue" className="custom-class" />
    <Apple size={48} color1="red" color2="yellow" className="custom-class" />
  </div>
);

export default App;
```

### Universal Icon Component

The library also provides a universal icon component that allows you to dynamically render any icon by name:

```jsx
import React from "react";
import { Ethereal } from "ethereal-icons";

const App = () => (
  <div>
    <Ethereal name="User" size={48} color="blue" className="custom-class" />
    <Ethereal
      name="Apple"
      size={48}
      color1="red"
      color2="yellow"
      className="custom-class"
    />
  </div>
);

export default App;
```

## Using Types

Ethereal Icons also provides TypeScript support to ensure type safety and autocompletion in your code editor. The IconName type includes all the available icon names, allowing you to use them with confidence.

```jsx
import React from "react";
import { Ethereal, IconName } from "ethereal-icons";

const icons: IconName[] = ["User", "Apple", "AnotherIcon"];

const App = () => (
  <div>
    {icons.map((icon) => (
      <Ethereal key={icon} name={icon} size={48} className="custom-class" />
    ))}
  </div>
);

export default App;
```

### Props

- `size`: Sets the width and height of the icon. Defaults to `24`.
- `color`: The primary color of the icon. Defaults to the current color.
- `strokeWidth`: Sets the stroke width for icons with stroke properties. Defaults to `2`.
- `color1`: The first fill color for icons with two colors. Defaults to the original color of the SVG.
- `color2`: The second fill color for icons with two colors. Defaults to the original color of the SVG.
- `className`: Adds a custom class to the SVG element.

## Issues and Suggestions

If you encounter any issues or have suggestions for improvements, please reach out on Twitter: [@Chema12071](https://x.com/Chema12071)

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.

---

**Author**: José Campillo  
**Website**: [ethereal.dev](https://ethereal.dev)  
**Twitter**: [@Chema12071](https://x.com/Chema12071)  
**GitHub**: [josecampillo](https://github.com/josecampillo)
