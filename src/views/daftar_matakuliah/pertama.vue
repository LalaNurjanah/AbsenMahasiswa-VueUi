<template>
  <div class="pertama">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/creatematakuliah"
      >Tambahkan matakuliah</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nama_matakuliah</th>
          <th scope="col">Sks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Daftar_matakuliah, pertama) in Daftar_matakuliah" :key="pertama">
          <td>{{ Daftar_matakuliah.id}}</td>
          <td>{{ Daftar_matakuliah.nama_matakuliah}}</td>
          <td>{{ Daftar_matakuliah.sks}}</td>
         
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editmatakuliah', params:{id:Daftar_matakuliah.id}} "
              >Edit</router-link
            >
            <button @click.prevent="Daftar_matakuliahDelete(Daftar_matakuliah.id)"  class="btn btn-danger">delete</button>
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
  name: "pertama",
  components: {
    Slider,
  },
  setup(){
    let Daftar_matakuliah = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/Daftar_matakuliah')
      .then(response => {
        Daftar_matakuliah.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      })
    })

  function Daftar_matakuliahDelete(id){
    axios.delete(`http://127.0.0.1:8000/${id}`)
    .then(()=>{
      let z = this.Daftar_matakuliah.map(Daftar_matakuliah => Daftar_matakuliah.id).pertamaOf(id);
      this.Daftar_matakuliah.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      Daftar_matakuliah,
      Daftar_matakuliahDelete
    }
  }
};
</script>
