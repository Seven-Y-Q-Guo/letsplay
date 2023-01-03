#  Get the last three characters via particular object


```javascript
const obj = {
  data: 'a',
  next: {
    data: 'b',
    next: {
      data: 'c',
      next: {
        data: 'd',
        next: null
      }
    }
  }
};

getLastThree(obj); // 'bcd' 
```
