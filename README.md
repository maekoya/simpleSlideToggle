# SimpleSlideToggle
It is jquery like slide `slideToggle`, `slideUp`, `slideDown`.

## Installation
### Install via npm:
```shell
npm install XXXX
```

### and include in project:
```js
import { slideUp, slideDown, slideToggle } from 'simple-slide-toggle'
```

## Usage
### simple use
```js
const $target = document.getElementById('slide-target')

slideToggle($target, 500)
```

### with HTML
Supports dynamically changing WAI-ARIA attributes `aria-hidden`, `aria-expanded`. You need to write that attribute in HTML.
```html
<button
  id="slide-trigger">Slide Trigger</button>
<div
  id="slide-target"
  aria-hidden="true"
  aria-expanded="false">
  Slide content
</div>
```

```js
const $trigger = document.getElementById('slide-trigger')
const $target = document.getElementById('slide-target')

$trigger.addEventListener('click', () => {
  slideToggle($target, 500)
})
```

## Parameters
```js
slideToggle(target, duration)
```
- **target** :HTMLElement  
A Slide target element.
- **duration:** :number (default: 400)  
A number determining how long the animation will run.
