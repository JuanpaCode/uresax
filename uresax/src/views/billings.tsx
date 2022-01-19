const BillView = () => {

    const replaceNumbers = (format:string,n:number)=>{

     let list = format.split('')

     let list2 = n.toString().split("")


    const L1 = list.length;
    const L2 = list2.length;




    for(let i =  0 ;i < list2.length;i++){


        if(list[L1 - i] !== "#"){
        
           list[L1-i] = list2[L2-1 - i];
        }
    }

     return list.join("")
  }
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <h1>
                    FACTURAS
                </h1>
           
            </div>
            <br />
            <br />
            <div className="todo__list scrollbar scrollbar-vertical">
                {
                    [14435, 23324, 3343, 2224, 5,133332233].map(n => {
                        return (
                            <div className="todo__item d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="150" height="150" rx="15" fill="#F3F3F3" />
                                        <path d="M96.125 103H53.375C52.7451 103 52.141 102.75 51.6956 102.304C51.2502 101.859 51 101.255 51 100.625V48.375C51 47.7451 51.2502 47.141 51.6956 46.6956C52.141 46.2502 52.7451 46 53.375 46H81.875L98.5 62.625V100.625C98.5 101.255 98.2498 101.859 97.8044 102.304C97.359 102.75 96.7549 103 96.125 103Z" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M82.125 46.5V63.125H98.75" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M65.5 77.375H84.5" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M65.5 86.875H84.5" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div className="content">

                                        <h3 className="title">
                                            {replaceNumbers('#0000000000',n)}
                                        </h3>

                                    </div>

                                </div>


                                <div className="tools d-flex">


                                 
                                    <div className="icon__button hover-success">

                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7C6 7 2 16 2 16C2 16 6 25 16 25C26 25 30 16 30 16C30 16 26 7 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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

export default BillView;