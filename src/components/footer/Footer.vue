<template>
  <div class="hello">
    <div class="footer">
      <div class="footer1">
        <div class="block">
          <h3 class="footer-h3" style="font-size: 14px;">FLEXIBLE WIDGET AREAS</h3>
        </div>
        <div class="block">
          <p style="text-align: left;">
            Enter any copy (with links) here that you want to present to your
            visitors. You can also define how many columns this footer widget
            area has.
          </p>
        </div>
        <div class="block">
          <p style="text-align: left;">
            Choose between one to four and add any widget you like. This gives
            you maximum freedom for your webdesign!
          </p>
        </div>
      </div>
      <div class="footer1">
        <div class="block">
          <h3 class="footer-h3" style="font-size: 14px;">LATEST BLOG POSTS</h3>
        </div>
        <div class="block">
          <div class="hyper-link">
            <p style="text-align: left; ">Standard post with featured image</p>
          </div>
          <p style="text-align: left; ">November 6, 2014</p>
        </div>
        <div class="block">
          <div class="hyper-link">
            <p style="text-align: left; ">Gallery Post</p>
          </div>
          <p style="text-align: left; ">November 6, 2014</p>
        </div>
        <div class="block">
          <div class="hyper-link">
            <p style="text-align: left; ">Veggie Weeks</p>
          </div>
          <p style="text-align: left; ">November 6, 2014</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background-color: #dcf1fa;
  height: auto;
  width: 80%;
  justify-content: center;
  margin: auto;
  opacity: 0.8;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  margin-top: 0px;
  margin-bottom: 0px;
}
.footer1 {
  flex: 1;
  padding-right: 2%;
  padding-left: 2%;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.footer-h3 {
  border-left: 4px solid #000000;
  text-align: left;
  padding-left: 10px;
  color: #000000;

  border-color: #80b530 !important;
  margin-top: 0px;
  margin-bottom: 10px;
}
.hyper-link p:hover {
  color: #379e15;
  cursor: pointer;
}
.footer1 h3 {
  font-size: 13px;
  margin-bottom: 1px;
  margin-top: 1px;
}
.footer1 .block {
  margin-bottom: 10px;
}
</style>
