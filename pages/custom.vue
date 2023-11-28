<template>
  <Head>
    <Title>쇼핑 리스트</Title>
    <Meta name="description" :content="'쇼핑 리스트 만들고 싶다.'"/>
  </Head>

  <div>
    <h2>쇼핑 목록을 작성해 주세요.</h2>

    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName"/>
      <button type="button">추가</button>
    </form>

    <ul data-testid="items">
      <li v-for="item in cart.items" :key="item.name">
        {{ item.name }} ({{ item.amount }})

        <div>
          <button
              @click="cart.increaseItem(item.name)"
              type="button"
          >+</button>
          <button
              @click="cart.decreaseItem(item.name)"
              type="button"
          >-</button>
          <button
              @click="cart.removeItem(item.name)"
              type="button"
          >삭제</button>
        </div>
      </li>
    </ul>

    <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        class="btn-clear"
        data-testid="clear"
    >목록 전체 삭제하기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  setup() {
    const cart = useCartStore()

    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''

      console.log(cart.rawItems)
    }

    function clearCart() {
      if (window.confirm('리스트를 모두 삭제하시겠습니까?')) {
        cart.rawItems = []
      }
    }

    return {
      cart, itemName, addItemToCart, clearCart
    }
  }
})
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
}

form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  input{
    width: 250px;
    height: 35px;
    padding: 0 10px;
    outline: none;
    color: #000;
  }

  button {
    height: 35px;
    margin-left: 10px;
    padding: 0 15px;
    background-color: #fff;
    color: #000;
    font-weight: 700;
  }
}

ul {
  margin-bottom: 20px;

  li {
    margin-bottom: 10px;

    div {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
    }

    button {
      min-width: 26px;
      min-height: 26px;
      padding: 0 5px;
      border: 1px solid #fff;
    }
  }
}

.btn-clear {
  padding: 5px 10px;
  background-color: #fff;
  color: #000;

  &:disabled {
    opacity: 0.5;
  }
}
</style>
