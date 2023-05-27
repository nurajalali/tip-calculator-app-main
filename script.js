const state = { tip: 0, people: 0, amount: 0 };

const tipSpan = document.getElementById("tipPerPerson");
const totalSpan = document.getElementById("totalPerPerson");
tipSpan.innerText = "0.00";
totalSpan.innerText = "0.00";

document.getElementById("billnum").addEventListener("change", (event) => {
  state.amount = parseInt(event.target.value);
});

const btns = Array.from(document.getElementsByClassName("tips__btn"));

btns.forEach((btn) => {
  if (btn.id != "btn_custom") {
    btn.addEventListener("click", () => {
      document.getElementById("btn_custom").classList.remove("disabled");
      document.getElementById("tips__custom").classList.add("disabled");
      //   state.tip = parseInt(btn.innerHTML.slice(0, btn.innerHTML.length - 1));
      state.tip = parseInt(btn.innerText);
      btns.forEach((btn) => btn.classList.remove("selected"));
      btn.classList.add("selected");
    });
  }
});

document.getElementById("peopleNum").addEventListener("change", (event) => {
  state.people = parseInt(event.target.value);

  if (state.people != 0) {
    const tip = (state.tip / 100) * state.amount;
    const tipPerPerson = tip / state.people;
    const totalPerPerson = (state.amount + state.tip) / state.people;
    tipSpan.innerText = tipPerPerson.toFixed(2);
    totalSpan.innerText = totalPerPerson.toFixed(2);
  }
});

document.getElementById("peopleNum").addEventListener("blur", (event) => {
  if (event.target.value == 0) {
    document.getElementById("peopleNum").classList.add("error");
    document.getElementById("error").classList.remove("disabled");
  }
});

document.getElementById("peopleNum").addEventListener("focus", () => {
  document.getElementById("peopleNum").classList.remove("error");
  document.getElementById("error").classList.add("disabled");
});

document.getElementsByClassName("input__content");

document.getElementById("btn_custom").addEventListener("click", (event) => {
  document.getElementById("tips__custom").classList.remove("disabled");
  btns.forEach((btn) => btn.classList.remove("selected"));
  event.currentTarget.classList.add("disabled");
});

document.getElementById("tips__custom").addEventListener("change", (event) => {
  state.tip = parseInt(event.target.value);
});

document
  .getElementsByClassName("tips__btn")
  .addEventListener(click, (event) => {
    event.target.set;
  });
