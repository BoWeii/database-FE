<template>
  <div id="ChangePassword" class="ChangePassword">
    <el-form>
      <h2 style="font-size:30px;">ChangePassword</h2>
      <div class="ChangePassword-column">
        <label class="prfile-lab">password</label>
        <el-input class="ChangePassword-input" type="password" style v-model="model.newpassword1"></el-input>
      </div>
      <div class="ChangePassword-column">
        <label class="prfile-lab">passwordagain</label>
        <el-input class="ChangePassword-input" type="password" style v-model="model.newpassword2"></el-input>
      </div>
      
      
      <el-button
        :loading="loading"
        style="align-items: center;"
        type="primary"
        native-type="submit"
        block
      >save</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      model: {
        neewpassword1: "",
        newpassword12: "",
        
      }
    };
  }
};
</script>
<style header>
.ChangePassword {
  position: absolute;
  top: 0;
  right: 0;
  height: 94%;
  width: 90%;
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
}
.forget:hover {
  color: #379e15;
  cursor: pointer;
}
.link {
  flex-direction: row;
  display: flex;
}
.ChangePassword .prfile-lab {
  margin: 0px;
  justify-content: start;
  display: flex;
  padding: 12px 5px;
  width: 120px;
}
.ChangePassword .ChangePassword-input {
  border: 1px solid #323232 !important;
  border-radius: 5px;
}

.ChangePassword-column {
  flex-direction: row;
  display: flex;
  margin-bottom: 50px;
}
</style>