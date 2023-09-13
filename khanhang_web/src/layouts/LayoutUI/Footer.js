import { FaPhoneSquareAlt, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FooterStyle.css";
// import Contact from "../../pages/frontend/Contact";


function Footer() {
    return ( 
        // <!-- ========================= FOOTER ========================= -->
        <footer class="section-footer border-top">
            <div class="container">
                <section class="footer-top  padding-y">
                    <div class="row">
                        <aside class="col-md-4 col-12">
                            <article class="mr-md-4">
                                <h5 class="title">Về Chúng Tôi</h5>
                                <ul class="list-icon">
                                    <li> <i class="icon fa fa-map-marker"> </i>542 Fake Street, Cityname 10021 Netheerlends </li>
                                    <li> <i class="icon fa fa-envelope"> </i> info@example.com</li>
                                    <li> <i class="icon fa fa-phone"> </i> (800) 060-0730, (800) 060-0730</li>
                                    <li> <i class="icon fa fa-clock"> </i>Mon-Sat 10:00pm - 7:00pm</li>
                                </ul>
                            </article>
                        </aside>
                        <aside class="col-md col-6">
                            <h5 class="title">Thông Tin Của Hàng</h5>
                            <ul class="list-unstyled">
                                <li> <Link to ="lien-he">Liên Hệ</Link></li>
                                <li> <a href="#">Tuyển Dụng</a></li>
                                <li> <a href="#">Find a store</a></li>
                                <li> <a href="#">Rules and terms</a></li>
                                <li> <a href="#">Sitemap</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h5 class="title">Chính Sách Cửa Hàng</h5>
                            <ul class="list-unstyled">
                                <li> <a href="#">Contact us</a></li>
                                <li> <a href="#">Money refund</a></li>
                                <li> <a href="#">Order status</a></li>
                                <li> <a href="#">Shipping info</a></li>
                                <li> <a href="#">Open dispute</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md-4 col-12">
                            <h5 class="title">Đăng kí nhận tin</h5>
                            
                            <form class="form-inline mb-3">
                                <input type="text" placeholder="Email" class="form-control" name=""/>
                                <button class="btn ml-2 btn-succes"> Subscribe</button>
                            </form>
                
                        </aside>
                    </div> 
                    {/* <!-- row.// --> */}
                </section>	
                {/* <!-- footer-top.// --> */}
        
                {/* <section class="footer-bottom border-top row">
                    <div class="col-md-6">
                        <p class="mb-0">
                            <a href="">Terms and Conditions</a> | 
                            <a href="">Privacy</a> | 
                            <a href="">Cookies</a>
                        </p>
                    </div>
                    <div class="col-md-6 text-md-right">
                        <i class="fab fa-lg fa-cc-visa"></i>
                        <i class="fab fa-lg fa-cc-paypal"></i>
                        <i class="fab fa-lg fa-cc-mastercard"></i>
                    </div>
                </section> */}

            </div>
            {/* <!-- //container --> */}
        </footer>
            );
}

export default Footer;