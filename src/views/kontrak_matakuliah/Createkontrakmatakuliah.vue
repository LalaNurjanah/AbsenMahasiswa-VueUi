<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">kontrak semester</h5>
      <form class="row g-3" @submit.prevent="store">
       
 <div class="col-md-6">
          <label for="id" class="form-label">mahasiswa_id</label>
          <input type="text" class="form-control" id="id" v-model="kntrk.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">semester_id</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="kntrk.semester_id"
          />
          <div class="alert alert-danger" v-if="validation.semester_id">
            {{ validation.semester_kntrk[0] }}
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
    const kntrk = reactive({
      mahasiswa_id: "",
     semester_id: "",
      
     
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
    let mahasiswa_id = kntrk.mahasiswa_id;
      let semester_id = kntrk.semester_id;
     
     
      axios
        .post("http://127.0.0.1:8000/api/kontrak_mahasiswa/", {
          
           mahasiswa_id: mahasiswa_id,
         semester_id:semester_id,
         
         
        })
        .then(() => {
          router.push({
            name: "awalan",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      kntrk,
      validation,
      router,
      store,
    };
  },
};
</script>