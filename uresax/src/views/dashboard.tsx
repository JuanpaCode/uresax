
import {
    Line
} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement, PointElement, LinearScale, Title ,CategoryScale
} from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, Title,CategoryScale);


let labels =   ["Lunes", "Martes", "Miercoles"];

let config = {
     labels: labels,
datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0,30000],

},
{
    label: 'My First dataset',
    backgroundColor: 'orange',
    borderColor: 'orange',
    data: [30000,40000],

},
{
    label: 'My First dataset',
    backgroundColor: 'blue',
    borderColor: 'blue',
    data: [40000,50000],

}

]
}



const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="company_status d-flex">
                <div className="status_box">
                    <h1 className="text-success">DOP 100,000,000.00</h1>
                    <span>Ventas</span>
                </div>

                <div className="status_box">
                    <h1 className="text-danger">
                        DOP 55,000.53
                    </h1>
                    <span>Gastos</span>
                </div>
            </div>
             

             <br />
             <br />
            <Line data={config} />

        </div>
    );
}

export default Dashboard;
