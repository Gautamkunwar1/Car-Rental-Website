import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
    yAxis: [
        {
            label: 'Car Bookings ',
            width:50,
        },
    ],
    height: 300,
};


const dataset = [
    { month: 'Jan', Maruti_Suzuki: 9, Toyota_Fortuner: 3, Alto : 4},
    { month: 'Feb', Maruti_Suzuki: 6, Toyota_Fortuner:9, Alto: 2,},
    { month: 'Mar', Maruti_Suzuki: 7, Toyota_Fortuner:5, Alto: 5,},
    { month: 'Apr', Maruti_Suzuki: 7, Toyota_Fortuner:6, Alto: 12,},
    { month: 'May', },
    { month: 'June', },
    { month: 'July', },
    { month: 'Aug', },
    { month: 'Sep', },
    { month: 'Oct', },
    { month: 'Nov', },
    { month: 'Dec', },
];

export default function BarsDataset() {
    return (
        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
                { dataKey: 'Maruti_Suzuki', label: 'Maruti_Suzuki' },
                { dataKey: 'Toyota_Fortuner', label: 'Toyota_Fortuner' },
                { dataKey: 'Alto', label: 'Alto' },
            ]}
            {...chartSetting}
        />
    );
}
