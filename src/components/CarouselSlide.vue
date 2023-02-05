<template>
    <transition :name="direction" mode="in-out">
        <div class="carousel-slide" 
            :class="{ //dynamically setting class for positioning of slides. primary in front the rest fade to the back
                primarySlide: isPrimary, 
                secondarySlide: isSecondary,
                tertiarySlide: isTertiary,
                quaternarySlide: isQuaternary
                }"
                >
            <div>
                <img 
                    :src="image" 
                    :alt="alt"
                    @click="showModal"
                    :tabindex="index"
                    >
                    <!-- if secondary image is available drop it in and give it its specific class name
                    to be animated accordingly -->
                <img v-if="image2 && isPrimary" 
                :class="name"
                :src="image2" 
                :alt="alt"
                @click="showModal"
                >
            </div>
            <h3 v-if="visibleSlide === index && !isVisible" class="stepTitle">{{ title }}</h3>
            <transition name="bounce" mode="in-out">
                <slide-modal  v-if="isVisible && visibleSlide === index"
                    :title="title"
                    :description="description"
                    @showModal="showModal"
                    />
            </transition>
            <slot></slot>
        </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
        visibleSlide: {
            type: Number
        },
        index: {
            type: Number
        },
        direction: {
            type: String
        },
        image: {
            type: String
        },
        image2: {
            type: String
        },
        alt: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        slides: {
            type: Array
        },
        name: {
            type: String
        }
    },
    data() {
      return {
        isVisible: false,
      }
    },
    computed: { 
        //checking to see what place in line the a slide currently sits at and set a class to style according to place
        //has to be a better way will return
        isPrimary() {
            return this.visibleSlide === this.index ? true : false;
        },
        isSecondary() {
            if (this.visibleSlide === (this.slides.length - 1)) {
                return this.index === 0 ? true : false;
            } else if (this.visibleSlide === 0) {
                    return this.index === 1 ? true : false;
                } else {
                        return this.index === (this.visibleSlide + 1) ? true : false;
                    }
        },
        isTertiary() {
            if (this.visibleSlide === 0) {
                return this.index === 3 ? true : false;
            } else {
                    return this.index === (this.visibleSlide - 1) ? true : false;
                }
        },
        isQuaternary() {
            if(!this.isPrimary && !this.isSecondary && !this.isTertiary) {
                return true
            } else {
                return false
            }
        },
    },
    methods: {
      showModal() {
        this.isVisible = !this.isVisible
      }   
    }
  }
  
  </script>
  
  <style>
  /* SLIDES AND SLIDE POSITIONING */
    .carousel-slide {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        width: 300px;
        height: fit-content;
        transition: .6s;
    }
    .carousel-slide img {
        transition: 1s;
    }
    .carousel-slide img + img {
        position: absolute;
        left: 0;
        animation: propellerAnimate 1s ease-in-out 500ms;
        animation-fill-mode: forwards;
    }
    .carousel-slide img.speedometer {
        width: 29px;
        bottom: 140px;
        left: 135px;
        animation: speedometerAnimate 1s ease-in-out 500ms;
        animation-fill-mode: forwards;
    }
        @keyframes propellerAnimate {
        0% {
            transform: rotate(0);
            filter: blur(0)
        }
        80% {
            filter: blur(11px);
        }
        100% {
            transform: rotate(1800deg);
            filter: blur(0);
        }
        }
        @keyframes speedometerAnimate {
            0% {
            transform: rotate(0);
            }
            100% {
            transform: rotate(1800deg);
            }
        }        
    .stepTitle {
        margin-top: 0;
    }
    .primarySlide {
        left: calc(50% - 150px);
        top: calc(50% - 150px);
        z-index: 4;
    }
    .secondarySlide {
        left: -40px;
        top: calc(45% - 120px);
        z-index: 3;
    }
    .tertiarySlide {
        left: calc(100% - 260px);
        top: calc(45% - 120px);
        z-index: 2;
    }
    .quaternarySlide {
        left: calc(50% - 150px);
        top: calc(45% - 155px);
        z-index: 1;
    }
    .cincoSlide {
        top: 24%;
    }
    .secondarySlide img {
        width: 70%;
        opacity: .4;
        pointer-events: none;
    }
    .tertiarySlide img {
        width: 70%;
        opacity: .4;
        pointer-events: none;
    }
    .quaternarySlide img {
        width: 55%;
        opacity: .4;
        pointer-events: none;
    }
    .cincoSlide img {
        width: 10%;
    }
    /* TRANSITION STYLING FOR LEFT AND RIGHT SLIDER ROTATION */
    .left-enter-active {
        animation: leftInAnimation 0.4s ease-in-out;
    }
    .left-leave-active {
        animation: leftOutAnimation 0.4s ease-in-out;
    }
    @keyframes leftInAnimation {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    @keyframes leftOutAnimation {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }
    .right-enter-active {
        animation: rightInAnimation 0.4s ease-in-out;
    }
    .right-leave-active {
        animation: rightOutAnimation 0.4s ease-in-out;
    }
    @keyframes rightInAnimation {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
    }
    @keyframes rightOutAnimation {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }
  </style>