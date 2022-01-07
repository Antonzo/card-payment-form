<template>
    <div class="subform-container">
        <span> 
            <span class="subform-title">Password</span> 
            <br>
            <span class="subform-description">Enter your Dynamic password</span>
        </span>
        <div class="flex-right-side input-border-area"
             @click="assignFocus()"
             @focus="assignFocus()">
            <input type="password"
                   ref="input"
                   v-model="password"
                   minlength="5" 
                   maxlength="20"
                   @keyup="passIsInputFull()"/>
            <icon-digit-keypad class="flex-right-side"/>
        </div>
    </div>
</template>

<script>
import IconDigitKeypad from '../../assets/icons/IconDigitKeypad.vue'

export default ({
    name: 'FormPassword',

    components: {
        IconDigitKeypad
    },

    data () {
        return {
            password: ''
        }
    },

    methods: {
        assignFocus: function () {
            this.$refs.input.focus()
        },

        passIsInputFull: function () {
            this.$emit('passwordInput', this.password.length > 4)
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
        width: 12rem;
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
            then 6rem (half of the input length) - 1.2rem (paddings of the left icon)
            - 24px (width of the left icon)
        */
        padding-left: calc(50% - 4.4rem - 24px);
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
        padding-left: calc(1.6rem + 24px);
        width: 12rem;
    }
}
</style>
