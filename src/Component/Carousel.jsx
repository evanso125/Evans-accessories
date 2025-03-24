const Carousel = () => {
    return ( 
       
        <section class="row">
      <div class="col-md-12">
        <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="public/images/download(4).jpeg" alt="" />
            </div>

            <div class="carousel-item">
              
            </div>

            <div class="carousel-item">
              
            </div>
          </div>

          <a href="#mycarousel"
           class="carousel-control-prev"
           data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>

          <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>

          <ol class="carousel-indicators">
            <li data-bs-target="#mycarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
    );
}
 
export default Carousel;