<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Nav from "./lib/nav.svelte";

  let x = 0;
  let y = 0;

  /** @param {number} value */
  function yPlusAValue(value) {
    return value + y;
  }

  $: total = yPlusAValue(x);
</script>

<svelte:head>
  <title>hi</title>
</svelte:head>

<main class="">
  <div class="m-8">
    <Nav />
  </div>

  <section class="m-5 mt-52 flex flex-col content-center justify-center text-center">
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </section>
</main>
