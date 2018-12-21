import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
            domain:'http://a.itying.com/'
         };
    }

    requestData=()=>{
        var api=this.state.domain+'api/productlist'; //需要后台允许跨域

        axios.get(api)
        .then((response)=> {  //需要修改文档中的指向
            this.setState({
                list: response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount(){
        this.requestData()
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((value,key)=>{
                        return(
                            <div className="item" key={key}>
                                <h3 className="item_cate">{value.title}</h3>
                                <ul className="item_list">
                                {
                                    value.list.map((k,v)=>{
                                        return(
                                            <li key={v}>	
                                                <Link to={`/content/${k._id}`}>
                                                    <div className="inner">
                                                        <img style={{'width':'103px','height':'103px'}}src={this.state.domain+k.img_url} />
                                                        <p className="title">{k.title}</p>						
                                                        <p className="price">¥{k.price}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Home;