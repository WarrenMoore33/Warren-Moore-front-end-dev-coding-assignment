//Vue provides this createApp thing so let them do their thing
import { createApp } from 'vue'; 

//Go ahead and import those components and the app itself
import App from './App.vue';
import CarouselContainer from './components/CarouselContainer.vue';
import CarouselSlide from './components/CarouselSlide.vue';
import SlideModal from './components/SlideModal.vue';
import ArrowButton from './components/ArrowButton.vue';

//Lets create the app let it build and save that as a variable
const app = createApp(App);

//Take that app you made and make those components you imported apart of that app.
app.component('carousel-container', CarouselContainer);
app.component('carousel-slide', CarouselSlide);
app.component('slide-modal', SlideModal);
app.component('arrow-button', ArrowButton);

//Mount that app so that it populates at this #app id in your HTML
app.mount('#app');