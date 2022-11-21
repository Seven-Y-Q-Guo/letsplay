// window.parent.postMessage('update', '*');
window.addEventListener('message', function (e) {
  const { js } = JSON.parse(e.data);
  
  document.open();
  document.write(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />
        <style media="screen">
          html,
          body,
          div {
            margin: 0;
            padding: 0;
          }
          :root {
            --mocha-color: #fff;
            --mocha-bg-color: #16222e;
            --mocha-pass-icon-color: #00d6b2;
            --mocha-pass-color: #222;
            --mocha-pass-shadow-color: rgba(255,255,255,.2);
            --mocha-pass-mediump-color: #f1be67;
            --mocha-pass-slow-color: #f49896;
            --mocha-test-pending-color: #0b97c4;
            --mocha-test-pending-icon-color: #0b97c4;
            --mocha-test-fail-color: #f44;
            --mocha-test-fail-icon-color: #f44;
            --mocha-test-fail-pre-color: #fff;
            --mocha-test-fail-pre-error-color: #f44;
            --mocha-test-html-error-color: #fff;
            --mocha-box-shadow-color: #444;
            --mocha-box-bottom-color: #555;
            --mocha-test-replay-color: #fff;
            --mocha-test-replay-bg-color: #444;
            --mocha-stats-color: #aaa;
            --mocha-stats-em-color: #fff;
            --mocha-stats-hover-color: #444;
            --mocha-error-color: #f44;
            --mocha-code-comment: #ddd;
            --mocha-code-init: #9cc7f1;
            --mocha-code-string: #80d4ff;
            --mocha-code-keyword: #e3a470;
            --mocha-code-number: #4ca7ff;
          }
          #mocha #mocha-stats {
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            font-size: 14px;
          }
          #mocha {
            margin: 60px 15px;
          }
          #mocha .test {
            margin-left: 0;
          }
          #mocha .test.fail::before {
            margin-top: 4px;
          }
          #mocha h2 {
            font-size: 15px;
          }
          
          #mocha .test pre {
            font-size: 14px;
          }
          
          @media (prefers-color-scheme: light) {
            #mocha-stats .progress {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div id="mocha"></div>

        <script src="https://unpkg.com/chai/chai.js"></script>
        <script src="https://unpkg.com/mocha/mocha.js"></script>
        <script type="text/javascript">${js}</script>
        <script type="text/javascript">
          mocha.setup('bdd');
          mocha.checkLeaks();
          it('chain function should work', () => {
            function add(x) {
            	return x + 10;	
            }

            function mult(x) {
            	return x * 30;
            }
            chai.assert.equal(chain(2, [add, mult]), 360);
          });
          mocha.run();
        </script>
        <script type="text/javascript" src="./message.js"></script>
      </body>
    </html>
  `);
});
