import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { "id": 1, "name": "Student A", "math": 78, "physics": 82, "chemistry": 75 },
        { "id": 2, "name": "Student B", "math": 85, "physics": 80, "chemistry": 78 },
        { "id": 3, "name": "Student C", "math": 92, "physics": 88, "chemistry": 91 },
        { "id": 4, "name": "Student D", "math": 68, "physics": 72, "chemistry": 70 },
        { "id": 5, "name": "Student E", "math": 74, "physics": 76, "chemistry": 79 },
        { "id": 6, "name": "Student F", "math": 89, "physics": 85, "chemistry": 83 },
        { "id": 7, "name": "Student G", "math": 95, "physics": 92, "chemistry": 90 },
        { "id": 8, "name": "Student H", "math": 82, "physics": 80, "chemistry": 78 },
        { "id": 9, "name": "Student I", "math": 76, "physics": 74, "chemistry": 72 },
        { "id": 10, "name": "Student J", "math": 88, "physics": 86, "chemistry": 84 }
      ]
      

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData} >
                <XAxis dataKey='name'/>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;