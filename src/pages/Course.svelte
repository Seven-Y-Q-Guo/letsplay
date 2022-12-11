<script>
  import { onMount } from 'svelte';
  import { get } from 'lodash';
  import { Link } from "svelte-navigator";

  import md from '../lib/markdown.js';
  import monaco, { option } from '../lib/monaco.js';
  import map from '../courses/map.js';
  import { db } from '../db.js'; 
  
  export let id;

  let editor;
  let iframe;
  let isShowReport = false;
  let string = '';
  let ut = '';

  onMount(async () => {
    const { js, readme, ut: unitTest } = await get(map, id.split('_').join('.'))();
    const { content } = await db.practices.get({
      id
    }) || {};
    
    string = md.render(readme);
    ut = unitTest;
    window.editor = monaco.editor.create(editor, {
      value: content || js,
      ...option
    });
    
    window.editor.getModel().onDidChangeContent(async () => {
      if (content) {
        await db.practices.put({
          id,
          content: window.editor.getValue(),
          status: 2
        });
      } else {
        await db.practices.add({
          id,
          content: window.editor.getValue(),
          status: 2
        });
      }
    });
    
    window.addEventListener('message', async (e) => {
      if (content) {
        if (e.data === 'success') {
          await db.practices.put({
            id,
            content: window.editor.getValue(),
            status: 0
          });
        } else {
          await db.practices.put({
            id,
            content: window.editor.getValue(),
            status: 1
          });
        }
      } else {
        await db.practices.add({
          id,
          content: window.editor.getValue(),
          status: 2
        });
      }
    });
    
	});
  
  const handleClick = () => {
    iframe.contentWindow.postMessage(JSON.stringify({
      js: window.editor.getValue(),
      ut
    }), '*');
    
    setTimeout(() => {
      isShowReport = true;
    }, 1000);
  };
  
  
</script>

<div class="course">
  <div class="container">
    <div class="panel markdown" class:left="{isShowReport}">{@html string}</div>
    <div class="panel editor" class:center="{isShowReport}" bind:this={editor}></div>
    <div class="panel report" class:hide="{!isShowReport}">
      <iframe bind:this={iframe} src="./validate.html"></iframe>
    </div>
  </div>
  <div class="footer">
    <Link to="/">Courses</Link>
    <div class="editor-actions"><button on:click={handleClick} type="button" name="button">RUN</button></div>
  </div>
</div>

<style>
  .container {
    display: flex;
  }
  
  .hide {
    display: none;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .markdown {
    width: calc(50% - 1px);
    height: calc(100vh - 48px);
    overflow-y: auto;
    padding: 12px;
    box-sizing: border-box;
  }
  
  .editor {
    width: calc(50% - 1px);
    height: calc(100vh - 48px);
    text-align: left;
    border-right: 1px solid #213040;
  }
  
  .editor.center {
    width: calc(34% - 1px);
  }
  
  .markdown.left {
    width: calc(34% - 1px);
  }
  
  .report {
    background-color: #16222e;
    width: calc(34% - 1px);
  }
  
  .panel {
    transition: width .2s;
  }
  
  .footer {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-top: 1px solid;
    border-color: var(--pc-border_1);
    background-color: var(--pc-bg_2);
    box-sizing: border-box;
  }
  
  .editor-actions {
    width: 50vw;
  }
  
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 24px;
    white-space: nowrap;
    cursor: pointer;
    color: var(--el-button-text-color);
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    font-weight: var(--el-button-font-weight);
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    background-color: var(--el-button-bg-color);
    border: var(--el-border);
    border-color: var(--el-button-border-color);
    padding: 13px 13px;
    font-size: 12px;
    border-radius: var(--el-border-radius-base);
    --el-button-text-color: var(--el-color-white);
    --el-button-bg-color: var(--el-color-success);
    --el-button-border-color: var(--el-color-success);
    --el-button-outline-color: var(--el-color-success-light-5);
    --el-button-active-color: var(--el-color-success-dark-2);
    --el-button-hover-text-color: var(--el-color-white);
    --el-button-hover-link-text-color: var(--el-color-success-light-5);
    --el-button-hover-bg-color: var(--el-color-success-light-3);
    --el-button-hover-border-color: var(--el-color-success-light-3);
    --el-button-active-bg-color: var(--el-color-success-dark-2);
    --el-button-active-border-color: var(--el-color-success-dark-2);
    --el-button-disabled-text-color: var(--el-color-white);
    --el-button-disabled-bg-color: var(--el-color-success-light-5);
    --el-button-disabled-border-color: var(--el-color-success-light-5);
  }
</style>
