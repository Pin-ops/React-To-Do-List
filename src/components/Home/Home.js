import React,{Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import InputBtnGroup from '../InputBtnGroup/InputBtnGroup';

export class Home extends Component {
    state ={
        items:[]
    }

    itemReceiveHandler =(e,date)=>{

        let itemList=
        [...this.state.items];
        // state e direk ulasamadigimiz icin ... ile yeni bir array yaparak oraya atiyoruz
        itemList.push(e.target.item.value)
        // console.log(itemList);
        // console.log(this.state.items);

        this.setState({
            items:itemList
            // e.target.item.value+" " + date
            // date,
            // [e.target.item.name]
            // :e.target.item.value
        })
    }

    render() {
        // console.log(this.state.items);
        let addItemList= this.state.items.map((val,i)=>
            <ListGroup.Item key={i}>

            {val}
            </ListGroup.Item>

        )

        return (
            <div>
                <InputBtnGroup
                pHolder="New Item"
                btnText="Add Item"
                itemPipe = {this.itemReceiveHandler}
                />
                <ListGroup>
                    {addItemList}
                </ListGroup>
            </div>
        )
    }
}

export default Home;
