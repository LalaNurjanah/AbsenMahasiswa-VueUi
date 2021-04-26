<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add absen</h5>
      <form class="row g-3" @submit.prevent="store">
       
 <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="abs.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">WaktuAbsen</label>
          <input
            type="time"
            class="form-control"
            id="inputPassword4"
            v-model="abs.waktu"
          />
          <div class="alert alert-danger" v-if="validation.waktu">
            {{ validation.waktu_absen[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Mahasiwa_id</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="masukan id mahasiswa"
            v-model="abs.mahasiswa_id"
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
            v-model="abs.matakuliah_id"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah_id">
            {{ validation.matakuliah_id[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan keterangan"
            v-model="abs.keterangan"
          />
          <div class="alert alert-danger" v-if="validation.keterangan">
            {{ validation.keterangan[0] }}
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
    const abs = reactive({
      id: "",
      waktu_absen: "",
      id_mahasiswa: "",
      id_matakuliah: "",
      keterangan: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
    let id = abs.id;
      let waktu_absen = abs.waktu_absen;
      let id_mahasiswa = abs.id_mahasiswa;
      let id_matakuliah = abs.id_matakuliah;
      let keterangan = abs.keterangan;

      axios
        .post("http://127.0.0.1:8000/api/absen/", {
          
           id: id,
          waktu_absen: waktu_absen,
          id_mahasiswa: id_mahasiswa,
          id_matakuliah: id_matakuliah,
          keterangan: keterangan,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      abs,
      validation,
      router,
      store,
    };
  },
};
</script>