<template>
    <div class="receipt-info-element">
        <info-product/>
        <info-pay/>
    </div>
</template>

<script>
import InfoProduct from './info/InfoProduct.vue'
import InfoPay from './info/InfoPay.vue'

export default ({
    name: 'ReceiptInfo',

    components: {
        InfoProduct,
        InfoPay
    }
})
</script>