<template>
  <div class="carouselContainer">
    <div class="carouselWrapper">
      <carousel-slide v-for="(slide,index) in slides" 
          :slides="slides"
          :key="slide" 
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
          :image="slide.image"
          :image2="slide.image2"
          :alt="slide.alt"
          :title="slide.title"
          :description="slide.description"
          :name="slide.name"
          />
    </div>
    <arrow-button @click="next"/>
    <arrow-button @click="prev" class="prev"/>

    <!-- section for little circles to cycle through slides in order -->
    <div class="boxNav">
      <span v-for="index in numSlides"
        @click="setSlide(index - 1)" 
        :class="visibleSlide === (index - 1) ? 'activeBox' : ''" 
        :key="index"
        role="button"
        :tabindex="index"
        ></span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    slides: {
      type: Array
    },
    visibleSlide: {
            type: Number
        },
    direction: {
      type: String
    }
      },
  data() {
    return {
      
    }
  },
  computed: {
    numSlides() {
      return this.slides.length
    }
  },
  methods: {
    // sending next and prev functions up to app to control functionality here and up there
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
    setSlide(index) {
      this.$emit('setSlide', index)
    }

  }
}

</script>

<style>
  .carouselContainer {
      position: relative;
      width: 100%;
      height: 90.2vh;
      overflow: hidden;
      display: flex;
      background: url('../../public/img/cloud-30-opacity@2x.png') no-repeat center;
      /* background: #7DA4B7; */
  }
  .carouselWrapper {
      width: 100%;
      max-width: 650px;
      text-align: center;
      margin: 0 auto;
      position: relative;
  }
  /* ROTATION ARROWS */
  .arrow-btn {
      top: calc(50% - 70px);
      right: 15%;
      z-index: 9;
      height: 48px;
      width: 48px;
      border-radius: 100%;
  }
  .arrow-btn svg {
      position: relative;
      left: 1px;
      top: 1px;
  }
  .prev {
      top: calc(50% - 70px);
      left: 15%;
  }
  .prev svg {
      transform: rotate(180deg);
      left: -1px;
  }

  .boxNav {
      position: absolute;
      left: calc(50% - 56px);
      bottom: 10%;
      z-index: 9;
  }

  .boxNav span{
      border-radius: 100%;
      width: 20px;
      height: 20px;
      background: #fff;
      margin: 0 4px;
      display: inline-block;
      transition: .3s;
      cursor: pointer;
      border: 1px solid #2C4A67;
  }

  .boxNav span:hover, .activeBox {
      background: #2C4A67 !important;
  }
    /* MEDIA QUERIES */

    @media (max-width: 1120px) {
      .arrow-btn {
          top: calc(100% - 85px);
      }
  }
</style>