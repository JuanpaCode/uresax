const ProductsView = () => {
    return (
        <div className="products">

            <div className="d-flex align-items-center justify-content-between">
                <h1>
                    PRODUCTOS
                </h1>
                <button className="btn btn__primary tap-animated">
                    Agregar Productos
                </button>
            </div>
            <br />
            <br />
            <div className="todo__list scrollbar scrollbar-vertical">


                {
                    ["Manzanas", "Chitos", "Cafe", "Leche", "Tomate"]
                        .map(product => {
                            return (
                                <div className="todo__item d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="150" height="150" rx="15" fill="#F3F3F3" />
                                            <path d="M61.25 53.4167L54.625 62.25V93.1667C54.625 94.338 55.0903 95.4614 55.9186 96.2897C56.7469 97.118 57.8703 97.5833 59.0417 97.5833H89.9583C91.1297 97.5833 92.2531 97.118 93.0814 96.2897C93.9097 95.4614 94.375 94.338 94.375 93.1667V62.25L87.75 53.4167H61.25Z" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M54.625 62.25H94.375" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M83.3332 71.0833C83.3332 73.4261 82.4025 75.6729 80.7459 77.3294C79.0894 78.986 76.8426 79.9167 74.4998 79.9167C72.1571 79.9167 69.9103 78.986 68.2537 77.3294C66.5972 75.6729 65.6665 73.4261 65.6665 71.0833" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                        <div className="content">

                                            <h3 className="price text-success">
                                                DOP 40.00
                                            </h3>

                                            <h3 className="title">
                                                {product}
                                            </h3>
                                            <span className="category">
                                                Frutas y Verduras
                                            </span>
                                        </div>

                                    </div>


                                    <div className="tools d-flex">


                                        <div className="icon__button hover-success">

                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.5 20.5L19 9L15 5L3.5 16.5L2 22L7.5 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>



                                        <div className="icon__button hover-danger">

                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27 7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13 13V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 13V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M25 7V26C25 26.2652 24.8946 26.5196 24.7071 26.7071C24.5196 26.8946 24.2652 27 24 27H8C7.73478 27 7.48043 26.8946 7.29289 26.7071C7.10536 26.5196 7 26.2652 7 26V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H13C12.4696 3 11.9609 3.21071 11.5858 3.58579C11.2107 3.96086 11 4.46957 11 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>


                                        </div>



                                    </div>

                                </div>
                            );
                        })
                }




            </div>
        </div>
    );
}

export default ProductsView;