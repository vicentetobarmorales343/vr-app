window.addEventListener('load', initScene);

function initScene() {
  console.log('initScene');
  if (document.querySelectorAll("a-entity[option='1']")) {
    document.querySelectorAll("a-entity[option='1']").forEach((el) => {
      el.addEventListener('click', () => {
        option1();
      });
    });
  }
  if (document.querySelectorAll("a-entity[option='2']")) {
    document.querySelectorAll("a-entity[option='2']").forEach((el) => {
      el.addEventListener('click', () => {
        option2();
      });
    });
  }
  if (document.querySelectorAll("a-entity[option='3']")) {
    document.querySelectorAll("a-entity[option='3']").forEach((el) => {
      el.addEventListener('click', () => {
        option3();
      });
    });
  }
}

function option1() {
  console.log('option 1');
  document.querySelectorAll("a-entity[burger-n='3']").forEach((el) => {
    el.setAttribute('visible', 'true');
  });
  document.querySelectorAll("a-entity[burger-n='2']").forEach((el) => {
    el.setAttribute('visible', 'false');
  });
  document.querySelectorAll("a-entity[burger-n='1']").forEach((el) => {
    el.setAttribute('visible', 'false');
  });
}

function option2() {
  console.log('option 2');
  document.querySelectorAll("a-entity[burger-n='3']").forEach((el) => {
    el.setAttribute('visible', 'false');
  });
  document.querySelectorAll("a-entity[burger-n='2']").forEach((el) => {
    el.setAttribute('visible', 'false');
  });
  document.querySelectorAll("a-entity[burger-n='1']").forEach((el) => {
    el.setAttribute('visible', 'true');
  });
}

function option3() {
  console.log('option 3');
  document.querySelectorAll("a-entity[burger-n='3']").forEach((el) => {
    el.setAttribute('visible', 'false');
  });
  document.querySelectorAll("a-entity[burger-n='2']").forEach((el) => {
    el.setAttribute('visible', 'true');
  });
  document.querySelectorAll("a-entity[burger-n='1']").forEach((el) => {
    el.setAttribute('visible', 'false');
  });
}
