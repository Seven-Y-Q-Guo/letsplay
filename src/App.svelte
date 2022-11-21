<script>
  import MarkdownIt from 'markdown-it';
  import { onMount } from 'svelte';
  import hljs from 'highlight.js';
  import { beforeUpdate, afterUpdate } from 'svelte';
  import monaco from './monaco.js';
  import doc from './doc.md?raw'

  let editor;
  let iframe;
  let isShowReport = false;
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return ''; // use external default escaping
    }
  });
  let string = md.render(doc);
  
  onMount(() => {
    // window.editor = monaco.editor;
    window.editor = monaco.editor.create(editor, {
      value: `function chain(input, fs) {
  // implement the "chain" function
}`,
      autoIndent: "brackets",
      formatOnType: !1,
      formatOnPaste: !1,
      fontFamily: "Menlo, Monaco, source-code-pro, Ubuntu Mono, DejaVu sans mono, Consolas, monospace",
      fontSize: 15,
      automaticLayout: !0,
      overviewRulerBorder: !1,
      hideCursorInOverviewRuler: !1,
      overviewRulerLanes: 2,
      lineNumbersMinChars: 0,
      scrollbar: {
        "useShadows": true,
        "verticalHasArrows": false,
        "horizontalHasArrows": false,
        "vertical": "visible",
        "horizontal": "visible",
        "verticalScrollbarSize": 8,
        "horizontalScrollbarSize": 8
      },
      language: 'javascript'
    });
	});
  
  const handleClick = () => {
    
    iframe.contentWindow.postMessage(JSON.stringify({
      js: window.editor.getValue()
    }), '*');
    
    setTimeout(() => {
      isShowReport = true;
    }, 1000);
  };
  
  
</script>

<main>
  <div class="container">
    <div class="panel markdown">{@html string}</div>
    <div class="panel editor" class:center="{isShowReport}" bind:this={editor}></div>
    <!-- {#if isShowReport} -->
      <div class="panel report" class:hide="{!isShowReport}">
        <iframe bind:this={iframe} src="./validate.html"></iframe>
      </div>
    <!-- {/if} -->
  </div>
  <div class="footer">
    <button on:click={handleClick} type="button" name="button">RUN</button>
  </div>
</main>

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
  
  .panel:first-child {
    width: calc(34% - 1px);
    height: calc(100vh - 48px);
    overflow-y: auto;
    padding: 12px;
    box-sizing: border-box;
  }
  
  .editor {
    width: calc(68% - 1px);
    height: calc(100vh - 48px);
    text-align: left;
    border-right: 1px solid #213040;
  }
  
  .editor.center {
    width: calc(34% - 1px);
  }
  
  .report {
    background-color: #16222e;
    width: calc(34% - 1px);
    /* transform: translateX(100%); */
  }
  
  .footer {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid;
    border-color: var(--pc-border_1);
    background-color: var(--pc-bg_2);
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
