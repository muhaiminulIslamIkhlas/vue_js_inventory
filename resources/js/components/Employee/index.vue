 <template>
    <div>
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">All Employee</li>
        </ol>
        <!-- Icon Cards-->
       <div class="row card container">
          <div class="card-header">
            <i class="fas fa-chart-area"></i>
            Employee Insert 
            <router-link to="/store-employee" class="btn btn-sm btn-info" id="add_new"> Add New</router-link>
          </div>





          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <label>Search</label>
                <input type="text" v-model="searchTerm">
                <table class="table table-bordered" id="" width="100%" cellspacing="0">
                  <thead>
                   <tr>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Phone</th>
                      <th>Salary</th>
                      <th>Joining date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Phone</th>
                      <th>Salary</th>
                      <th>Joining date</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                     <tr v-for="employee in filtersearch" :key="employee.id">
                      <td>{{ employee.name }}</td>
                      <td><img :src="employee.photo" id="em_photo"></td>
                      <td>{{ employee.phone }}</td>
                      <td>{{ employee.salary }}</td>
                      <td>{{ employee.joining_date }}</td>
                      <td>
                        <router-link :to="{name: 'edit-employee', params:{id: employee.id} }" class="btn btn-sm btn-info">Edit</router-link>
                        <a @click="deleteEmployee(employee.id)" class="btn btn-sm btn-danger">Delete</a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          







       </div>
   </div>
</template>

<script>
    export default {
      mounted(){
            if (!User.loggedIn()) {
               this.$router.push({ name:'/' })
            } 
        },
        created(){
        this.allEmployee();
        },
        data(){
          return{
            employees:[],
            searchTerm:'',         
          }
        },
       computed:{
         filtersearch(){
          return this.employees.filter(employee => {
             return employee.phone.match(this.searchTerm)
             return employee.name.match(this.searchTerm)
           })
         }
       },
        methods:{
          allEmployee(){
            axios.get('/api/employee/')
            .then(({data}) => (this.employees = data))
            .catch()
          },
          deleteEmployee(id){
            Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              axios.delete('/api/employee/'+id)
              .then(()=>{
                 this.employees = this.employees.filter(employee =>{
                    return employee.id !=id
                 })
              })
              .catch(()=>{
                 this.$router.push({name: 'employee'})
              })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
           })
          }
        },
      
    }
     
  
  
</script>

<style>
  
#add_new{
  float: right;
}
#em_photo{
  height: 40px;
  width: 40px;
}
</style>