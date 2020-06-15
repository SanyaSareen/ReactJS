import React from 'react';
import {Card, CardBody ,CardText ,CardTitle ,CardImg, CardSubtitle} from 'reactstrap';
function RenderCard({items}){
return(
    <Card>
        <CardImg src={items.image} alt={items.name}/>
        <CardBody>
            <CardTitle>
                {items.name}
            </CardTitle>
                {items.designation ? <CardSubtitle>{items.designation}</CardSubtitle>:null}
            <CardText>{items.description}</CardText>
        </CardBody>
    </Card>
);
}

function Home(props){
return(
    
    <div className="container">
    <div className="row">
    <div className="col-12">
                    <h3>
                       Featured 
                    </h3>
                    <hr/>
                </div>
        </div>   
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard items={props.dish}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard items={props.promo}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard items={props.leaders}/>
            </div>
        </div>
    </div>
)
}
export default Home;