<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<script>
  export let items = [
    {
      label: "test",
      link: "",
    },
  ];

  export let flex = false;

  console.log(flex)
</script>

<ul class="menu menu-horizontal px-1 flex content-center" class:flex-col={flex} >
  {#each items as item}
    <li class="mx-2 " >
      <a href={item.link}>
        {item.label}
      </a>
    </li>
  {/each}
</ul>
