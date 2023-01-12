<script>
  import Goal from "./lib/Goal.svelte";

  let goal;
</script>

<main>
  <input bind:value={goal}/>
  <Goal {goal} />
</main>
