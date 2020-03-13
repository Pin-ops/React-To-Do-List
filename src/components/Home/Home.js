import React,{Component} from 'react';
import {Accordion,Card,Button} from 'react-bootstrap';
import InputBtnGroup from '../InputBtnGroup/InputBtnGroup';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'


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

    ExampleCustomInput = ({ value, onClick }) => (
        <button className="example-custom-input"
            onClick={onClick}>
            🗓
        </button>
    );


    render() {
        // console.log(this.state.items);
        let addItemList= this.state.items.map((val,i)=>
            // <ListGroup.Item key={i}>

            // {val}

            // </ListGroup.Item>
            <Card key={i}>
                <Card.Header className="text-left">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={
                            date => this.setState({startDate:date})
                        }
                        customInput={<this.ExampleCustomInput />}
                    />
                    <Accordion.Toggle as={Button} variant="link"
                            eventKey={i}>
                            {val}
                    </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey={i}>
                    <Card.Body className="p-0 ">
                    <textarea
                        value={this.state.startDate}
                        rows='8'
                        className="w-100 pl-4 pt-3 border border-0"
                        placeholder="Please give me a detail..."
                    />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )

        return (
            <div>

                <InputBtnGroup
                pHolder="New Item"
                btnText="Add Item"
                itemPipe = {this.itemReceiveHandler}
                />

                <Accordion>
                    {addItemList}
                </Accordion>

            </div>
        )
    }
}

export default Home;
