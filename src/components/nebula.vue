<template>
    <div class="nebula">
      <div class="particle particle1"></div>
      <div class="particle particle2"></div>
      <div class="particle particle3"></div>
      <div class="particle particle4"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NebulaComponent',
  };
  </script>
  
  <style lang="scss">
  .nebula {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 0, 150, 0.6), rgba(0, 0, 50, 0.8));
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(255, 0, 150, 0.7), 0 0 100px rgba(255, 0, 150, 0.4);
    position: relative;
  }
  
  .particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(0, 0, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 0, 150, 0.7), 0 0 20px rgba(125, 76, 216, 0.4);
  }
  
  .particle1 {
    top: -20px;
    left: calc(50% - 5px);
    animation: orbit 8s linear infinite;
  }
  
  .particle2 {
    top: calc(50% - 5px);
    left: -20px;
    animation: orbit 8s linear infinite 2s;
  }
  
  .particle3 {
    top: calc(100% + 10px);
    left: calc(50% - 5px);
    animation: orbit 8s linear infinite 4s;
  }
  .particle4 {
    top: calc(50% + 5px);
    right: -20px;
    animation: orbit 8s linear infinite 6s;
  }
  @keyframes orbit {
     0% {
         transform: rotate(0deg) translateX(120px) rotate(0deg); 
        } 
        100% {
             transform: rotate(360deg) translateX(120px) rotate(-360deg); 
            } }

  </style>
  