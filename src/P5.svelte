<script>
    import { onMount, onDestroy } from "svelte"

    let context
    let canvas

    onMount(() => {
        import("p5").then(p5 => {
            let p5Constructor = null
            if (typeof p5 === "object" && Object.keys(p5).includes("default")) {
                p5Constructor = p5.default
            } else if (window && typeof window === "object" && Object.keys(window).includes("p5")) {
                p5Constructor = window.p5
            } else {
                throw new Error("Unable to find P5*js constructor")
            }

            context = new p5Constructor(p5js => {
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

<div bind:this={canvas} />
