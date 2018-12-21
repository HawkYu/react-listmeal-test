import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
            domain:'http://a.itying.com/'
         };
    }
    requestData=(id)=>{
        var api=this.state.domain+'api/productcontent?id='+id; //需要后台允许跨域

        axios.get(api)
        .then((response)=> {  //需要修改文档中的指向
            console.log(response.data.result[0]);
            this.setState({
                list: response.data.result[0]
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount(){
        this.requestData(this.props.match.params.id)
    }
    render() {
        return (
            
            <div className="pcontent">
                <div className="back">
                    <Link to='/'>返回</Link>
                </div>
                <div className="p_content">		
                    <div className="p_info">				
                        {this.state.list.img_url!=''?<img style={{'width':'103px','height':'103px'}} src={this.state.domain+this.state.list.img_url} />:''}
                        <h2>{this.state.list.title}</h2>				
                        <p className="price">{this.state.list.price}/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>商品详情</h3>
                        <div className="p_content" dangerouslySetInnerHTML={{__html: this.state.list.content}}></div>
                    </div>
                </div>
                <footer className="pfooter">
                    <div className="cart">				
                        <strong>数量:</strong>
                        <div className="cart_num">
                            <div className="input_left">-</div>
                            <div className="input_center">
                            <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
                        </div>
                        <div className="input_right">+</div>		      
                        </div>
                    </div>
                    <button className="addcart">加入购物车</button>			
                </footer>
            </div>
        );
    }
}

export default Content;
