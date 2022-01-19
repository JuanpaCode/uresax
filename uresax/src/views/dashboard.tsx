
import {
    Line
} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement, PointElement, LinearScale, Title, CategoryScale
} from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);


let labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

let config = {
    labels: labels,
    datasets: [{
        label: 'Ventas',
        backgroundColor: '#1fd31f',
        borderColor: '#1fd31f',
        data: [200000, 355000, 200000, 259381, 232728],

    },


    ]
}



const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="company_status d-flex align-items-center">

                <div className="status_box">
                    <h1 className="text-success">DOP 100,000,000.00</h1>
                    <span>Ventas</span>
                </div>

        

                <div className="spacer"></div>
                <div className="user__actions d-flex align-items-center tap-animated cursor-pointer">
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.5" cy="21.5" r="21.5" fill="#F0F0F0" />
                        <path d="M30 30V28C30 26.9391 29.5786 25.9217 28.8284 25.1716C28.0783 24.4214 27.0609 24 26 24H18C16.9391 24 15.9217 24.4214 15.1716 25.1716C14.4214 25.9217 14 26.9391 14 28V30" stroke="#A5A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 20C24.2091 20 26 18.2091 26 16C26 13.7909 24.2091 12 22 12C19.7909 12 18 13.7909 18 16C18 18.2091 19.7909 20 22 20Z" stroke="#A5A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className='content'>
                        <h4 className='username'>Juan Pablo</h4>
                        <span className='role'>Administrador</span>
                    </div>
                </div>

            </div>


            <br />
            <br />

            <Line options={{ responsive: true, }} data={config} />

            <br />
            <br />
            <h2>
                Ultimos registros de operaciones
            </h2>
            <br></br>
            <div className="app__logs d-flex scrollbar-horizontal">
                <div className="log__box d-flex align-items-center">
                    <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="91" height="91" rx="15" fill="#F3F3F3" />
                        <path d="M37.1583 32.4061L33.1392 37.765V56.5211C33.1392 57.2318 33.4215 57.9133 33.924 58.4158C34.4264 58.9183 35.108 59.2006 35.8186 59.2006H54.5747C55.2853 59.2006 55.9669 58.9183 56.4694 58.4158C56.9719 57.9133 57.2542 57.2318 57.2542 56.5211V37.765L53.235 32.4061H37.1583Z" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.1392 37.765H57.2542" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M50.5557 43.1239C50.5557 44.5452 49.9911 45.9082 48.9861 46.9132C47.9811 47.9182 46.618 48.4828 45.1968 48.4828C43.7755 48.4828 42.4125 47.9182 41.4075 46.9132C40.4025 45.9082 39.8379 44.5452 39.8379 43.1239" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className='content'>
                        <h4 className='title'>
                            Manzanas
                        </h4>

                        <span className='fs-3'>Frutas y Verduras</span>
                    </div>

                </div>

                <div className="log__box d-flex align-items-center">
                    <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="91" height="91" rx="15" fill="#F3F3F3" />
                        <path d="M37.1583 32.4061L33.1392 37.765V56.5211C33.1392 57.2318 33.4215 57.9133 33.924 58.4158C34.4264 58.9183 35.108 59.2006 35.8186 59.2006H54.5747C55.2853 59.2006 55.9669 58.9183 56.4694 58.4158C56.9719 57.9133 57.2542 57.2318 57.2542 56.5211V37.765L53.235 32.4061H37.1583Z" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.1392 37.765H57.2542" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M50.5557 43.1239C50.5557 44.5452 49.9911 45.9082 48.9861 46.9132C47.9811 47.9182 46.618 48.4828 45.1968 48.4828C43.7755 48.4828 42.4125 47.9182 41.4075 46.9132C40.4025 45.9082 39.8379 44.5452 39.8379 43.1239" stroke="#A7A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className='content'>
                        <h4 className='title'>
                            Peras
                        </h4>

                        <span className='fs-3'>Frutas y Verduras</span>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dashboard;
