<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit mahasiswa</h5>
      <form class="row g-3" @submit.prevent="update">
         <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="maha.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama_mahasiswa</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="maha.nama"
          />
          <div class="alert alert-danger" v-if="validation.nama">
            {{ validation.nama_mahasiswa[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Alamat</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan alamat"
            v-model="maha.alamat"
          />
          <div class="alert alert-danger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">No_tlp</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="masukan no_tlp"
            v-model="maha.no_tlp"
          />
          <div class="alert alert-danger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">email</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan email"
            v-model="maha.email"
          />
          <div class="alert alert-danger" v-if="validation.email">
            {{ validation.email[0] }}
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
    const maha = reactive({
      id: "",
      nama_mahasiswa: "",
      alamat: "",
      no_tlp: "",
      email: "",
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get('http://127.0.0.1:8000/api/mahasiswa/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        maha.id = response.data.data.id
         maha.nama_lengkap = response.data.data.nama_lengkap
          maha.alamat = response.data.data.alamat
            maha.no_tlp = response.data.data.no_tlp
          maha.email = response.data.data.email
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update() {
      let id = maha.id;
      let nama_lengkap = maha.nama_lengkap;
      let alamat = maha.alamat;
      let no_tlp = maha.no_tlp;
      let email = maha.email;
      axios.put('http://127.0.0.1:8000/api/mahasiswa/${route.params.id}', {
         id: id,
          nama_lengkap: nama_lengkap,
          alamat: alamat,
          no_tlp: no_tlp,
          email: email,
        })
        .then(() => {
          router.push({
            name: "Index",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      maha,
      validation,
      router,
      update,
      route
    };
  },
};
</script>