<template>
	<div id="Discount-content">
		<div class='Discount-cotent-text'>
			<h1>折扣修改區啦幹</h1>
            <table id="DiscountContent" border="1">
      <tr>
        <td>
        discount_kind
        </td>
        <td>
        discount
        </td>
        <td>
        start_date
        </td>
        <td>
        end_date
        </td>
      </tr>
      <tr  v-for="(item, index) in member" :key="index">
        <td>
        {{ item.discount_kind }}
        </td>
        <td>
        {{ item.discount }}
        </td>
        <td>
        {{ item.start_date }}
        </td>
        <td>
        {{ item.end_date }}
        </td>
		<td>
		<el-button type='success'>edit</el-button>	
		</td>
      </tr>

    </table>
			<el-button type='primary'>season</el-button>
            <el-button type='primary'>shipping</el-button>
            <el-button type='primary'>full</el-button>
		</div>
	</div>
</template>

<script>
	export default {
	name: "DiscountContent.vue",
	};
</script>

<style header>
.Profile {
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  max-width: 320px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 225, 225);
  padding: 50px 30px;
}
.forget:hover {
  color: #379e15;
  cursor: pointer;
}
.link {
  flex-direction: row;
  display: flex;
}
#transactiontable
{
  color: #379e15;
}
</style>