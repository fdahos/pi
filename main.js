addEventListener("keypress", (e) => {
  if (e.code === "KeyC") {
    cle();
  }
  if (e.code === "Enter") {
    display(calculation());
  }
});

const cle = () => {
  for (let i = 1; i < 7; i++) {
    document.getElementById(`pi${i}`).value = "";
  }
};

const calculation = () => {
  let e = document.getElementsByName("pi");
  let value = "";
  for (let i = 0; i < e.length; i++) {
    if (e.item(i).checked) {
      value = e.item(i).value;
    }
  }
  let radius = Radius(value);
  return [
    radius,
    radius * 2,
    radius * 6.28,
    radius * radius * 3.14,
    radius * radius * 1.57,
    radius * radius * 0.785,
  ];
};

const Radius = (type) => {
  let result;
  let number;
  switch (type) {
    case "radius":
      number = document.getElementById("pi1").value;
      result = number;
      break;
    case "diameter":
      number = document.getElementById("pi2").value;
      result = number / 2;
      break;
    case "circumference":
      number = document.getElementById("pi3").value;
      result = number / 3.14 / 2;
      break;
    case "area":
      number = document.getElementById("pi4").value;
      result = (number / 3.14) ** (1 / 2);
      break;
    case "semicircle":
      number = document.getElementById("pi5").value;
      result = ((number * 2) / 3.14) ** (1 / 2);
      break;
    case "quarter":
      number = document.getElementById("pi6").value;
      result = ((number * 4) / 3.14) ** (1 / 2);
      break;
  }
  return result;
};

const display = (result) => {
  for (let i = 1; i < 7; i++) {
    document.getElementById(`pi${i}`).value = result[i - 1];
  }
};
