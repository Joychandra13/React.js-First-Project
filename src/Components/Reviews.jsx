import { Button, Card, Row , Col } from "react-bootstrap"

const Reviewss = [
    {
        img: "/img/12.png",
        title: "2021 Cadillac Escalade",
        das: "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
        avter: "/img/15.png",
        name: "Hironaka Hiroe",
        prof: "Chief Editor",
        revi: "4.91",
        total:"(98)",
      },
      {
        img: "/img/13.png",
        title: "2021 Hyundai Elantra",
        das: "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra.",
        avter: "/img/16.png",
        name: "Debashis Bhuiyan",
        prof: "News Editor",
        revi: "4.65",
        total:"(93)",
      },
      {
        img: "/img/14.png",
        title: "2021 Mercedes-Benz GLA250",
        das: "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain.",
        avter: "/img/17.png",
        name: "Lew Silverton",
        prof: "Chief Editor",
        revi: "4.55",
        total: "(35)",
      },
];

export const Review = ()=> {
    return(
        <>
        <div className="container" style={{ paddingTop: "100px" }}>
            <h1 className="text-center fw-bold">Recent reviews</h1>
            <Row className="d-flex justify-content-center" style={{ paddingTop: "50px" }}>
                {Reviewss.map(
                    ({img ,title, das, avter, name, prof, revi, total}) => (
                        <Col>
                            <Card style={{width:"25rem", border:"none"}}>
                                <Card.Img variant="top" src={img}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold ">{title}</Card.Title>
                                    <Card.Text className="" style={{color : "#9A9EA7"}}>{das}</Card.Text>
                                    <div className="d-flex flex-row gap-3 justify-content-between">
                                    <div className="d-flex gap-3">
                                       <Card.Img  src={avter} style={{ width: "42px" , height: "42px" }} />
                                       <div><div className="fw-bold">{name}</div> <div>{prof}</div></div>
                                    </div>
                                    <div className="d-flex"><i className="bi bi-star-fill text-warning"></i> {revi}<div style={{color : "#9A9EA7"}}>{total}</div></div>
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
