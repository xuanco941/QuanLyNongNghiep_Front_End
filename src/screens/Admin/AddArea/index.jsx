import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './index.module.css'

import FormFogotPassword from '../../../components/Form/FormForgotPassword';
import ListControl from '../../../components/ListControl';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

const steps = ['Tạo khu vực', 'Tạo hệ nông nghiệp'];
const users = [{ user: 'tuong1' }, { user: 'tuong2' }];

const AddAreaStep1 = () => {
    return (
        <React.Fragment>
            <Box sx={{ mt: 5, mb: 1, border: '2px solid #1F8FBB', padding: '20px', borderRadius: '10px' }}>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Tên khu vực" variant="outlined" />
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="IP Gateway" variant="outlined" />
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Địa chỉ" variant="outlined" />
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Mô tả" variant="outlined" />
                </Box>
            </Box>
        </React.Fragment>
    )


}
const AddAreaStep2 = () => {
    const [count, setCount] = useState(1); // Khởi tạo state ban đầu là 1

    const handleAddForm = () => {
        setCount(count + 1); // Tăng số lượng form lên 1
    };

    const forms = [];
    for (let i = 0; i < count; i++) {
        forms.push(
            <form key={i} className={styles.form}>

                <React.Fragment>
                    <Box>
                        <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                            <TextField sx={{ width: '100%' }} id="outlined-basic" label="Tên hệ" variant="outlined" />
                        </Box>
                        <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                            <TextField sx={{ width: '100%' }} id="outlined-basic" label="IP Gateway" variant="outlined" />
                        </Box>
                        <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={users}
                                getOptionLabel={(option) => option.user}
                                defaultValue={[users[1]]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label=""
                                        placeholder="Tài khoản"
                                    />
                                )}
                            />
                        </Box>
                    </Box>

                </React.Fragment>
            </form>
        );
    }

    return (
        <div>
            {forms}
            <Button onClick={handleAddForm} variant="contained">Thêm hệ</Button>
        </div>
    );
}
const components = [<AddAreaStep1 />, <AddAreaStep2 />];
const AddArea = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <>

            <div role="presentation" >
                <Breadcrumbs className={styles.breadcrumb} aria-label="breadcrumb">
                    <Link className={`${styles.breadcrumbItem} ${styles.font14}`} color="#1F8FBB" sx={{ color: 'black' }} to={'/admin/main'}>
                        Quản lý nông nghiệp
                    </Link>
                    {/* <Link
                        underline="hover"
                        color="inherit"
                        to={'/admin/main'}
                        
                    >
                        Thêm khu vụ
                    </Link> */}
                    <Typography className={styles.font14} color="text.primary">Thêm khu vực</Typography>
                </Breadcrumbs>
            </div>
            <Box sx={{ width: '100%', padding: '10px' }}>


                <Box sx={{ width: '100%', mt: 3, mb: 2 }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};

                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {components[activeStep]}

                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: 5, mb: 2 }}>

                                <Button
                                className={styles.btnBack}
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                   
                                >
                                    Quay lại
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />


                                <Button className={styles.btnContinue} onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Hoàn thành' : 'Tiếp tục'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default AddArea