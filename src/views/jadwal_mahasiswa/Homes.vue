<template>
  <div class="homes">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createjadwalmatakuliah"
      >Jadwal Mahasiswa</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Jadwal</th>
          <th scope="col">matakuliah_id</th>
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jadwal_matakuliah, index) in jadwal_matakuliah" :key="index">
          <td>{{ jadwal_matakuliah.id}}</td>
          <td>{{ jadwal_matakuliah.jadwal}}</td>
          <td>{{ jadwal_matakuliah.matakuliah_id}}</td>
           
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editjadwal_matakuliah', params:{id:jadwal_matakuliah.id}} "
              >Edit</router-link
            >
            <button @click.prevent="jadwal_matakuliahDelete(jadwal_matakuliah.id)"  class="btn btn-danger">delete</button>
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
  name: "Homes",
  components: {
    Slider,
  },
  setup(){
    let jadwal_matakuliah = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/jadwal_matakuliah')
      .then(response => {
        jadwal_matakuliah.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      })
    })

  function jadwal_matakuliahDelete(id){
    axios.delete(`http://127.0.0.1:8000/${id}`)
    .then(()=>{
      let z = this.jadwal_matakuliah.map(jadwal_matakuliah => jadwal_matakuliah.id).indexOf(id);
      this.jadwal_matakuliah.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      jadwal_matakuliah,
      jadwal_matakuliahDelete
    }
  }
};
</script>
