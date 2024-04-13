'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import FacultyService from '@/services/FacultyService';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChartFaculty() {
    const [falculty, setFaculty] = useState()
    useEffect(() => {
        FacultyService.getFaculty().then(x => setFaculty(x.data)).catch(e => { })
    }, [])
    if (!falculty) return

    let name = falculty.reduce((init, item) => {
        init.push(item.name)
        return init
    }, [])
    let data = falculty.reduce((init, item) => {
        init.push(item.contribution.length)
        return init
    }, [])

    let color = falculty.reduce((init, item) => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        init.push("#" + randomColor)
        return init
    }, [])
    let bordercolor = color.reduce((init, item) => {

        init.push("#000000")
        return init
    }, [])
    const datachart = {
        labels: name,
        datasets: [
            {
                label: 'Total',
                data: data,
                backgroundColor: color,
                borderColor: bordercolor,
                borderWidth: 1,
            }
        ]
    };
    if (!falculty) return
    return (
        <>
            <div>Chart of Number Contribution in Faculty</div>
            <Pie data={datachart} width={350} style={{ margin: 'auto' }} options={{ responsive: false }} height={350} />
        </>

    )
}
