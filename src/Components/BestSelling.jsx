import { Row , Col } from "react-bootstrap"

const bestSellingItems = [
    {
        img: "/img/6.png",
        name: "Subaru",
        price: "Form $40k",
      },
      {
        img: "/img/7.png",
        name: "Volkswagen",
        price: "Form $15k",
      },
      {
        img: "/img/8.png",
        name: "Toyota",
        price: "Form $27k",
      },
      {
        img: "/img/9.png",
        name: "Mercedes-Benz",
        price: "Form $60k",
      },
      {
        img: "/img/10.png",
        name: "Hyundai",
        price: "Form $30k",
      },
      {
        img: "/img/11.png",
        name: "Infiniti",
        price: "Form $54k",
      },
];

export const BestSellingItem = ()=> {
    return(
        <>
        <div className="container justify-content-center align-items-center" style={{ paddingTop: "100px" }}>
            <h1 className="text-center fw-bold">Explore best selling car makes</h1>
            <Row className="d-flex justify-content-center mx-auto" style={{ paddingTop: "50px" }}>
                {bestSellingItems.map(
                    ({img, name, price}) => (
                        <Col md={4}>
                            <div className="vw-add d-flex gap-3 m-4">
                                <img src={img} alt="" className="vw-logo "/>
                                <div>
                                    <div className="vw-name fw-bold fs-5">{name}</div>
                                    <div className="vw-price" style={{color: "#9A9EA7"}}>{price}</div>
                                </div>
                            </div>
                        </Col>
                    )
                )
                }
            </Row>
            </div>

        </>
    )
}
