import React,{Component} from 'react';
import {Accordion,Card,Button} from 'react-bootstrap';
import InputBtnGroup from '../InputBtnGroup/InputBtnGroup';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
import './Home.css'


export class Home extends Component {
    state ={
        items:[
            {title:'What is your todays focus?', date:null, detail:"Today's focus is"},
            {title:'Next Step'}

        ]

    }

    itemReceiveHandler =(e,date)=>{
        let itemList=
        [...this.state.items];
        // state e direk ulasamadigimiz icin ... ile yeni bir array yaparak oraya atiyoruz
        itemList.push({title:e.target.item.value})
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

    // ExampleCustomInput = ({ value, onClick }) => (
    //     <button className="example-custom-input"
    //         onClick={onClick}>
    //         🗓
    //     </button>
    // );


    render() {
        // console.log(this.state.items);
        let addItemList= this.state.items.map((val,i)=>
            // <ListGroup.Item key={i}>

            // {val}

            // </ListGroup.Item>
            <Card key={i}>
                <Card.Header className="text-left">
                    {/* .card position:static !important --- Due to the display problem */}
                    <Button
                        className="btn btn-light"
                    >
                    <span role="img" aria-label="sheep">✅</span>
                    </Button>
                    <Button
                        className="btn btn-light"
                        onClick={
                            () => {
                            let itemList=[...this.state.items];
                            itemList.splice(i,1);
                            this.setState({items:itemList});
                        }
                    }>
                        🗑
                    </Button>
                    <Accordion.Toggle as={Button} variant="link"
                            eventKey={i}>
                            {val.title}
                    </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey={i}>
                    <Card.Body className="p-0 ">
                    <DatePicker
                        className=" w-100 pl-4 border border-0"
                        selected={this.state.items[i].date}
                        onChange={
                            date => {
                                let itemList= [...this.state.items];
                                itemList[i].date=date;
                                this.setState({
                                    items:itemList
                                    // this.state.items[x].date
                                });
                            // items[x].date
                        }}
                        placeholderText="Set a date"

                    />
                    <textarea
                        value={this.state.items[i].detail}
                        onChange= {
                                e => {
                                let itemList= [...this.state.items];
                                itemList[i].detail=e.target.value;
                                this.setState({items:itemList});
                                console.log(this.state)


                        }}
                        // value={this.state.startDate}
                        rows='3'
                        className="w-100 pl-4 border border-0"
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
