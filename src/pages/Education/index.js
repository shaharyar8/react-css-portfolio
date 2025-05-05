import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomTable from '../../components/CustomTable';
import { usePageTitle } from '../../context/PageTitleContext';
import './Education.css';

const educationData = [
  { degree: 'Bachelor in Computer Science', institution: 'ITU', year: '2023 - 2027' },
  { degree: 'A Levels', institution: 'Lahore Alma', year: '2021 - 2023' },
  { degree: 'O Levels', institution: 'Bricks School', year: '2019 - 2021' },
];

const tableHeaders = ['Degree', 'Institution', 'Year'];
const tableKeys = ['degree', 'institution', 'year'];

function Education() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  return (
    <Box className="education-container page-section">
      <Typography variant="h4" component="h1" className="education-title" gutterBottom>
        Education History
      </Typography>
      <Typography variant="body1" className="education-intro" paragraph>
        Here is a summary of my academic background.
      </Typography>

      <CustomTable
        data={educationData}
        headers={tableHeaders}
        keys={tableKeys}
      />
    </Box>
  );
}

export default Education;
