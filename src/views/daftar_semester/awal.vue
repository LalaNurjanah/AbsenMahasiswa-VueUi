<template>
  <div class="awal">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createdaftarsemester"
      >daftar semester Mahasiswa</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">semester</th>
         
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="(daftar_semester, index) in daftar_semester" :key="index">
          <td>{{ daftar_semester.id}}</td>
          <td>{{ daftar_semester.semester}}</td>
         
           
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editdaftar_semester', params:{id:daftar_semester.id}} "
              >Edit</router-link
            >
            <button @click.prevent="daftar_semesterDelete(daftar_semester.id)"  class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "awal",
  components: {
    Slider,
  },
  setup(){
    let daftar_semester = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/daftar_semester')
      .then(response => {
        daftar_semester.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      })
    })

  function daftar_semesterDelete(id){
    axios.delete(`http://127.0.0.1:8000/${id}`)
    .then(()=>{
      let z = this.daftar_semester.map(daftar_semester => daftar_semester.id).indexOf(id);
      this.daftar_semester.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      daftar_semester,
      daftar_semesterDelete
    }
  }
};
</script>
