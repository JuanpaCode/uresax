const CartsView = () => {
    return (
        <div className="carts">

            <div className="d-flex align-items-center justify-content-between">
                <h1>
                    CAJAS
                </h1>
                <button className="btn btn__primary tap-animated">
                    Agregar Caja
                </button>
            </div>
            <br />
            <br />

            <div className="todo__list scrollbar scrollbar-vertical">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(n => {
                        return (
                            <div className="todo__item d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="150" height="150" rx="15" fill="#F3F3F3" />
                                        <path d="M104.334 105.25V97.4167C104.334 93.2616 102.683 89.2767 99.745 86.3387C96.8069 83.4006 92.822 81.75 88.667 81.75H57.3337C53.1786 81.75 49.1937 83.4006 46.2557 86.3387C43.3176 89.2767 41.667 93.2616 41.667 97.4167V105.25" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M72.9997 66.0833C81.6521 66.0833 88.6663 59.0691 88.6663 50.4167C88.6663 41.7642 81.6521 34.75 72.9997 34.75C64.3472 34.75 57.333 41.7642 57.333 50.4167C57.333 59.0691 64.3472 66.0833 72.9997 66.0833Z" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                    <div className="content">


                                        <h1 className="title">
                                            #{n}
                                        </h1>
                                        <span className="category">
                                            Maria Almonte
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

export default CartsView;