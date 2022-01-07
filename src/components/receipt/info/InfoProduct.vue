<template>
        <ul>
            <li v-for="(value, property) in productDescription"
                :key="property"> 
                <span class="receipt-info-list-field"> 
                    {{property}} 
                </span> 
                <icon-apple class="flex-right-side" v-if="property === 'Company'"/>
                <span :class="{'flex-right-side': property !== 'Company'}"
                      class="receipt-info-list-value"> 
                    {{value}}
                </span> 
            </li>
        </ul>
</template>
<script>
import IconApple from '../../../assets/icons/IconApple.vue'

export default {
    name: 'InfoProduct',

    components: {
        IconApple
    },

    data() {
        return {
            productDescription: {
                'Company': 'Apple',
                'Order Number': '1266201',
                'Product' : 'MacBook Air',
                'VAT (20%)' : '$100.00'
            }
        }
    }
}
</script>