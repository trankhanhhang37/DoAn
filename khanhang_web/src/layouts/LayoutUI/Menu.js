function Menu() {
    return (
<>
<nav class="navbar navbar-main navbar-expand-lg border-bottom">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav4" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav4">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link pl-0" href="#"> <strong>Trang Chủ</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Fashion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Supermarket</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Electronics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Baby &amp Toys</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Fitness sport</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Foods and Drink</a>
                                    <a class="dropdown-item" href="#">Home interior</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Category 1</a>
                                    <a class="dropdown-item" href="#">Category 2</a>
                                    <a class="dropdown-item" href="#">Category 3</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- collapse .// --> */}
                </div>
                {/* <!-- container .// --> */}
            </nav>

</>
    );

}

export default Menu;