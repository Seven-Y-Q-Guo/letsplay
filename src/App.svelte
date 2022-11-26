<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Course from './pages/Course.svelte';
  
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="profile">Profile</Link>
  </nav>
  <main>
    <Route path="/">
      <Course />
    </Route>
  </main>
</Router>

<style>
  
</style>
