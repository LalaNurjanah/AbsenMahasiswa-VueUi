<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit daftar semester</h5>
      <form class="row g-3" @submit.prevent="update">
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
    const smstr = reactive({
      id: "",
      semester: "",
      
     
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get('http://127.0.0.1:8000/api/daftar_semester/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        smstr.id = response.data.data.id
         smstr.semester = response.data.data.semester
         
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update() {
      let id = smstr.id;
      let semester = smstr.semester;
      
     
      axios.put('http://127.0.0.1:8000/api/daftar_semester/${route.params.id}', {
         id: id,
          semester: semester,
         
         
        })
        .then(() => {
          router.push({
            name: "awal",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      smstr,
      validation,
      router,
      update,
      route
    };
  },
};
</script>