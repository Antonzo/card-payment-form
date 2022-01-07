<template>
    <div>
        <span>
            You have to pay 
            <br>
            <span> 
                <span class="money-amount-integer">{{itemCostInteger}}</span> 
                <span>.{{itemCostDecimal}} </span> 
                <span class="currency">{{currency}}</span> 
            </span>
        </span>
        <icon-receipt  class="flex-right-side"/>
    </div>
</template>

<script>
import IconReceipt from '../../../assets/icons/IconReceipt.vue'

export default ({
    name: 'InfoPay',

    components: {
        IconReceipt
    },

    data() {
        return {
            itemCostInteger: '549',
            itemCostDecimal: '99',
            currency: 'USD'
        }
    }
})
</script>
