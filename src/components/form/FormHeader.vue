<template>
    <div class="subform-container"> 
        <icon-rocket class="rocket-icon"/>
        <span>PointCard<sup class="superscript">TM</sup> </span>
        <time class="flex-right-side clock" 
              :datetime="currentDateTime">
              {{ currentTime }}
        </time>
    </div>
</template>

<script>
import moment from 'moment'

import IconRocket from '../../assets/icons/IconRocket.vue'

export default ({
    name: 'InputHeader',

    components: {
        IconRocket
    },

    data() {
        return {
            interval: null,
            currentTime: '',
            currentDateTime: ''
        }
    },

    methods: {
        updateDateTime: function () {
            this.currentTime = moment().format('HH:mm')
            this.currentDateTime = moment().format('YYYY-MM-DD HH:mm')
        }
    },

    mounted() {
        this.interval = setInterval(() => {
            this.updateDateTime();
        }, 1000);
    },

    destroyed() {
        clearInterval(this.interval); 
    }
})
</script>

<style scoped>
.subform-container {
    height: 3rem;
}
</style>
