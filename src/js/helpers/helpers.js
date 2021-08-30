export function scrollEvent(camera) {
  const divMain = document.querySelector(".main");

  window.addEventListener("scroll", (e) => {
    camera.position.y = -(10 / divMain.offsetHeight) * window.scrollY;
  });
}

export function getRandomParticelPos(particleCount) {
  const arr = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    arr[i] = (Math.random() - 0.5) * 15;
  }
  return arr;
}

export function audioControls() {
  const playBtn = document.getElementById("btnSoundId");
  const sound = document.getElementById("soundId");

  let template = [
    '<i class="fas fa-play-circle"></i> Lorem',
    '<i class="fas fa-pause-circle"></i> Lorem',
  ];
  let flag = true;

  sound.loop = true;

  playBtn.addEventListener("click", () => {
    if (flag) {
      playBtn.innerHTML = template[1];
      sound.play();
    } else {
      playBtn.innerHTML = template[0];
      sound.pause();
    }
    flag = !flag;
  });
}
