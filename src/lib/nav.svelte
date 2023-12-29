<script>
  // @ts-nocheck

  import Manu from "./menu.svelte";

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
  ];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<!-- svelte-ignore a11y-missing-attribute -->
<div class="navbar bg-base-100 shadow-2xl hover:shadow-lg rounded-box">
  <!-- start -->
  <div class="navbar-start">
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

    <a class="btn btn-ghost text-xl">logo</a>
  </div>
  <!-- center -->
  <div class="navbar-center hidden lg:flex">
    <!-- manu -->
    <Manu {items} />
  </div>

  <!-- end -->
  <div class="navbar-end">
    <!-- <label class="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        value="synthwave"
        class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
      />
      <svg
        class="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><circle cx="12" cy="12" r="5" /><path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        /></svg
      >
      <svg
        class="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
      >
    </label> -->
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
