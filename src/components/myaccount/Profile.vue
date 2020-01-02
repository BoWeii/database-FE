<template>
  <div id="Profile" class="profile">
	<title>Profile</title>
    <el-form>
      <h2 style="font-size:30px;">Profile</h2>
      <div class="profile-column">
        <label class="prfile-lab">E-mail</label>
        <el-input class="profile-input" style v-model="model.email"></el-input>
      </div>
      <div class="profile-column">
        <label class="prfile-lab">UserName</label>
        <el-input class="profile-input" style v-model="model.nickname"></el-input>
      </div>
      <div class="profile-column">
        <label class="prfile-lab">Location</label>
        <el-input class="profile-input" style v-model="model.location"></el-input>
      </div>
      <div class="profile-column">
        <label class="prfile-lab">Phone</label>
        <el-input class="profile-input" style v-model="model.phone"></el-input>
      </div>
      <el-button style="align-items: center;" type="primary" native-type="submit" block>save</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      model: {
        nickname: "",
        location: "",
        phone: "",
        email: ""
      }
    };
  }
};
</script>
<style header>
.profile {
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
.profile .prfile-lab {
  margin: 0px;
  justify-content: start;
  display: flex;
  padding: 12px 5px;
  width: 120px;
}
.profile .profile-input {
  border: 1px solid #323232 !important;
  border-radius: 5px;
}

.profile-column {
  flex-direction: row;
  display: flex;
  margin-bottom: 50px;
}
</style>