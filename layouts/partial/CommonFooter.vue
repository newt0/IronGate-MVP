<template>
  <footer class="footer">
    <ul class="footer_list">
      <li class="footer_item">
        <a href="">company</a>
      </li>
      <li class="footer_item">
        <a href="/terms">term</a>
      </li>
      <li class="footer_item">
        <a href="/privacy">privacy</a>
      </li>
      <li class="footer_item">
        <a href="">contact</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { ContactFormUrl } from '@/plugins/constants'
export default {
  data() {
    return {
      contactFormUrl: ContactFormUrl
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background: $PrimaryLight;
  padding: ((50 - 15) / 750 * 100vw) (50 / 750 * 100vw);
  width: 100%;
  display: block;
  @include LScreen {
    padding: 33px 0;
    min-width: 1040px;
  }
}
.footer_list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 2.4rem;
  @include LScreen {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
  }
}
.footer_item {
  a {
    color: $SecondaryLight;
    background: url(/img/arrow_1.svg) no-repeat left center;
    background-size: (13 / 750 * 100vw) auto;
    padding: (15 / 750 * 100vw) 0 (15 / 750 * 100vw) (22 / 750 * 100vw);
    display: block;
    @include LScreen {
      margin: 0 25px;
      background-size: 8px auto;
      padding: 0 0 0 ((8 + 9) * 1px);
    }
  }
}
</style>
