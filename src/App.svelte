<script>
  import { Router, Route, Link } from "svelte-navigator";

  import Course from './pages/Course.svelte';
  import Home from './pages/Home.svelte';
  
</script>

<Router basepath={__APP_ENV__.basepath}>
  <main>
    <Route path=":courseId" let:params>
      <Course id="{params.courseId}" />
    </Route>
    <Route path="/" >
      <Home />
    </Route>
  </main>
</Router>
