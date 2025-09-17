export const particlesOptions = {
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 50,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ff0096b3"
    },
    links: {
      color: "#00ffff33",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      enable: true,
      outMode: "destroy",
      speed: 0.5,
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 200
      },
      value: 150
    },
    opacity: {
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      random: false,
      value: 5
    },
    stroke: {
      width: 1,
      color: "#ff0000"
    }
  },
  detectRetina: true
};
