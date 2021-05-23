<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit kontrak mahasiswa</h5>
      <form class="row g-3" @submit.prevent="update">
         <div class="col-md-6">
          <label for="id" class="form-label">mahasiswa_id</label>
          <input type="text" class="form-control" id="id" v-model="kntrk.mahasiswa_id" />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">semester_id/label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="kntrk.semester"
          />
          <div class="alert alert-danger" v-if="validation.semester">
            {{ validation.semester[0] }}
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
    const kntrk = reactive({
      mahasiswa_id: "",
      semester_id: "",
     
     
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get('http://127.0.0.1:8000/api/kontrak_mahasiswa/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        kntrk.mahasiswa_id = response.data.data.mahasiswa_id
         kntrk.semester_id = response.data.data.semester_id
         
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update() {
      let mahasiswa_id = kntrk.mahasiswa_id;
      let semester_id = kntrk.semester_id;
    
     
      axios.put('http://127.0.0.1:8000/api/kontrak_mahasiswa/${route.params.id}', {
         mahasiswa_id: mahasiswa_id,
          semester_id: semester_id,
         
         
        })
        .then(() => {
          router.push({
            name: "awalan",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      kntrk,
      validation,
      router,
      update,
      route
    };
  },
};
</script>