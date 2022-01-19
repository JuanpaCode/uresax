const ExpensesView = () => {
    return (
        <div className="expenses">

            <div className="d-flex align-items-center justify-content-between">
                <h1>
                    GASTOS
                </h1>
                <button className="btn btn__primary tap-animated">
                    Agregar Gasto
                </button>
            </div>
            <br />
            <br />

            <div className="todo__list">
                {
                    ["Peras", "Manzanas"].map(product => {
                        return (
                            <div className="todo__item d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="150" height="150" rx="15" fill="#F3F3F3" />
                                        <path d="M74.5 54.875V96.125" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M83.875 62.375H69.8125C68.072 62.375 66.4028 63.0664 65.1721 64.2971C63.9414 65.5278 63.25 67.197 63.25 68.9375C63.25 70.678 63.9414 72.3472 65.1721 73.5779C66.4028 74.8086 68.072 75.5 69.8125 75.5H79.1875C80.928 75.5 82.5972 76.1914 83.8279 77.4221C85.0586 78.6528 85.75 80.322 85.75 82.0625C85.75 83.803 85.0586 85.4722 83.8279 86.7029C82.5972 87.9336 80.928 88.625 79.1875 88.625H63.25" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div className="content">
                                        <h3 className="price text-danger">
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



                                </div>

                            </div>
                        );
                    })
                }
            </div>
       
         
        </div>
    );
}

export default ExpensesView;