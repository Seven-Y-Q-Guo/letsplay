import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import theme from './theme.json';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

monaco.editor.defineTheme('blue', theme);
monaco.editor.setTheme('blue');

export default monaco;

export const option = {
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
};
