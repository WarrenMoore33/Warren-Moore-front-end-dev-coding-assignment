<template>
  <div class="title-section">
    <h1>
      Public Health's Approach to Violence Prevention in Four Steps
    </h1>
    <p>
      Violence prevention involves these steps to take flight
    </p>
  </div>
  <div class="app" :class="{innerClouds : innerClouds}">
    <carousel-container
      :slides="slides"
      :visibleSlide="visibleSlide"
      :direction="direction"
      @next="next"
      @prev="prev"
      @setSlide="setSlide"  
    />
  </div>
</template>

<script>
import CarouselContainer from './components/CarouselContainer.vue'

/*Array will be used to hold objects that will be looped through
as individual slides. Holds a name, primary image, secondary image(for animation)
a title and a description to appear in modal*/
export default {
  data() {
    return {
      slides: [
        {
          name: 'goggles',
          image: require('../public/img/goggles@2x.png'),
          alt: 'Illustration of airplane goggles and brown airplane headgear with yellow background',
          title: `1. DEFINE THE PROBLEM`,
          description: `This step involves collecting data to find out the “who,” “what,” “where,”
          “when,” and “how” of violence happening in a given jurisdiction. Data 
          come from a variety of sources — death certificates, medical or coroner 
          reports, hospital records, child welfare records, law enforcement, 
          population-based surveys, and more resources.`
        },

        {
          name: 'speedometer',
          image: require('../public/img/cockpit@2x.png'),
          image2: require('../public/img/speedometer.png'),
          title: `2. IDENTIFY RISK AND PROTECTIVE FACTORS`,
          alt: 'Illustration of yellow black and grey airplane cockpit in front of blue and white sky',
          description: `In this step, you explore why some people or communities experience
            more violence than others. Scientific research reveals what puts people
            at risk and what protects them. Risk factors are the characteristics of
            populations or settings that increase the risk for violence. Protective
            factors buffer against the risk factors and decrease the likelihood of
            violence. The goal of violence prevention is decrease risk factors and
            increase protective factors – thereby reducing violence.`
        },

        {
          name: 'propeller',
          image: require('../public/img/propellor@2x.png'),
          image2: require('../public/img/propellorBlade.png'),
          alt: 'Illustration of a front facing yellow airplane with silver propeller and black wings',
          title: `3. DEVELOP AND TEST PREVENTION STRATEGIES`,
          description: `In this step, prevention strategies are developed using the information
            gathered in steps 1 and 2. Once prevention strategies are developed,
            they are rigorously evaluated to see if they prevent violence.`
        },

        {
          name: 'adoption',
          image: require('../public/img/widespread-adoption@2x.png'),
          alt: 'Illustration from side of yellow and black airplane ascending',
          title: `4. ASSURE WIDESPREAD ADOPTION`,
          description: `In this step effective strategies are disseminated and implemented
            widely for greater impact. Though this is considered the final step of the
            public health model, assessments and evaluations continue. Continued
            evaluation helps ensure all components of a strategy fit within a
            community and have the desired effect of preventing violence.`
        },
        

      ],
      visibleSlide : 0, // this will change every time I would like a slide to change and will correspond with the index of slide in the array
      direction: '',
      readMoreIsVisible: false,
      innerClouds: false
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    }
  },
  methods: {
      next() {
        if(this.visibleSlide === 3) {
          this.innerClouds = true;
          setTimeout(() => {
            this.innerClouds = false;
          }, 2000)
        }
        this.visibleSlide >= (this.slidesLen - 1) ? this.visibleSlide = 0 : this.visibleSlide++; //if slide is the last slide next set to 0. Otherwise just add one
        this.direction = 'left' //setting direction slider should rotate from the left
      },
      prev() {
        this.visibleSlide <= 0 ? this.visibleSlide = (this.slidesLen - 1) : this.visibleSlide--; //if slide is the first slide prev jump to last slide. Otherwise subtract one
        this.direction = 'right' //setting direction slider should rotate from the right
      },
      setSlide(index) {
        this.visibleSlide = index; //manually set visible slide and index to jump to specific index
        this.index = index;
      }
    },
  components: {
    CarouselContainer,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body {
    font-family: Roboto;
    margin: 0;
  }
  .app {
      display: flex;
      justify-content: center;
  }
  img {
      max-width: 100%;
      cursor: pointer;
  }
  ul {
      list-style: none;
  }
 /* CAROUSEL STYLING */
#app {
    background: #7DA4B7 url('../public/img/fastClouds.png') center;
    animation: animatedBackground 500s linear infinite alternate;
}
.innerClouds {
    background: url('../public/img/fastClouds2.png') center no-repeat;
    animation: fastClouds 1s ease-in-out;
    animation-fill-mode: forwards;
}

/* LITTLE MOVING SKIES AND STUFF EXPERIMENT */
@keyframes animatedBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 5000% 0;
    }
  }
  @keyframes fastClouds {
    from {
      background-position: 0% 100%;
    }
    to {
      background-position: 500% 100%;
    }
  }
  /* TITLE SECTION */
    .title-section {
      width: fit-content;
      margin: 0 auto;
      position: relative;
      top: 65px;
      font-size: 24px;
      padding: 0 5px;
  }
  .title-section h1 {
      margin: 0px 0 10px 0;
      text-align: center;
      position: relative;
      color: #20364B;
  }
  .title-section p {
      margin: 0px;
      text-align: center;
      color: rgb(255, 255, 255);
      background: rgb(44, 74, 103);
      padding: 5px;
      border-radius: 10px;
  }
  button {
      position: absolute;
      height: 40px;
      width: 50px;
      top: calc(50% - 20px);
      background-color: rgba(0,0,0,.4);
      border: none;
      color: #fff;
      transition: .3s;
      border-radius: 10px;
  }

  button:focus, button:hover {
      outline: none;
      cursor: pointer;
      background-color: rgba(0,0,0,.8);
  }
</style>