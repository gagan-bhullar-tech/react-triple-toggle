# react-triple-toggle

[![Pipeline](https://github.com/gagan-bhullar-tech/react-triple-toggle/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/gagan-bhullar-tech/react-triple-toggle/actions/workflows/npm-publish.yml)


A simple, accessible React component for a three-way toggle switch. Useful for settings, filters, or any UI where you need to select one of three options.

## Features
- Three toggle options (left, center, right)
- Customizable labels and values
- Accessible markup
- CSS styling included

## Installation

```bash
npm install react-triple-toggle
```

## Usage

```tsx
import React from 'react';
import TripleToggle from 'react-triple-toggle';
import 'react-triple-toggle/dist/react-triple-toggle.css';

function App() {
  return (
    <TripleToggle
      id="my-toggle"
      left={{ label: 'Low', value: 'low' }}
      center={{ label: 'Medium', value: 'medium' }}
      right={{ label: 'High', value: 'high' }}
    />
  );
}
```

## Props

| Prop   | Type   | Description |
|--------|--------|-------------|
| id     | string | Optional. Used to prefix input IDs for accessibility |
| left   | object | `{ label: string, value: string }` |
| center | object | `{ label: string, value: string }` |
| right  | object | `{ label: string, value: string }` |

## Styling

The component comes with a default CSS file. You can override styles by targeting the `.container` class and input/label elements.

## License

MIT
