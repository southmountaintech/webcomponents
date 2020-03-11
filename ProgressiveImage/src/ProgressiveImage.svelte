<svelte:options tag="progressive-image" />

<script>
  export let smallimgsrc = "";
  export let largeimgsrc = "";
  export let alt = "";
  export let aspectratio = 50;

  import { onMount, afterUpdate } from 'svelte';

  let placeholder;
  let smallImageLoaded = false;
  let hasRunImageLoading = false;

  const progressivelyLoadImage = (() => {
    if (hasRunImageLoading) return;
    if (!(smallimgsrc && largeimgsrc && aspectratio && alt)) return;

    // 1: load small image and show it
    const img = new Image();
    img.src = smallimgsrc;
    img.onload = function () {
      smallImageLoaded = true;
    };

    // 2: load large image
    const imgLarge = new Image();
    imgLarge.src = largeimgsrc;
    imgLarge.alt = alt;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
    };

    placeholder.appendChild(imgLarge);

    hasRunImageLoading = true;
  });

  onMount(progressivelyLoadImage);
  afterUpdate(progressivelyLoadImage);
</script>

<div id="placeholder" bind:this={placeholder}>
  <img alt={alt} id="img-small" src={smallimgsrc} class:loaded={smallImageLoaded}>
  <div style="padding-bottom: {aspectratio}%;"></div>
</div>


<style>
  #placeholder {
    background-color: #f6f6f6;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
  }

  #placeholder img {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 1s linear;
  }

  #placeholder img.loaded {
    opacity: 1;
  }

  #img-small {
    filter: blur(50px);
    /* this is needed so Safari keeps sharp edges */
    transform: scale(1);
  }
</style>
