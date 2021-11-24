import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./style.css";

const defaultImages = () => {
    return [{url:"https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "shampoo"},
{url: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "soap"}, 
{url: "https://images.unsplash.com/photo-1610216690558-4aee861f4ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", name: "tootpaste"},
{url: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", name: "facewash"}]
}

class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: defaultImages()
        }
    }
    render() {
        const state = this.state;
        return(
            <>
                <h1 className="pageTitle">Product Page</h1>
                <div className={"gridContainer"}>
                {state.product.map((val, index) => {
                    return(
                        <div className={"gridItem"} key={"grid_item" + index}>
                        <a href="#" target="_blank">
                        <img src={val.url} className={"productImage"} alt={val.name} key={index}/>
                        <li className={"productList"} key={val.name}>{val.name}</li>    
                        </a>
                        </div>
                    )
                    })}
                </div>
            </>
        )
    }
};

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1>Hello World</h1>
            </>
        )
    }
};

ReactDOM.render(<Description />, document.getElementById("root"));