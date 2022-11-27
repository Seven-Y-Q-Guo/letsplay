<script>
  import Node from './Node.svelte';
  import courses from '../courses/map.js';
</script>

<div class="home">
  <div class="courses">
    <Node root={courses} />
  </div>
</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
  
  .courses {
    width: 900px;
    color: #d1d1d1;
    font-size: 24px;
  }
</style>
