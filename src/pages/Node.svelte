<script>
  import { useNavigate } from "svelte-navigator";
  import { onMount } from 'svelte';
  import { db } from '../db.js'; 
  
  export let root;
  export let title;
  export let indent = 0;
  export let path = '';
  
  const navigate = useNavigate();
  let isObject = typeof root === 'object';
  let statusClassname = '';
  
  onMount(async () => {
    if (!isObject) {
      const { status } = await db.practices.get({
        id: path
      }) || {};
      
      statusClassname = status === 0 ? 'success' : status === 1 ? 'error' : '';
    }
  });
</script>

{#if title}
  {#if isObject}
    <div path={path} style="margin-left: {indent}px; margin-bottom: {indent/3}px;">{title}</div>
  {:else}
    <div path={path} on:click="{() => navigate(`/${path}`)}" style="margin-left: {indent}px; margin-bottom: {indent/3}px;" class="link {statusClassname}">{title}</div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background-color: #425e7c;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 10px;
  }
  
  .success.link::before {
    content: '✓';
    background-color: #389622;
  }
  
  .error.link::before {
    content: '✘';
    background-color: #972929;
  }
</style>
