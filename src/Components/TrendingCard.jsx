import { Button, Card, Row , Col } from "react-bootstrap"

const Trendings = [
    {
        img: "/img/4.png",
        title: "Used 2019 Audi S4 Premium Plus",
        miles: "11 475",
        transmission: "AWD",
        cylinders: "4-Cylinder Turbo",
        price: "$41,400",
      },
      {
        img: "/img/5.png",
        title: "2013 Subaru Forester Premium Plus",
        miles: "40 475",
        transmission: "AWD",
        cylinders: "4-Cylinder Turbo",
        price: "$22,500",
      },
      {
        img: "/img/3.png",
        title: "Used 2010 BMW X3 Sport package",
        miles: "20 850",
        transmission: "RWD",
        cylinders: "4-Cylinder",
        price: "$39,200",
      },
];

export const Trending = ()=> {
    return(
        <>
        <div className="container" style={{ paddingTop: "100px" }}>
            <h1 className="text-center fw-bold">Trending near you</h1>
            <Row className="d-flex justify-content-center" style={{ paddingTop: "50px" }}>
                {Trendings.map(
                    ({img, title, cylinders, miles, price, transmission}) => (
                        <Col>
                            <Card style={{width:"25rem", border:"none"}}>
                                <Card.Img variant="top" src={img}/>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text className="opacity-50">{miles} Miles</Card.Text>
                                    <Card.Text className="opacity-50">
                                       {cylinders} . {transmission}
                                    </Card.Text>
                                    <div className="d-flex flex-row gap-3">
                                    <Button variant="primary" className="fw-bold primarybtn">
                                       {price}
                                    </Button>
                                    <Button variant="secondary" className="fw-bold Bestsellerbtn">
                                       Bestseller
                                    </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                )
                }
            </Row>
        </div>

        </>
    )
}
