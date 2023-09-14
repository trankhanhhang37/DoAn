import CategoryHome from "./CategoryHome";
import PostHome from "./PostHome";
import ProductHome from "./ProductHome";
import SliderShow from "./SliderShow";

function Home() {
//     const [categories, setCategories] = useState([]);
//     useEffect(function () {
//         (async function () {
//             await categoryservice.getCategoryByParentId(0)
//             .then(function (result) {
//                 setCategories(result.data.categories);

//             });
//         })();
//     }, []);
// // 
    return (
        <section className="maincontent"> 
        <div className="row">
            <CategoryHome/>
             <SliderShow/>
             <PostHome/>
        </div>
            <ProductHome/>

        </section>
    );
}



export default Home;