# Svelte P5 wrapper

The small wrapper allow the usage of p5*js in Svelte

## Installation

```
npm install @macfja/svelte-p5
```

## Usage & Examples

```html
<script>
import P5 from "@macfja/svelte-p5"

function setup(p5) {
  p5.createCanvas(400, 400);
}

function draw(p5) {
  p5.background(220);
  p5.ellipse(50,50,80,80);
}
</script>

<P5 {setup} {draw} />
```

```html
<script>
import P5 from "@macfja/svelte-p5"

let y = 0;
let sketch = {
  setup: p5 => {
    p5.createCanvas(720, 400);
    p5.stroke(255); // Set line drawing color to white
    p5.frameRate(30);
  },
  draw: p5 => {
    p5.background(0); // Set the background to black
    y = y - 1;
    if (y < 0) {
      y = p5.height;
    }
    p5.line(0, y, p5.width, y);
  }
}
</script>

<P5 {...sketch} />
```

```html
<script>
import P5 from "@macfja/svelte-p5"

let y = 0;
let speed = 30;
let current;
let sketch = {
  setup: p5 => {
    p5.createCanvas(720, 400);
    p5.stroke(255); // Set line drawing color to white
  },
  draw: (p5) => {
		p5.frameRate(speed);
    p5.background(0); // Set the background to black
    y = y - 1;
    if (y < 0) {
      y = p5.height;
    }
    p5.line(0, y, p5.width, y);
		current = p5.frameRate()
  }
}
</script>

<style>
	label * {
		vertical-align: middle;
	}
</style>

<label>Speed (frame rate): <input type="range" min="1" max="100" bind:value="{speed}" /> {speed} (Current framerate: {Math.round((current + Number.EPSILON) * 100) / 100})</label>
<P5 {...sketch} />
```
([REPL for the 3 example above](https://svelte.dev/repl/5501d3af4d8e4c2caa17324c9724a8f8?version=3.29.4))

## Contributing

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Read more in the [Contributing file](CONTRIBUTING.md)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.