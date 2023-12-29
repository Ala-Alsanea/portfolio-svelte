<script>
  import Nav from "./lib/nav.svelte";
  import Preloader from "./lib/preloader.svelte";
  import Logo from "./assets/logo@2x.png";
</script>

<svelte:head>
  <title>cooming soon</title>
  <link rel="icon" type="image/png" href={Logo} />
</svelte:head>

<Preloader />
<main class="">
  <Nav />

  <section
    class="m- mt- flex flex-col content-center justify-center text-center"
  >
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </section>
  <section
    class="m-5 mt-52 flex flex-col content-center justify-center text-center"
  >
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </section>
  <section
    class="m-5 mt-52 flex flex-col content-center justify-center text-center"
  >
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </section>
  <section
    class="m-5 mt-52 flex flex-col content-center justify-center text-center"
  >
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </section>
</main>
