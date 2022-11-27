<script>
  import { useNavigate } from "svelte-navigator";
  
  export let root;
  export let title;
  export let indent = 0;
  export let path = '';
  
  const navigate = useNavigate();
  let isObject = typeof root === 'object';
</script>

{#if title}
  {#if isObject}
    <div path={path} style="margin-left: {indent}px; margin-bottom: {indent/3}px;">{title}</div>
  {:else}
    <div path={path} on:click="{() => navigate(`/${path}`)}" style="margin-left: {indent}px; margin-bottom: {indent/3}px;" class="link">{title}</div>
  {/if}
{/if}

{#if isObject}
  {#each Object.keys(root) as key}
  	<svelte:self root={root[key]} title={key} key={key} indent={indent + 24} path={path ? path + '_' + key : key} />
  {/each}
{/if}

<style>
  .link {
    font-size: 14px;
    padding: 4px 12px 4px 40px;
    border: 1px solid #213040;
    width: 700px;
    position: relative;
  }
  
  .link:hover {
    color: #72a24d;
    cursor: pointer;
  }
  
  .link::before {
    content: '';
    display:block;
    width: 18px;
    height: 18px;
    background-color: #425e7c;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 10px;
  }
</style>
