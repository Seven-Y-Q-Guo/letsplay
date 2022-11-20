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
            --mocha-bg-color: #16222e;
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
          it('should add to numbers from an es module', () => {
            chai.assert.deepEqual([2, 6].customMap(item => item * 2), [4, 12]);
          });
          mocha.run();
        </script>
        <script type="text/javascript" src="./message.js"></script>
      </body>
    </html>
  `);
});
