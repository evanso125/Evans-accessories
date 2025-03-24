const NavBar = () => {
    return (
        <section class="row">
    <div class="col-md-12">
      <div class="navbar navbar-expand-md navbar-light bg-light">

        <a href="/" class="navbar-brand">Accessories collections</a>
        <button class="navbar-toggler" 
        data-bs-target="#navbarcollapse" 
        data-bs-toggle="collapse">

          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarcollapse">
        
         <div class="navbar-nav">
          
          <a href="/addproduct" class="nav-links">Add Products</a>
         </div>

         <div class="navbar-nav ms-auto">
          <a href="/signin" class="nav-link">login</a>
          <a href="/signup" class="nav-link">register</a>
         </div>
        </div>
      </div>
    </div>
   </section>
     );
}
 
export default NavBar;