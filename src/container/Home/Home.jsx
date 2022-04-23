import React,{Component, Fragment} from "react";
import YoutubeComponent from "../../component/Youtube/YoutubeComponent";
import Product from "../Product/Product";

class Home extends Component{
    render(){
        return(
            <Fragment>
            {/* <div className="row">
                <p><b>Youtube Component</b> /component/Youtube/YoutubeComponent</p>
                <hr />
                <YoutubeComponent title="Pol Espargaro" desc="No 44"/>
                <YoutubeComponent title="Marc marquez" desc="No 93"/>
                <YoutubeComponent title="Dani Pedrosa" desc="No 26"/>
                <YoutubeComponent />
            </div> */}

            <p><b>Product</b></p>
            <hr />
            <Product/>
            </Fragment>
        )
    }
}

export default Home;