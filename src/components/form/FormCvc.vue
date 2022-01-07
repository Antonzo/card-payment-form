<template>
    <div class="subform-container">
        <span> 
            <span class="subform-title">CVC Number</span> 
            <br>
            <span class="subform-description">Enter the 3 or 4 digit number on the card</span>
        </span>

        <div class="flex-right-side input-border-area"  
             @click="assignFocus()"
             @focus="assignFocus()">
            <input pattern="[0-9]*"
                   ref="input"
                   v-model="cvcNum"
                   minlength="3"
                   maxlength="4"
                   @keydown="processKey($event)"
                   @keyup="passIsFullInput()">
            <icon-digit-keypad class="flex-right-side"/>
        </div>
    </div>
</template>

<script>
import IconDigitKeypad from '../../assets/icons/IconDigitKeypad.vue'

export default ({
    name: 'FormCvc',

    components: {
        IconDigitKeypad
    },

    data() {
        return {
            cvcNum: ''
        }
    },

    methods: {
        processKey: function (event) {
            let length = this.cvcNum.length

            if ((length > 3
                    || event.keyCode < 48 
                    || event.keyCode > 57)
                    && event.keyCode !== 8
                    && event.keyCode !== 37
                    && event.keyCode !== 39)
                event.preventDefault()
        },
        
        assignFocus: function () {
            this.$refs.input.focus()
        },

        passIsFullInput: function () {
            this.$emit('cvcInput', this.cvcNum.length === 4)
        }
    }
})
</script>

<style scoped>
input {
    padding-left: calc(1.6rem + 24px);
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}

@media screen and (min-width: 600px) {
  input {
        width: 3rem;
        padding-left: calc(1.6rem + 24px + 4.5rem);
        padding-right: 4.5rem;
    }
}

@media screen and (min-width: 768px) {
    .input-border-area {
        width: 100%;
    }
    input {
        /* Since icon on the right side is shifted to the left 
            (margin-left: auto), then one needs to properly calculate
            left margin for the input to place it at the center
            50% - shift left edge of the input on the center,
            then 2.2rem (half of the input length) - 1.2rem (paddings of the left icon)
            - 24px (width of the left icon)
        */
        padding-left: calc(50% - 0.1rem - 24px);
        padding-right: 0;
    }
}

@media screen and (min-width: 1024px) {
    .input-border-area {
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
    }
    
  input {
        width: 3rem;
        padding-left: calc(1.6rem + 24px + 4.5rem);
        padding-right: 4.5rem;
    }
}
</style>
