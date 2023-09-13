import React from "react";

function CategoryHome() {

    // const [sliders, setSliders] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await sliderservice.getSlider_byPosition('main').then(function (result) {
    //             setSliders(result.data.sliders)
    //         });
    //     })();
    // }, []);
    return (
        <aside class="col-lg col-md-3 flex-lg-grow-0">
        <nav class="nav-home-aside">
            <h6 class="title-category">MY MARKETS <i class="d-md-none icon fa fa-chevron-down"></i></h6>
            <ul class="menu-category">
                <li><a href="#">Fashion and clothes</a></li>
                <li><a href="#">Automobile and motors</a></li>
                <li><a href="#">Gardening and agriculture</a></li>
                <li><a href="#">Electronics and tech</a></li>
                <li><a href="#">Packaginf and printing</a></li>
                <li><a href="#">Home and kitchen</a></li>
                <li><a href="#">Digital goods</a></li>
                <li class="has-submenu"><a href="#">More items</a>
                    <ul class="submenu">
                        <li><a href="#">Submenu name</a></li>
                        <li><a href="#">Great submenu</a></li>
                        <li><a href="#">Another menu</a></li>
                        <li><a href="#">Some others</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
);
}
export default CategoryHome;
