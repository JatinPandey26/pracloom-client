import React from 'react';
import {useQuery} from "react-query";
import {AxiosInstance} from "../utils/AxiosInstance.js";
import '../styles/inventory.scss'
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Menu, Button, MenuItem,
    CircularProgress, Typography, Box, Modal, Dialog, DialogContent, DialogTitle, DialogActions, FormControl, InputLabel
} from "@mui/material";
import Fade from "@mui/material/Fade";
import {SlEye} from "react-icons/sl";
import {Link, useParams} from "react-router-dom";
import {Select} from "@mui/material";

const Inventory = () => {


    const fetchInstancesNotPaid = async () => {

        return await AxiosInstance.get("/organization/notPaid")
    }

    const {
        isError,
        isLoading: isInstanceNotPaidLoading,
        data: responseForInstancesNotPaid
    } = useQuery('instancesNotPaid', fetchInstancesNotPaid)
    console.log(responseForInstancesNotPaid?.data)
    return (
        <div className={'list-wrapper'}>
            <InstanceList listname={"Pending"} isLoading={isInstanceNotPaidLoading}
                          instances={responseForInstancesNotPaid?.data}/>
        </div>
    );
};

const InstanceList = ({listname, instances, isLoading}) => {

    const [open, setOpen] = React.useState(false);
    const [currentInstance, setCurrentInstance] = React.useState(null);

    return (
        <div className={listname}>
            <h2>{listname}</h2>
            <TableContainer component={Paper}>
                <Table className={'SlEye'} stickyHeader>

                    <TableHead>
                        <TableRow className={'data-row-head'}>
                            <TableCell className={'data-cell'} align="left">Name</TableCell>
                            <TableCell className={'data-cell'} align="left">Email</TableCell>
                            <TableCell className={'data-cell'} align="left">Contact No.</TableCell>
                            <TableCell className={'data-cell'} align="left">Address</TableCell>
                            <TableCell className={'data-cell'} align="left">Date</TableCell>
                            <TableCell className={'data-cell'} align="left">Payment Status</TableCell>
                            <TableCell className={'data-cell'} align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody>

                    {
                        isLoading ? <CircularProgress></CircularProgress> : (
                            instances?.map((instance) => (
                                <TableRow className={'data-row'}>
                                    <TableCell className={'data-cell'}>{instance.name}</TableCell>
                                    <TableCell className={'data-cell'}>{instance.email}</TableCell>
                                    <TableCell className={'data-cell'}>{instance.number}</TableCell>
                                    <TableCell className={'data-cell'}>{instance.address}</TableCell>
                                    <TableCell className={'data-cell'}>{instance.creationDate}</TableCell>
                                    <TableCell className={'data-cell'}>{instance.paid ? "Paid" : "Pending"}</TableCell>
                                    <TableCell className={'data-cell'}>
                                        <Button
                                            onClick={() => {
                                                setOpen(true), setCurrentInstance(instance.id)
                                            }}
                                        >
                                            {/*<Link to={`/platform/inventory/${instance.id}`}>*/}
                                            <SlEye/>
                                            {/*</Link>*/}

                                        </Button>
                                        <InstanceModal instance={instance}
                                                       open={open && currentInstance === instance.id}
                                                       setOpen={setOpen}/>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }

                    </tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function InstanceModal({setOpen, open, instance}) {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [paymentPlan, setPaymentPlan] = React.useState(null);

    const {data: fetchPaymentPlanResponse} = useQuery('payment-plans', () => AxiosInstance.get('/subscriptionTypes/all'))

    const handleClose = () => setOpen(false);
    console.log(paymentPlan)
    return (
        <div>

            <Dialog

                fullWidth
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle> Your Instance is waiting for payment</DialogTitle>
                <DialogContent>

                    <Table>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                {instance.name}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                {instance.email}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Contact No.
                            </TableCell>
                            <TableCell>
                                {instance.number}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Address
                            </TableCell>
                            <TableCell>
                                {instance.address}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Date
                            </TableCell>
                            <TableCell>
                                {instance.creationDate}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Payment Status
                            </TableCell>
                            <TableCell>
                                {instance.paid ? "Paid" : "Pending"}
                            </TableCell>
                        </TableRow>
                    </Table>
                    <FormControl sx={{mt: 3, minWidth: 150}}>
                        <InputLabel id="demo-controlled-open-select-label">Payment Plan</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={menuOpen}
                            onClose={() => setMenuOpen(false)}
                            onOpen={() => setMenuOpen(true)}
                            value={paymentPlan}
                            label="Payment Plan"
                            onChange={(e) => setPaymentPlan(e.target.value)}
                        >
                            {
                                fetchPaymentPlanResponse?.data.map((plan) => (
                                    <MenuItem value={plan.price}>{plan.name}</MenuItem>
                                ))
                            }


                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose} disabled={paymentPlan === null}>Pay</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default Inventory;