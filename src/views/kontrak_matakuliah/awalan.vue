<template>
  <div class="awalan">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createkontrakmatakuliah"
      >silahkan lakukan kontrak matkuliah</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">mahasiswa_id</th>
          <th scope="col">semester_id</th>
         
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kontrak_matakuliah, index) in kontrak_matakuliah" :key="index">
          <td>{{ kontrak_matakuliah.mahasiswa_id}}</td>
          <td>{{ kontrak_matakuliah.semester_id}}</td>
         
           
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editkontrak_matakuliah', params:{id:kontrak_matakuliah.id}} "
              >Edit</router-link
            >
            <button @click.prevent="kontrak_matakuliahDelete(kontrak_matakuliah.id)"  class="btn btn-danger">delete</button>
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
  name: "awalan",
  components: {
    Slider,
  },
  setup(){
    let kontrak_matakuliah = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/kontrak_matakuliah')
      .then(response => {
        kontrak_matakuliah.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      })
    })

  function kontrak_matakuliahDelete(id){
    axios.delete(`http://127.0.0.1:8000/${id}`)
    .then(()=>{
      let z = this.kontrak_matakuliah.map(kontrak_matakuliah => kontrak_matakuliah.id).indexOf(id);
      this.kontrak_matakuliah.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      kontrak_matakuliah,
      kontrak_matakuliahDelete
    }
  }
};
</script>
