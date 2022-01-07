<template>
    <div class="subform-container">
        <div class="input-border-area" 
            @click="assignFocus()"
            @focus="assignFocus()">
            <icon-credit-card/>

            <input pattern="[0-9\-\s]*"
                v-model="cardNum"
                ref="input"
                @keydown="processKey($event)"
                @keyup="passIsFullInput()"
                @focus="focusLastSymb($event)"
                @click="focusLastSymb($event)"/>

            <icon-check class="flex-right-side"
                        :style="{visibility: isFullInput ? 'visible' : 'hidden'}"/>
        </div>
    </div>
</template>

<script>
import IconCreditCard from '../../assets/icons/IconCreditCard.vue'
import IconCheck from '../../assets/icons/IconCheck.vue'

export default ({
    name: 'FormCreditCard',

    components : {
        IconCreditCard,
        IconCheck
    },

    data() {
        return {
            cardNum: '',
        }
    },

    methods: {
        processKey: function (event) {
            let length = this.cardNum.length;

            if ((length > 36 
                    || event.keyCode < 48 
                    || event.keyCode > 57) 
                    && event.keyCode !== 8)
                event.preventDefault()
            
            if ((event.keyCode !== 8) && (length === 4 || length === 15 || length === 26))
                this.cardNum += '   -   '

            if ((event.keyCode === 8) && (length === 12 || length === 23 || length === 34))
                this.cardNum = this.cardNum.slice(0, -7)
        },

        focusLastSymb: function (event) {
            event.target.setSelectionRange(this.cardNum.length, this.cardNum.length)
        },

        assignFocus: function () {
            this.$refs.input.focus();
        },

        passIsFullInput: function() {
            this.$store.commit('changeCardNum', this.cardNum)
            this.$emit('creditCardInput', this.isFullInput)
        }
    },

    computed: {
        isFullInput: function () {
            return this.cardNum.length === 37
        },
    }
})
</script>

<style scoped>
.subform-container {
    margin-top: 0;
}
.input-border-area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    width: 100%;
}
input {
    width: calc(100% - 54px - 3.2rem);
}

 @media screen and (min-width: 600px) { 
    .subform-container {
        margin-top: 10px;
    }
} 
 
@media screen and (min-width: 768px) {
    .subform-container {
        margin-top: 0;
    }
}

@media screen and (min-width: 1024px) {
    .subform-container {
        margin-top: 10px;
    }
}
</style>