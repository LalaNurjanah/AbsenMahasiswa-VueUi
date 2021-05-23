<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Daftar Matakuliah</h5>
      <form class="row g-3" @submit.prevent="update">
         <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="matkul.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama_matakuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="matkul.nama"
          />
          <div class="alert alert-danger" v-if="validation.nama">
            {{ validation.nama_matakuliah[0] }}
          </div>
        
        <div class="col-12">
          <label for="inputAddress" class="form-label">Sks</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="masukan sks"
            v-model="matkul.sks"
          />
         
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const matkul = reactive({
      id: "",
      nama_matakuliah: "",
      sks: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get('http://127.0.0.1:8000/api/matakuliah/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        matkul.id = response.data.data.id
         matkul.nama_matakuliah = response.data.data.nama_matakuliah
          matkul.sks = response.data.data.sks
           
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update() {
      let id = matkul.id;
      let nama_matakuliah = matkul.nama_matakuliah;
      let sks = matkul.sks;
     
      axios.put('http://127.0.0.1:8000/api/matakuliah/${route.params.id}', {
         id: id,
          nama_matakuliah: nama_matakuliah,
          sks: sks,
        
        })
        .then(() => {
          router.push({
            name: "pertama",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      matkul,
      validation,
      router,
      update,
      route
    };
  },
};
</script>