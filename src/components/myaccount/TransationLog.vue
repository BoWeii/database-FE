<template>
  <div id="TransactionLog" class="TransactionLog">
    <h2>TransactionLog</h2>
    <div id="TransactionLog">
    <table id="transactiontable" border="1">
      <tr>
        <td>
        seller
        </td>
        <td>
        buyer
        </td>
        <td>
        product name
        </td>
        <td>
        date
        </td>
      </tr>
      <tr  v-for="(item, index) in member" :key="index">
        <td>
        {{ item.seller }}
        </td>
        <td>
        {{ item.buyer }}
        </td>
        <td>
        {{ item.product_name }}
        </td>
        <td>
        {{ item.date }}
        </td>
      </tr>

    </table>
  </div>
  </div>
</template>

<script>
export default {
  name: "TransactionLog",
  data() {
      return {
        member:[
          {
            buyer:'mm',
            seller:'pussy',
            product_name:'Adam',
            date:'2019.10.10'
          },
          {
            buyer:'mm',
            seller:'dog',
            product_name:'Jack',
            date:'2019.8.10'
          },
          {
            buyer:'mm',
            seller:'pussy',
            product_name:'Candy',
            date:'2019.8.10'
          },
          {
            buyer:'mm',
            seller:'pussy',
            product_name:'Louis',
            date:'2019.8.10'
          },
          {
            buyer:'mm',
            seller:'pussy',
            product_name:'Lurry',
            date:'2019.8.10'
          }
        ]
      }
    }
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