console.log('start here');

let input = document.getElementById('input');
let msg = document.getElementById('msg');

// 原函数：监听input变化后把值显示在msg里
function listener(value) {
  msg.innerHTML = value;
}

// 包装节流函数
function jieliu(fn, delay) {
  return function(args) {
    let self = this;
    let _args = args;
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      fn.call(self, _args);
    }, delay);
  };
}

// 使用
const jieliuListener = jieliu(listener, 1000);

input.addEventListener('keyup', e => {
  // listener(e.target.value);
  jieliuListener(e.target.value);
});

