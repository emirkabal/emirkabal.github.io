const ws = new WebSocket("wss://api.lanyard.rest/socket");
let keys = [];
let interval = null;
ws.onopen = function () {
  console.info("Lanyard: connected.");
  ws.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "269581360316940299",
      },
    })
  );
  interval = setInterval(() => {
    ws.send(
      JSON.stringify({
        op: 3,
      })
    );
  }, 30000);
};

ws.onclose = function () {
  clearInterval(interval);
  console.warn("Lanyard: disconnected.");
};

ws.onmessage = function (e) {
  try {
    const data = JSON.parse(e.data);
    if (data?.op === 1) return;
    if (data?.d?.spotify) {
      document.getElementsByClassName("activity")[0].style.display = "flex";
      const aEl = document.createElement("a");
      aEl.innerText = data.d.spotify.song;
      aEl.classList.add("bg-spotify");
      aEl.target = "_blank";
      aEl.href = `https://open.spotify.com/track/${data.d.spotify.track_id}`;
      document.getElementById("activity").innerText = `Listening to `;
      document.getElementById("activity").appendChild(aEl);
      document
        .getElementById("activity")
        .appendChild(document.createTextNode(` by ${data.d.spotify.artist}`));
    } else {
      document.getElementsByClassName("activity")[0].style.display = "none";
    }
  } catch (error) {
    console.error("Landyard Error: %s", error);
  }
};

document.addEventListener("keypress", async (e) => {
  keys.push(e.key);
  setTimeout(() => {
    keys = [];
  }, 1000);
  if (
    ["dervis", "derviş", "kedi", "cat"].includes(
      keys.join("").toLocaleLowerCase()
    )
  ) {
    console.log("Dervis: meow!");
    if (document.getElementsByClassName("dervis").length > 0) {
      document.getElementsByClassName("dervis")[0].remove();
    }
    await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = "/assets/images/dervis.jpg";
    });
    await new Promise((resolve, reject) => {
      const audio = new Audio("/assets/sounds/meow.mp3");
      audio.oncanplaythrough = () => {
        audio.volume = 0.1;
        audio.play();
        resolve(audio);
      };
      audio.onerror = () => reject;
    });
    const el = document.createElement("div");
    el.classList.add("dervis", "active");
    document.body.append(el);
    setTimeout(() => {
      el.classList.add("inactive");
      setTimeout(() => {
        el.remove();
      }, 1000);
    }, 2000);
  }
});
