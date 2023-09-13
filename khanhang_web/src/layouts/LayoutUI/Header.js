import "./HeaderStyle.css";
 
function Header() {
    return (
        <header class="section-header">
            <nav class="navbar p-md-0 navbar-expand-sm navbar-light border-bottom">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTop4">
                        <ul class="navbar-nav mr-auto">
                            
                            <a href="#" class="btn btn-icon btn-light"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="btn btn-icon btn-light"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="btn btn-icon btn-light"><i class="fab fa-youtube"></i></a>
                        </ul>


                        <ul class="navbar-nav ">
                            <li><a href="#" class="nav-link"> <i class="fa fa-comment"></i> Phản Hồi </a></li>
                            <li><a href="#" class="nav-link"> <i class="fa fa-phone"></i> Trực Tuyến </a></li>
                        </ul>
                        {/* <!-- list-inline //  --> */}
                    </div>
                    {/* <!-- navbar-collapse .// --> */}
                </div>
                {/* <!-- container //  --> */}
            </nav>

            <section class="header-main border-bottom">
                <div class="container">
                    <div class="row row-sm align-items-center">
                        <div class="col-lg-2 col-md-3 col-6">
                            <a href="http://bootstrap-ecommerce.com" class="brand-wrap">
                            <img src={require("../../assets/images/SUSUSTORE1.png")}style={{ width: '150px',height:'100px' }} className="img-fluid1"/>
                            </a>
                            {/* <!-- brand-wrap.// --> */}
                        </div>
                        <div class="col-lg col-sm col-md col-6 flex-grow-0">
                            {/* <div class="category-wrap dropdown d-inline-block float-md-right">
			<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> 
				<i class="fa fa-bars"></i> All category 
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Machinery / Mechanical Parts / Tools </a>
				<a class="dropdown-item" href="#">Consumer Electronics / Home Appliances </a>
				<a class="dropdown-item" href="#">Auto / Transportation</a>
				<a class="dropdown-item" href="#">Apparel / Textiles / Timepieces </a>
				<a class="dropdown-item" href="#">Home & Garden / Construction / Lights </a>
				<a class="dropdown-item" href="#">Beauty & Personal Care / Health </a> 
			</div>
		</div>   */}
                            {/* <!-- category-wrap.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg  col-md-6 col-sm-12 col">
                            <form action="#" class="search-header">
                                <div class="input-group w-100">
                                    <input type="text" class="form-control"  placeholder="Search" />
                                    
                                    <div class="input-group-append">
                                        <button class="btn btn-gre" style={{ width: '60px' }}type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- search-wrap .end// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg-3 col-sm-12 col-md-12 col-12">
                            <div class="widgets-wrap float-md-right">
                                <a href="#" class="widget-header mr-2">
                                    <i class="icon icon-sm rounded-circle  fa fa-shopping-cart"></i>
                                    <span class="notify">2</span>
                                </a>
                                <a href="#" class="widget-header mr-2">
                                    <i class="icon icon-sm rounded-circle fa fa-heart"></i>
                                </a>
                                <div class="widget-header dropdown">
                                    <a href="#" data-toggle="dropdown" data-offset="20,10">
                                        <div class="icontext">
                                            <div class="icon">
                                                <i class="icon-sm rounded-circle fa fa-user"></i>
                                            </div>
                                            <div class="text">
                                                <small class="text-muted">Sign in | Join</small>
                                                <div>My account <i class="fa fa-caret-down"></i> </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <form class="px-4 py-3">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" placeholder="email@example.com" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Password" />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Sign in</button>
                                        </form>
                                        <hr class="dropdown-divider" />
                                        <a class="dropdown-item" href="#">Have account? Sign up</a>
                                        <a class="dropdown-item" href="#">Forgot password?</a>
                                    </div>
                                    {/* <!--  dropdown-menu .// --> */}
                                </div>
                                {/* <!-- widget-header .// --> */}
                            </div>
                            {/* <!-- widgets-wrap.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                    </div>
                    {/* <!-- row.// --> */}
                </div>
                {/* <!-- container.// --> */}
            </section>
            {/* <!-- header-main .// --> */}


            {/* <!-- navbar main end.// --> */}
            {/* <!-- section-header.// --> */}
        </header>


    );

}

export default Header;