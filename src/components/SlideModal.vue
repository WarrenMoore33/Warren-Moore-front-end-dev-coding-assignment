<template>
  <div class="slideModal">
    <button @click="showModal">X</button>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
            type: String
        },
        description: {
            type: String
        }
  },
  data() {
    return {
      
    }
  },
  methods: {
    showModal() {
        this.$emit('showModal')
      } 
  },
};
</script>

<style>
/* MODAL STYLING */
.slideModal {
    position: absolute;
    background: rgba(45, 75, 102,.97) url('../../public/img/cloud-30-opacity@2x.png') no-repeat 30px 50px;
    background-size: 170px;
    width: 500px;
    min-height: 250px;
    text-align: center;
    top: calc(35% - 125px);
    left: calc(50% - 270px);
    border-radius: 10px;
    padding: 20px;
    color: white;
    z-index: 9;
    line-height: 24px;
    font-size: 18px;
}
.slideModal button {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px 10px 0px 0px;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.3s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  /* MEDIA QUERIES */
  @media (max-width: 610px) {
        .slideModal {
            width: 400px;
            left: calc(50% - 220px);
        }
    }
</style>
