

const Type = () => (
    <div className="d-md-flex justify-content-center align-items-center ">
        <label>
            <span className="fw-normal text-start filter-search-laber">Type</span>
            <select className="from-select filter-search-select fw-bold fs-6 outline-none">
                <option className="fw-bold fs-6">Use car</option>
                <option className="fw-bold fs-6">New car</option>
                <option className="fw-bold fs-6">Vangari car</option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>
);

const Make = () => (
    <div className="d-md-flex justify-content-center align-items-center ">
        <label>
            <span className="fw-normal text-start filter-search-laber">Make</span>
            <select className="from-select filter-search-select fw-bold fs-6 outline-none">
                <option className="fw-bold fs-6">Infiniti</option>
                <option className="fw-bold fs-6">One</option>
                <option className="fw-bold fs-6">Two</option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>
);

const Year = () => (
    <div className="d-md-flex justify-content-center align-items-center ">
        <label>
            <span className="fw-normal text-start filter-search-laber">Year</span>
            <select className="from-select filter-search-select fw-bold fs-6 outline-none">
                <option className="fw-bold fs-6">2018</option>
                <option className="fw-bold fs-6">2019</option>
                <option className="fw-bold fs-6">2020</option>
                <option className="fw-bold fs-6">2021</option>
                <option className="fw-bold fs-6">2022</option>
                <option className="fw-bold fs-6">2023</option>
                <option className="fw-bold fs-6">2024</option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>
);

const Model = () => (
    <div className="d-md-flex justify-content-center align-items-center ">
        <label>
            <span className="fw-normal text-start filter-search-laber">Model</span>
            <select className="from-select filter-search-select fw-bold fs-6 outline-none">
                <option className="fw-bold fs-6"></option>
                <option className="fw-bold fs-6">Subaru Forester </option>
                <option className="fw-bold fs-6">BMW X3 Sport</option>
                <option className="fw-bold fs-6">Cadillac Escalade</option>
                <option className="fw-bold fs-6">Hyundai Elantra</option>
                <option className="fw-bold fs-6">Mercedes-Benz</option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>
);

const Price = () => (
    <div className="d-md-flex justify-content-center align-items-center">
        <label>
            <span className="fw-normal text-start filter-search-laber">Price</span>
            <select className="from-select filter-search-select fw-bold fs-6 outline-none">
                <option className="fw-bold fs-6"></option>
                <option className="fw-bold fs-6">$30000</option>
                <option className="fw-bold fs-6">$40000</option>
                <option className="fw-bold fs-6">$50000</option>
                <option className="fw-bold fs-6">$60000</option>
                <option className="fw-bold fs-6">$70000</option>
            </select>
        </label>
    </div>
);

export const FilterAndSearch = () => {
    return(
        <>
        <section>
            <h1 className="text-center fw-bold fs-2 mt-5 filter-search-title">Which vehicles you are looking for? </h1>
            <div className="d-md-flex justify-content-center align-items-center gap-3 filter-search-box">
                <Type />
                <Make />
                <Year />
                <Model />
                <Price />

                <button className="btn btn-primary search-button">
                    <i class="bi bi-search"></i> Search
                </button>
            </div>
        </section>
        </>
    )
}