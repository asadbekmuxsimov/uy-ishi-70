const output = document.getElementById("output");

const logResult = (title, result) => {
  const entry = document.createElement("div");
  entry.classList.add("entry");
  entry.innerHTML = `<strong>${title}</strong>`;
  if (Array.isArray(result)) {
    result.forEach((item) => {
      if (typeof item === "string" && item.startsWith("https://")) {
        const img = document.createElement("img");
        img.src = item;
        entry.appendChild(img);
      } else {
        const text = document.createElement("p");
        text.textContent = item;
        entry.appendChild(text);
      }
    });
  } else {
    const text = document.createElement("p");
    text.textContent = JSON.stringify(result, null, 2);
    entry.appendChild(text);
  }
  output.appendChild(entry);
};

const firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(Array.from({ length: 10 }, (_, i) => `Muxsimov-${i + 1}`));
  }, 1000);
});

firstPromise.then((result) => {
  logResult("Promise 1", result);
  console.log(result);
});

const secondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(Array.from({ length: 10 }, (_, i) => `Asadbek-${i + 1}`));
  }, 1500);
});

secondPromise.then((result) => {
  logResult("Promise 2", result);
  console.log(result);
});

const thirdPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(
      Array.from(
        { length: 10 },
        () =>
          "https://sportishka.com/uploads/posts/2022-11/1667522806_2-sportishka-com-p-chernii-tonirovannii-mersedes-vkontakte-2.jpg"
      )
    );
  }, 2000);
});

thirdPromise.then((result) => {
  logResult("", result);
  console.log(result);
});

const promises = [firstPromise, secondPromise, thirdPromise];
