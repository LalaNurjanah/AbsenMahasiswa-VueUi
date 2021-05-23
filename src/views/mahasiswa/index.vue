<template>
  <div class="Index">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createmahasiswa"
      >Daftar Mahasiswa</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nama_mahasiswa</th>
          <th scope="col">Alamat</th>
          <th scope="col">No_tlp</th>
           <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mahasiswa, Index) in mahasiswa" :key="Index">
          <td>{{ mahasiswa.id}}</td>
          <td>{{ mahasiswa.nama_mahasiswa}}</td>
          <td>{{ mahasiswa.alamat}}</td>
           <td>{{ mahasiswa.no_tlp}}</td>
          <td>{{ mahasiswa.email}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editmahasiswa', params:{id:mahasiswa.id}} "
              >Edit</router-link
            >
            <button @click.prevent="mahasiswaDelete(mahasiswa.id)"  class="btn btn-danger">delete</button>
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
  name: "Index",
  components: {
    Slider,
  },
  setup(){
    let mahasiswa = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/mahasiswa')
      .then(response => {
        mahasiswa.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      })
    })

  function mahasiswaDelete(id){
    axios.delete(`http://127.0.0.1:8000/${id}`)
    .then(()=>{
      let z = this.mahasiswa.map(mahasiswa => mahasiswa.id).indexOf(id);
      this.mahasiswa.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      mahasiswa,
      mahasiswaDelete
    }
  }
};
</script>
