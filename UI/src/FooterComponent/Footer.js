import './Footer.css';

function Footer() {
  return (
   <>
   {/* Footer Start */}
   <div class="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{"marginTop": "6rem"}}>
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Address</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>X Street,XXX,XXX</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>XXX XXX XXXX</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>demo@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
               
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Links</h4>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Our Services</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                    <a class="btn btn-link" href="">Support</a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Project Management System </a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <a class="border-bottom">  Designed By Yatish</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer End */}
   </>
  );
}

export default Footer;