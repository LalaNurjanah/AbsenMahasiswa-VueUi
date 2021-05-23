<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Tambah Matakuliah</h5>
      <form class="row g-3" @submit.prevent="store">
       
 <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="matkul.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama_matakuliah</label>
          <input34567890-
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="matkul.nama"
          />
          <div class="alert alert-danger" v-if="validation.nama">
            {{ validation.nama_matakuliah[0] }}
          </div>
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
          <div class="alert alert-danger" v-if="validation.sks">
            {{ validation.sks[0] }}
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
    const matkul = reactive({
      id: "",
      nama_matakuliah: "",
      sks: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
    let id = matkul.id;
      let nama_matakuliah = matkul.nama_matakuliah;
      let sks = matkul.sks;
     

      axios
        .post("http://127.0.0.1:8000/api/matakuliah/", {
          
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
          console.log(error);
        });
    }
    return {
      matakuliah,
      validation,
      router,
      store,
    };
  },
};
</script>