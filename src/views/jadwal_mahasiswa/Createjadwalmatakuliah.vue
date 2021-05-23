<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Jadwal Mahasiswa</h5>
      <form class="row g-3" @submit.prevent="store">
       
 <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="jdl.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Jadwal</label>
          <input
            type="time"
            class="form-control"
            id="inputPassword4"
            v-model="jdl.jadwal"
          />
          <div class="alert alert-danger" v-if="validation.jadwal">
            {{ validation.jadwal_jdl[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Mahasiwa_id</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="masukan id mahasiswa"
            v-model="jdl.mahasiswa_id"
          />
          <div class="alert alert-danger" v-if="validation.mahasiswa_id">
            {{ validation.mahasiswa_id[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Matakuliah_id</label>
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
          <button type="submit" class="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
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

    function store() {
    let id = jdl.id;
      let jadwal = jdl.jadwal;
      let matakuliah_id = jdl.matakuliah_id;
     
      axios
        .post("http://127.0.0.1:8000/api/jadwal_matakuliah/", {
          
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
          console.log(error);
        });
    }
    return {
      jdl,
      validation,
      router,
      store,
    };
  },
};
</script>