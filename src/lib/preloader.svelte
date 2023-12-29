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
    class=" flex gap-5 items-center justify-center min-h-screen p-5 bg-neutral min-w-screen "
  >
    <!--  -->
    <div class="flex flex-col gap-3 lg:gap-10 justify-center items-center basis-1/2">
      <div class="lg:prose  lg:prose-xl">
        <h1 class="lg:text-gray-700 text-gray-700 text-center text-xl font-semibold ">
            {#each letters as letter }
                <span class=""> {letter}</span>
            {/each}
        </h1>
      </div>

      <div class="flex space-x-2 animate-pulse">
        <div class="w-3 h-3 bg-primary rounded-full"></div>
        <div class="w-3 h-3 bg-secondary rounded-full"></div>
        <div class="w-3 h-3 bg-primary rounded-full"></div>
      </div>
    </div>
    <!--  -->
       <div class="divider divider-secondary divider-horizontal my-36"></div> 

    <div class="basis-1/2">
      <img class="w-full hover:animate-pulse" src={Logo} alt="" srcset="" />
    </div>
    <!--  -->
  </div>
</main>

