<script>
  // @ts-nocheck
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import Manu from "./menu.svelte";

  let isScrolled = false;
  let duration = 200;
  let items = [
    {
      label: "test_0",
      link: "#",
    },
    {
      label: "test_2",
      link: "#",
    },
    {
      label: "test_3",
      link: "#",
    },

      {
      label: "test_4",
      link: "#",
    },
  ];

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    isScrolled = window.scrollY > 0;
  }

  //   $:console.log(isScrolled)
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<!-- svelte-ignore a11y-missing-attribute -->
<div
  class=" {isScrolled
    ? 'sticky top-3 left-0 right-0 mx-20  '
    : 'block  mx-3 my-6 '} transform ease-out duration-200"
>
  <div
    class="navbar bg-base-100 {isScrolled
      ? 'shadow-lg hover:shadow-md transform ease-linear duration-200  rounded-box'
      : ''}"
  >
    <!-- start -->
    <div class=" navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          onclick="my_modal_2.showModal()"
          class="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </div>
      </div>

      <a
        class="btn btn-ghost text-xl items-center justify-center lg:flex hidden"
        >logo</a
      >
    </div>

    <!-- center -->
    <div class="navbar-center hidden lg:flex">
      <!-- manu -->

      <Manu {items} />
    </div>

    <!-- end -->
    <div class="navbar-end">
      <a class="btn btn-ghost text-xl display lg:hidden">logo</a>
      <div class="items-center justify-center gap-2 mx-3 lg:flex hidden">
        <Icon class="text-4xl" icon="line-md:github" />
        <Icon class="text-4xl" icon="line-md:linkedin" />
        <Icon class="text-4xl" icon="line-md:instagram" />
      </div>
    </div>
  </div>
</div>

<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <Manu {items} flex={true} />
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
