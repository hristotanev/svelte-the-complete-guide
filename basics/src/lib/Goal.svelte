<script>
  export let goal;
</script>

<style>
  .goal {
    color: red;
  }
</style>

<h1 class="goal" class:goal={(/\!+/).test(goal)}>{goal}</h1>
