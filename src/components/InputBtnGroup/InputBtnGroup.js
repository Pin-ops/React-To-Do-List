import React from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';

function InputBtnGroup(props) {
    const itemSendHandler=(e)=>{
        e.preventDefault()
        props.itemPipe(e, Date.now())
    }

    // we need to write this function when we want to send an extra info/variable to Parent Props

    return (
        <div>
            <form onSubmit={itemSendHandler}>
            <InputGroup className="mb-3" >
                <FormControl
                    // onChange={props.itemPipe}
                    // onChange={itemSendHandler}
                    name="item"
                    placeholder={props.pHolder}
                    aria-label={props.pHolder}
                    aria-describedby="basic-addon2"
                />
                    <InputGroup.Append>
                    <Button variant="info"
                    type="submit"
                    >{props.btnText}</Button>
                </InputGroup.Append>
            </InputGroup>
            </form>
        </div>
    )
}

export default InputBtnGroup;
