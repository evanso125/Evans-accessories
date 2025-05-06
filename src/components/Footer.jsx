const Footer = () => {
    return ( 
         
            <div>
                          <section className="row text-white bg-dark p-4">
                <div className="col-md-4">
                    <h4 className="text-center">About us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam facilis fugit incidunt natus cupiditate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptates deserunt harum tenetur enim molestias doloremque aut sapiente temporibus error nostrum pariatur nisi illum natus officiis, cum aspernatur voluptatem? Perspiciatis, ut tempora saepe ipsam aut molestiae.</p>
    
                </div>
    
                <div className="col-md-4">
                    <h4 className="text-center">Contact us</h4>
                    <form action="">
                        <input type="email" className="form-control" placeholder="Enter Your Email"/><br/>
                        <textarea name="" id="" className="form-control" placeholder="Leave a comment" rows="7"></textarea>
                    </form>
                </div>
    
                <div className="col-md-4">
                    <h4 className="text-center">Stay connected</h4>
                    <br/>
                    <a href="https://facebook.com">
                       <img src="public/facebook.png" width="30px" alt="" />
                    </a>
                    <a href="https://instagram.com">
                       <img src="path/to/instagram.jpeg" width="30px" alt=""/>
                    </a>
                    <a href="https://twitter.com>">
                          <img src="path/to/twitter.png" width="30px" alt=""/>
                    </a>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora voluptatibus, vel dolore dolorem totam temporibus. Illo repellat facere provident?</p>
    
                </div>
              </section>
              {/* <!-- end of footer --> */}
               <footer className="text-white bg-dark text-center p-2">
                <h5>Developed by Evans Mwangi&copy;2025. All rights reserved</h5>
                
               </footer>
            </div>
     );
}
 
export default Footer;