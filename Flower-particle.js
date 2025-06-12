// (c) NextCode
// see https://nextparticle.nextco.de/ for more details

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 800;

const settings = {
  particleGap: isMobile ? 7 : 5,
  particleSize: isMobile ? 4 : 2,
  mouseForce: 30,
  noise: 30,
  layerCount: isMobile ? 1 : 3,
  layerDistance: 5,
};

const heart = new NextParticle({
  renderer: "webgl",
  image: document.querySelector("#valentines"),
  width: window.innerWidth,
  height: window.innerHeight,
  particleGap: settings.particleGap,
  particleSize: settings.particleSize,
  mouseForce: settings.mouseForce,
  noise: settings.noise,
  layerCount: settings.layerCount,
  layerDistance: settings.layerDistance,
});

function redraw() {
  heart.particleGap = settings.particleGap;
  heart.particleSize = settings.particleSize;
  heart.mouseForce = settings.mouseForce;
  heart.noise = settings.noise;
  heart.layerCount = settings.layerCount;
  heart.layerDistance = settings.layerDistance;
  heart.width = window.innerWidth;
  heart.height = window.innerHeight;

  heart.start({
    initPosition: "none",
    initDirection: "none",
  });
}

const gui = new dat.GUI();
gui.add(settings, "particleGap", 1, 20, 1).onChange(redraw);
gui.add(settings, "particleSize", 0.5, 20, 0.1).onChange(redraw);
gui.add(settings, "mouseForce", -300, 300, 5).onChange(redraw);
gui.add(settings, "noise", 0, 100, 1).onChange(redraw);
gui.add(settings, "layerCount", 1, 15, 1).onChange(redraw);
gui.add(settings, "layerDistance", 0.1, 20, 0.1).onChange(redraw);

if (isMobile) {
  gui.close();
}

window.addEventListener("resize", redraw);
