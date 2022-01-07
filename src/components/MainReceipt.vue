<template>
    <div class="receipt-main">
        <receipt-credit-card/>
        <receipt-info/>
    </div>
    
</template>

<script>
import ReceiptCreditCard from './receipt/ReceiptCreditCard.vue'
import ReceiptInfo from './receipt/ReceiptInfo.vue'

export default ({
    name: 'MainReceipt',

    components: {
        ReceiptCreditCard,
        ReceiptInfo
    }
})
</script>
