<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Jadwal Matakuliah</h5>
      <form class="row g-3" @submit.prevent="update">
         <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="jdl.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">jadwal</label>
          <input
            type="time"
            class="form-control"
            id="inputPassword4"
            v-model="jdl.jadwal"
          />
          <div class="alert alert-danger" v-if="validation.jadwal">
            {{ validation.jadwal[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">matakuliah_id</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="masukan id matakuliah"
            v-model="jdl.matakuliah_id"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah_id">
            {{ validation.matakuliah_id[0] }}
          </div>
        </div>
       
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
    const jdl = reactive({
      id: "",
      jadwal: "",
      matakuliah_id: "",
     
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get('http://127.0.0.1:8000/api/jadwalmatakuliah/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        jdl.id = response.data.data.id
         jdl.jadwal = response.data.data.jadwal
          jdl.matakuliah_id = response.data.data.matakuliah_id
            jdl.id_matakuliah = response.data.data.id_matakuliah
          jdl.keterangan = response.data.data.keterangan
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update() {
      let id = jdl.id;
      let jadwal = jdl.jadwal;
      let matakuliah_id = jdl.matakuliah_id;
     
      axios.put('http://127.0.0.1:8000/api/Jadwalmatakuliah/${route.params.id}', {
         id: id,
          jadwal: jadwal,
          matakuliah_id: matakuliah_id,
         
        })
        .then(() => {
          router.push({
            name: "Homes",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      jdl,
      validation,
      router,
      update,
      route
    };
  },
};
</script>