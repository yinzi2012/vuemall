<template>
  <div id="app">
    <button @click="login">login</button>
    <button @click="list">list</button>
    <button @click="truemultidata">post</button>
    <button @click="multidata">remove</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getHomeData} from './network/home'
  export default {
    methods: {
      login() {
        axios.get("/api/login").then(response => {
          if (response.data) {
            console.log(response.data)
            alert(response.data.success + ',' + response.data.message)
          }
        })
      },

      list() {
        axios.get("/api/list").then(response => {
          if (response.data) {
            console.log(response.data)
            let list1 = response.data[0].id + ',' + response.data[0].sex + ',' + response.data[0].username
            let list2 = response.data[1].id + ',' + response.data[1].sex + ',' + response.data[1].username
            alert(list1 + '\n' + list2)
          }
        })
      },
      truemultidata(){
        axios.get("http://123.207.32.32:8000/home/multidata").then(response => {
          if (response.data) {
            console.log(response.data)

          }
        })
      },

      multidata() {
        // axios.get("/api/home/multidata").then(response => {
        //   if (response.data) {
        //     console.log(response.data)
        //   }
        // })
        getHomeData({url:"/api/home/datas"}).then(res=>{
          if(res.data)
            console.log(res.data)
        })
      },


      post() {
        axios.post("/api/post").then(response => {
          if (response.data) {
            console.log(response.data)
            alert(response.data.status + ',' + response.data.code)
          }
        })
      },

      remove() {
        axios.delete("/api/remove").then(response => {
          if (response.data) {
            console.log(response.data)
            alert(response.data.status + ',' + response.data.message)
          }
        })
      }
    }
  }
</script>

<style>

</style>
