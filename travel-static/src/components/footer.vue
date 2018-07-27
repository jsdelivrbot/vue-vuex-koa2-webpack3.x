<template>
    <footer>
        <ul>
            <li>
                <a>关于我们</a>
            </li>
            <li>
                <a>用户反馈</a>
            </li>
        </ul>
        <p>@2018</p>
        <p>狐狸笑</p>
        <p>地址：广东省深圳市南山区</p>
    </footer>
</template>
<style lang="scss" scoped>
footer {
  background: #2a282c;
  color: #929193;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.5rem 0rem 1.3rem;
  ul {
    overflow: hidden;
    padding: 0.5rem 1rem;
    li {
      float: left;
      padding: 0.5rem;
      width: 50%;
      a {
        background: #403e42;
        color: #929193;
        display: block;
        padding: 0.4rem;
        border-radius: 0.2rem;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  p{
      line-height: 1.2rem;
  }
}
</style>
<script>
export default {
}
</script>