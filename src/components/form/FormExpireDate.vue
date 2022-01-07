<template>
    <div class="subform-container">
        <span> 
            <span class="subform-title">Expiry Date</span> 
            <br> 
            <span class="subform-description">Enter the expiration date of the card </span>
        </span>
        <div class="flex-right-side">
            <div class="input-border-area" @click="assignFocus()" @focus="assignFocus()">
                <input pattern="[0-9]*"
                    v-model="expirationMonth"
                    ref="exMonth"
                    @keydown="processKey($event)"> 
            </div>
            <span class="form-separator"> / </span>
            <div class="input-border-area" @click="assignFocus()" @focus="assignFocus()">
                <input pattern="[0-9]*"
                    v-model="expirationYear"
                    ref="exYear"
                    @keydown="processKey($event)"
                    @keyup="passIsFullInput()"> 
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'FormExpireDate',

    data() {
        return {
            expirationMonth: '',
            expirationYear: ''
        }
    },

    methods: {
        processKey: function (event) {
            if ((event.keyCode < 48 
                    || event.keyCode > 57) 
                    && event.keyCode !== 8)
                event.preventDefault()

            let lengthMonth = this.expirationMonth.length
            let lengthYear = this.expirationYear.length

            if (event.target === this.$refs.exMonth) {
                if (lengthMonth > 1) {
                    this.assignFocus()         
                    event.target.setSelectionRange(lengthMonth, lengthMonth)  
                }
            }
            else if (event.target === this.$refs.exYear) {
                if (lengthYear > 1 && event.keyCode !== 8) 
                    event.preventDefault()
                if (lengthYear === 0 && event.keyCode === 8){
                    this.$refs.exMonth.focus()
                    this.$refs.exMonth.setSelectionRange(lengthMonth, lengthMonth)
                }
            }
        },

        assignFocus: function () {
            if (this.expirationMonth.length > 1)
                this.$refs.exYear.focus()
            else 
                this.$refs.exMonth.focus()
        },

        focusLastSymb: function (event) {
            event.target.setSelectionRange(this.cardNum.length, this.cardNum.length)
        },

        passIsFullInput: function () {
            this.$emit('expiryDateInput', this.expirationYear.length == 2)
        }
    }

})        
</script>

<style scoped>
.flex-right-side {
    width: 100%;
}
input {
    width: 100%;
}
.input-border-area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.form-separator {
    text-align: center;
    font-weight: 600;
    width: 2rem;
}
.form-separator + div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 600px) { 
    .flex-right-side {
        width: fit-content;
    }
    input {
        padding-left: calc(2.3rem + 10px);
        padding-right: calc(2.3rem + 10px);
        width: 2rem;
    }
}

@media screen and (min-width: 768px) {
    .flex-right-side {
        width: 100%;
    }
    input {
        width: 100%;
        padding: 0;
    }
}

@media screen and (min-width: 1024px) {
    .flex-right-side {
        width: fit-content;
    }
    input {
        padding-left: calc(2.3rem + 10px);
        padding-right: calc(2.3rem + 10px);
        width: 2rem;
    }
}
</style>
