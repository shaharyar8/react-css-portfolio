import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePageTitle } from '../../context/PageTitleContext';
import './Contact.css';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function Contact() {
  const { setPageTitle } = usePageTitle();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    setPageTitle('Contact Me');
  }, [setPageTitle]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      console.log('Form Data Submitted:', values);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! Thank you.' });
        resetForm();

        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
      }, 1500);
    },
  });

  return (
    <Box className="contact-container page-section">
      <Typography variant="h4" component="h1" className="contact-title" gutterBottom>
        Get In Touch
      </Typography>
      <Typography variant="body1" className="contact-intro" paragraph>
        Have a question or want to work together? Send me a message!
      </Typography>

      <Paper elevation={3} className="contact-form-paper">
        <form onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className="contact-form-field"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Your Email"
                type="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className="contact-form-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Your Message"
                multiline
                rows={5}
                variant="outlined"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                className="contact-form-field"
              />
            </Grid>
            <Grid item xs={12} className="contact-submit-grid">
              {submitStatus.message && (
                 <Alert
                    severity={submitStatus.type}
                    className="contact-alert"
                    onClose={() => setSubmitStatus({ type: '', message: '' })}
                 >
                    {submitStatus.message}
                 </Alert>
              )}
              <Box sx={{ position: 'relative', width: 'fit-content' }}>
                 <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    className="contact-submit-button"
                    size="large"
                 >
                    Send Message
                 </Button>
                 {isSubmitting && (
                    <CircularProgress
                       size={24}
                       sx={{
                          color: 'primary.main',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                       }}
                    />
                 )}
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default Contact;
