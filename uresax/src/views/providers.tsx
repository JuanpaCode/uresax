const ProvidersView = () => {
    return (
        <div className="providers">
            <div className="d-flex justify-content-between"> 
                <h1>PROVEDORES</h1>
                <button className="btn btn__primary tap-animated"> 
                    Agregar Provedores
                </button>
            </div>
            <br></br>
            <br></br>

            <div className="todo__list scrollbar scrollbar-vertical">
                {
                    ["Grupo Ramos", "OEM SRL","Grupo MM","LL Motors"].map(provider => {
                        return (
                            <div className="todo__item d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">

                                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="52" cy="52" r="52" fill="#F4F4F4" />
                                        <path d="M26 72.28H79.3867" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M56.5068 72.2801V30.3334C56.5068 29.8277 56.3059 29.3428 55.9484 28.9852C55.5908 28.6276 55.1058 28.4268 54.6001 28.4268H31.7201C31.2145 28.4268 30.7295 28.6276 30.3719 28.9852C30.0144 29.3428 29.8135 29.8277 29.8135 30.3334V72.2801" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M75.5735 72.2801V45.5867C75.5735 45.081 75.3726 44.5961 75.0151 44.2385C74.6575 43.8809 74.1725 43.6801 73.6668 43.6801H56.5068" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M37.4395 37.9601H45.0661" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M41.2529 53.2134H48.8796" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M37.4395 62.7467H45.0661" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M64.1328 62.7467H67.9461" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M64.1328 53.2134H67.9461" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div className="content">

                                        <h3 className="title">
                                            {provider}
                                        </h3>

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

export default ProvidersView;