<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">daftar semester</h5>
      <form class="row g-3" @submit.prevent="store">
       
 <div class="col-md-6">
          <label for="id" class="form-label">Id</label>
          <input type="text" class="form-control" id="id" v-model="smstr.id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">semester</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="smstr.semester"
          />
          <div class="alert alert-danger" v-if="validation.semester">
            {{ validation.semester_smstr[0] }}
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
    const smstr = reactive({
      id: "",
     semester: "",
      
     
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
    let id = smstr.id;
      let semester = smstr.jadwal;
     
     
      axios
        .post("http://127.0.0.1:8000/api/daftar_semester/", {
          
           id: id,
         semester:semester,
         
         
        })
        .then(() => {
          router.push({
            name: "awal",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      smstr,
      validation,
      router,
      store,
    };
  },
};
</script>