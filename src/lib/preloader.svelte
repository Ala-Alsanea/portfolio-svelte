<script>
  import Logo from "./../assets/logo@2x.png";


  function stopScrolling()
  {
    document.body.style.overflow = 'hidden';
  }

  stopScrolling()

  let letters = "Coming Soon";

</script>

<main class="sticky h-full w-full z-10 ">
  <div
    class=" flex gap-5 items-center justify-center min-h-screen p-5 bg-neutral min-w-screen"
  >
    <!--  -->
    <div class="flex flex-col gap-10 justify-center items-center basis-1/2">
      <div class="prose lg:prose-xl">
        <h1 class="text-gray-700">
            {#each letters as letter }
                <span class="transform ease-out duration-200  hover:skew-y-12 skew-y-0"> {letter}</span>
            {/each}
        </h1>
      </div>

      <div class="flex space-x-2 animate-pulse">
        <div class="w-3 h-3 bg-gray-700 rounded-full"></div>
        <div class="w-3 h-3 bg-gray-700 rounded-full"></div>
        <div class="w-3 h-3 bg-gray-700 rounded-full"></div>
      </div>
    </div>
    <!--  -->
    <div class="basis-1/2">
      <img class="w-full hover:animate-pulse" src={Logo} alt="" srcset="" />
    </div>
    <!--  -->
  </div>
</main>

