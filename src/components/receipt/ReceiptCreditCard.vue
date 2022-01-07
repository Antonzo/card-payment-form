<template>
    <div v-if="isFullCard" class="receipt-card-element">
        <div class="light-element"></div>
        <div>
            <icon-chip/>
            <icon-mastercard class="flex-right-side"/>
        </div>

        <div class="card-info-element"> 
            {{cardHolder}}  
            <br>
            {{cardNum}} 
        </div>
        <div class="card-details-element"> 
            <span>RUNWAY<br>YELLOW</span>
            <span class="flex-right-side">HIGH-TENSILE<br>POLYMER CORE</span>
        </div>
       <div class="footer-element">
           <span>POINT</span>
           <icon-wifi class="flex-right-side"/>
       </div>
    </div>
    <div v-else class="receipt-card-element">
    </div>
</template>

<script>
import IconChip from "../../assets/icons/IconChip.vue"
import IconMastercard from '../../assets/icons/IconMastercard.vue'
import IconWifi from '../../assets/icons/IconWifi.vue'

export default {
    name: 'ReceiptCreditCard',

    components: {
        IconChip,
        IconMastercard,
        IconWifi
    },

    computed: {
        cardNum() {
            return "●".repeat(4) + " " + this.$store.getters.getCardNum.slice(-4)
            
        },
        cardHolder() {
            return this.$store.getters.getCardHolder
        },
        isFullCard() {
            return this.$store.getters.getCardNum.length === 37;
        }
    }
}
</script>