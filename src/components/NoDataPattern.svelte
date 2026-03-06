<script>
  import { categories } from "$lib/settings.js";
  // pattern is userSpaceOnUse with fixed spacing and -45deg rotation
  const spacing = 5;
  const stroke = categories.nodata.color || "#666";
  const strokeWidth = 1;
</script>

<svg class="absolute w-0 h-0" aria-hidden="true">
  <defs>
    <pattern
      id="nodataPattern"
      patternUnits="userSpaceOnUse"
      width={spacing}
      height={spacing}
      patternTransform="rotate(-45)"
    >
      <rect width={spacing} height={spacing} fill="#ffffff" />
      <path
        d={`M0 ${spacing / 2} L ${spacing} ${spacing / 2}`}
        {stroke}
        stroke-width={strokeWidth}
      />
    </pattern>
  </defs>
</svg>
