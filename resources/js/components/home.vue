  <template>
  <div>



  <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <!-- Content Row -->
          <div class="row">

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Today Sell</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">BDT {{ todaysell }}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Today Collection</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">BDT {{ collection }}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Today Due</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">BDT {{ due }}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Today Expenses</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">BDT {{ expense }}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>





   
</div>

<div class="card-body">
              <div class="table-responsive">
                <h4 class="text-danger">Stocked Out Product</h4>
                <table class="table table-stripped" id="" width="100%" cellspacing="0">

                  <thead>
                    <tr>
                      <th>Name</th> 
                      <th>Code</th>
                      <th>Photo</th>
                      <th>Status</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                
                  <tbody>

                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.product_name}}</td>
                      <td>{{ product.product_code}}</td>
                      <td><img :src="product.image" id="em_photo"></td>
                      <td v-if="product.product_quantity >= 1"><span class="badge badge-success">Availble</span></td>
                      <td v-else=""><span class="badge badge-danger">Stock Out</span></td>
                      <td>{{ product.product_quantity }}</td>

                    </tr>
        
                  </tbody>
                </table>
              </div>
            </div>


  </div>
</template>
<script type="text/javascript">
export default {
 created(){
  if(!User.loggedIn()){
    this.$router.push({name : '/'})
  }
 },
 data(){
  return{
    todaysell:'',
    collection:'',
    expense:'',
    due:'',
    products:''
  }
 },
 mounted(){
    this.TodaySell();
    this.TodayCollection();
    this.TodayDue();
    this.TodayExpense();
    this.StockOut();
 },
 methods:{
    TodaySell(){
      axios.get('/api/today/sell')
      .then(({data})=>(this.todaysell=data))
    },
    TodayCollection(){
      axios.get('/api/today/collection')
      .then(({data})=>(this.collection=data))
    },
     TodayDue(){
      axios.get('/api/today/due')
      .then(({data})=>(this.due=data))
    },
     TodayExpense(){
      axios.get('/api/today/expense')

      .then(({data})=>(this.expense=data))
    },
     TodayExpense(){
      axios.get('/api/today/expense')
      
      .then(({data})=>(this.expense=data))
    },
     StockOut(){
      axios.get('/api/stockout')
      
      .then(({data})=>(this.products=data))
    },
 },
  }
  
</script>
<style type="text/css"></style>