import React from "react";

function ProductHome() {

    return (
        <>
        <div className="product-home row">
        <aside class="col-lg col-md-3 row-lg-grow-0">
        <nav className="nav-product-side">
            <h6 class="title-category text-center"> MOON CAKE <i class="d-md-none icon fa fa-chevron-down"></i></h6>
            {/* <ul class="menu-category">
                <li><a href="#">Bánh Ngọt </a></li>
                <li><a href="#">Bánh Kem 1 Tầng</a></li>
                <li><a href="#">Bánh Kem 2 Tầng</a></li>
                <li><a href="#">Bánh Theo Yêu Cầu</a></li>
                <li><a href="#">Bánh Nướng</a></li>
                <li><a href="#">Bánh Đông Sương</a></li>
                <li><a href="#">Bánh Trái Cây</a></li>
                <li class="has-submenu"><a href="#">More items</a>
                    <ul class="submenu">
                        <li><a href="#">Submenu name</a></li>
                        <li><a href="#">Great submenu</a></li>
                        <li><a href="#">Another menu</a></li>
                        <li><a href="#">Some others</a></li>
                    </ul>
                </li>
            </ul> */}
        </nav>
        </aside>

        <div className="product col-md-9 col-xl-9 col-lg-9"> 

        <div className="product-new">
            <h3 className="text-center">New Products</h3>
            <div class="row">
                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> NEW </span>
                            <img src={require("../../../assets/images/bk1.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> NEW </span>
                            <img src={require("../../../assets/images/bk1.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> NEW </span>
                            <img src={require("../../../assets/images/bk1.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> NEW </span>
                            <img src={require("../../../assets/images/bk1.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary">  Details </a>

                        </figcaption>
                    </figure>
                </div>



                {/* <!-- col.// --> */}





            </div>
        </div>

        <div className="product-bestseller">
            <h3 className="text-center">Best Sellers Products</h3>
            <div class="row">
                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Best Sellers </span>
                            <img src={require("../../../assets/images/duahau.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Best Sellers </span>
                            <img src={require("../../../assets/images/duahau.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Best Sellers </span>
                            <img src={require("../../../assets/images/duahau.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Best Sellers </span>
                            <img src={require("../../../assets/images/duahau.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                            <div class="price-wrap">
                                <span class="price">255.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>


                {/* <!-- col.// --> */}





            </div>
        </div>

        <div className="product-bestseller">
            <h3 className="text-center">Moon Cake</h3>
            <div class="row">
            <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Moon Cake </span>
                            <img src={require("../../../assets/images/tt1.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                            <div class="price-wrap">
                                <span class="price">80.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Moon Cake </span>
                            <img src={require("../../../assets/images/tt2.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                            <div class="price-wrap">
                                <span class="price">80.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Moon Cake </span>
                            <img src={require("../../../assets/images/tt3.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                            <div class="price-wrap">
                                <span class="price">80.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> Moon Cake </span>
                            <img src={require("../../../assets/images/tt4.jpg")} />
                        </div>
                        {/* <!-- img-wrap.// --> */}
                        <figcaption class="info-wrap">
                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                            <div class="price-wrap">
                                <span class="price">80.000</span>
                                <small class="text-muted">/bánh</small>
                            </div>
                            {/* <!-- price-wrap.// --> */}

                            {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>

                            <p class="text-muted ">Guangzhou Yichuang Electronic Co</p> */}

                            <hr />

                            {/* <p class="mb-3">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 2 Years </span>
                                <span class="tag"> 23 reviews </span>
                                <span class="tag"> Japan </span>
                            </p> */}

                            <label class="custom-control mb-3 custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label">Add Cart
                                </div>
                            </label>

                            <a href="#" className="btn btn-primary ">  Details </a>

                        </figcaption>
                    </figure>
                </div>


                {/* <!-- col.// --> */}





            </div>
        </div>


        </div>

        </div>
        </>

    );
}
export default ProductHome;
