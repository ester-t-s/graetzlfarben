<script>
  const { 
    text = "", 
    x = 0, 
    y = 0, 
    width = 0, 
    lineHeight = 1.2, 
    fontSize = 16, 
    fontFamily = "Arial", 
    fontStyle = "", 
    fontFill = "#292929" 
  } = $props();

  import {onMount} from "svelte";

  let canvas;
  let context = $state(null);

  onMount(() => {
    const canvas = document.getElementById('myCanvas');
    context = canvas.getContext("2d");
  });

  const lines = $derived.by(() => {
    if (!context) return [];

    const result = [];
    context.font = `${fontSize}px ${fontFamily}`;
    const textBlocks = text.split("$");

    textBlocks.forEach((block, blockIdx) => {
      const words = block.split(" ");
      let currentLine = words[0];

      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const newLine = `${currentLine} ${word}`;
        const lineWidth = context.measureText(newLine).width;

        if (lineWidth > width) {
          result.push({
            text: currentLine,
            extraSpace: blockIdx > 0 && i === 1,
          });
          currentLine = word;
        } else {
          currentLine = newLine;
        }
      }

      result.push({
        text: currentLine,
        extraSpace: blockIdx > 0 && words.length === 1,
      });
      if (blockIdx < textBlocks.length - 1) {
        result.push({ text: "", extraSpace: false });
      }
    });

    return result;
  });
</script>

<text
  {x}
  {y}
  font-size={fontSize}
  font-family={fontFamily}
  font-style={fontStyle}
  fill={fontFill}
>
  {#each lines as line, i}
    <tspan
      {x}
      dy={i === 0 ? 0 : (line.extraSpace ? 2 : 1) * lineHeight * fontSize}
      >{line.text}</tspan
    >
  {/each}
</text>
<canvas bind:this={canvas} style="display: none;" ></canvas>
