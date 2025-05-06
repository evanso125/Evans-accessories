import { Link } from "react-router-dom";

const Carousel = () => {
    return ( 
    <div>
        <section className="row">
            <div className="col-md-12">
                <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="slide3.jpeg" alt="" className="d-block w-100"/>
                        </div>

                        <div className="carousel-item">
                            <img src="slide1.jpeg" alt="" className="d-block w-100"/>
                        </div>
                        
                        <div className="carousel-item">
                            <img src="slide2.jpeg" alt="" className="d-block w-100"/>
                        </div>
                        
                    </div>

                    <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </Link>
                    
                    <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    </Link>
                    
                    <ul className="carousel-indicators">
                        <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default Carousel;