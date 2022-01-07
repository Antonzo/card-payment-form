<template>
  <div>
    <form class="main-form"
          :class="{'main-form-disEnabled': !isFormEnabled}">

      <form-header/>

      <form-edit :isEnabled="isFormEnabled"
                  @toggled="changeFormAvailability"/>

      <form-credit-card 
        @creditCardInput="areInputsFull.creditCard = $event"/>

      <form-cvc 
        @cvcInput="areInputsFull.cvc = $event"/>

      <form-expire-date 
        @expiryDateInput="areInputsFull.expiryDate = $event"/>

      <form-password 
        @passwordInput="areInputsFull.password = $event"/> 

      <form-pay-button :class="{'pay-button-disEnabled': !isPayButtonEnabled}"/>
    </form>
  </div>
</template>

<script>
import FormHeader from './form/FormHeader.vue'
import FormEdit from './form/FormEdit.vue'
import FormCreditCard from './form/FormCreditCard.vue'
import FormCvc from './form/FormCvc.vue'
import FormExpireDate from './form/FormExpireDate.vue'
import FormPassword from './form/FormPassword.vue'
import FormPayButton from './form/FormPayButton.vue'

export default {
  name: 'FormMain',

  components: {
      FormHeader,
      FormEdit,
      FormCreditCard,
      FormCvc,
      FormExpireDate,
      FormPassword,
      FormPayButton
  },

  data () {
      return {
          isFormEnabled: false,
          areInputsFull: {
            creditCard: false,
            cvc: false,
            expiryDate: false,
            password: false
          }
      }
  },

  methods: {
      changeFormAvailability: function () {
        this.isFormEnabled = !this.isFormEnabled
      },
  },

  computed: {
      isPayButtonEnabled: function () {
          return Object.values(this.areInputsFull).every(Boolean)
      }
  },
}
</script>