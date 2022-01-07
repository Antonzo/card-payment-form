<template>
    <div class="subform-container">
        <span> 
            <span class="subform-title">Card Number</span> 
            <br>
            <span class="subform-description">Enter the 16-digit card number on the card</span>
        </span>

        <icon-edit v-if="!isEnabled" class="flex-right-side edit-toggle-icon"/>

        <icon-padlock v-else class="flex-right-side edit-toggle-icon"/>
        <span class="edit-toggle-button"
              exact @click.stop="pressEdit()"> 
              {{ isEnabled ? 'Lock' : 'Edit' }}</span>
    </div>
</template>

<script>
import IconEdit from '../../assets/icons/IconEdit.vue'
import IconPadlock from '../../assets/icons/IconPadlock.vue'

export default ({
    name: 'FormEdit',

    components: {
        IconEdit,
        IconPadlock
    },
    
    props: {
        isEnabled: Boolean
    },

    methods: {
        pressEdit: function () {
            this.$emit('toggled')
        }
    },
})
</script>

<style scoped>
.edit-toggle-button {
    cursor: pointer;
}
.subform-container {
    margin-bottom: 0;
}

@media screen and (min-width: 600px) { 
    .subform-container {
        margin-bottom: 20px;
    }
}

@media screen and (min-width: 768px) { 
    .subform-container {
        margin-bottom: 0;
    }
}

@media screen and (min-width: 1024px) {
    .subform-container {
        margin-bottom: 20px;
    }
}
</style>