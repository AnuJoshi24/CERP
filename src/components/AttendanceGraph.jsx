import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import Chart from 'chart.js/auto';
import styles from "./AttendanceGraph.module.css"

const AttendanceGraph = () => {
  const [data] = useState({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'Absent',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'Present',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <div className={styles.outer}>
    <CDBContainer>
      {/* <h3 className="mt-5">Attendace Graph</h3> */}
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
    </div>
  );
};

export default AttendanceGraph;