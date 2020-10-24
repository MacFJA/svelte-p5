<script>
    import p5 from "p5"
    import { onMount, onDestroy } from "svelte"

    let context;
    let canvas;

    onMount(() => {
        context = new p5(p5js => {
            let keys = Object.keys($$props)
            keys.forEach(key => {
                p5js[key] = () => $$props[key](p5js)
            })
        }, canvas)
    })
    onDestroy(() => {
        context.remove()
    })
</script>

<div bind:this={canvas}></div>