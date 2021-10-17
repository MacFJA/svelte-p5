<script>
    import { onMount, onDestroy } from "svelte"

    let context;
    let canvas;

    onMount(() => {
        import('p5').then(_ => {
            context = new window.p5(p5js => {
                let keys = Object.keys($$props)
                keys.forEach(key => {
                    p5js[key] = () => $$props[key](p5js)
                })
            }, canvas)
        })
    })
    onDestroy(() => {
        if (context) {
            context.remove()
        }
    })
</script>

<div bind:this={canvas}></div>