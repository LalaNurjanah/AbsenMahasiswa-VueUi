<template>
  <div class="home">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createabsen"
      >Silakan Absen</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">waktu_absen</th>
          <th scope="col">mahasiswa_id</th>
          <th scope="col">matakuliah_id</th>
           <th scope="col">keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(absen, index) in absen" :key="index">
          <td>{{ absen.id}}</td>
          <td>{{ absen.waktu_absen}}</td>
          <td>{{ absen.mahasiswa_id}}</td>
           <td>{{ absen.matakuliah_id}}</td>
          <td>{{ absen.keterangan}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editabsen', params:{id:absen.id}} "
              >Edit</router-link
            >
            <button @click.prevent="absenDelete(absen.id)"  class="btn btn-danger">delete</button>
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
  name: "Home",
  components: {
    Slider,
  },
  setup(){
    let absen = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/absen')
      .then(response => {
        absen.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      })
    })

  function absenDelete(id){
    axios.delete(`http://127.0.0.1:8000/${id}`)
    .then(()=>{
      let z = this.absen.map(absen => absen.id).indexOf(id);
      this.absen.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      absen,
      absenDelete
    }
  }
};
</script>
