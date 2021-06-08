import React, { useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/dRegjistrim";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    emri: '',
    mbiemri: '',
    nrtel: '',
    tabelat: '',
    tipiVetures: ''
}

const DRegjistrimForm = ({ classes, ...props }) => {

    //toast msg.
    const { addToast } = useToasts()

    //validate()
    //validate({emri:'Burim'})
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('emri' in fieldValues)
            temp.emri = fieldValues.emri ? "" : "This field is required."
        if ('mbiemri' in fieldValues)
            temp.mbiemri = fieldValues.mbiemri ? "" : "This field is required."
        if ('nrtel' in fieldValues)
            temp.nrtel = fieldValues.nrtel ? "" : "This field is required."
        if ('tabelat' in fieldValues)
            temp.tabelat = fieldValues.tabelat ? "" : "This field is required."
        if ('tipiVetures' in fieldValues)
            temp.nrtel = fieldValues.tipiVetures ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    //material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId === 0)
                props.createDRegjistrim(values, onSuccess)
            else
                props.updateDRegjistrim(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId !== 0) {
            setValues({
                ...props.dRegjistrimList.find(x => x.id === props.currentId)
            })
            setErrors({})
        } // eslint-disable-next-line
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="emri"
                        variant="outlined"
                        label="Emri"
                        value={values.emri}
                        onChange={handleInputChange}
                        {...(errors.emri && { error: true, helperText: errors.emri })}
                    />
                    <TextField
                        name="mbiemri"
                        variant="outlined"
                        label="Mbiemri"
                        value={values.mbiemri}
                        onChange={handleInputChange}
                        {...(errors.mbiemri && { error: true, helperText: errors.mbiemri })}
                    />
                     <TextField
                        name="nrtel"
                        variant="outlined"
                        label="Telefoni"
                        value={values.nrtel}
                        onChange={handleInputChange}
                        {...(errors.nrtel && { error: true, helperText: errors.nrtel })}
                    />
                     <TextField
                        name="tabelat"
                        variant="outlined"
                        label="Tabelat"
                        value={values.tabelat}
                        onChange={handleInputChange}
                        {...(errors.tabelat && { error: true, helperText: errors.tabelat })}
                    />
                    <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.tipiVetures && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Tipi i vetures</InputLabel>
                        <Select
                            name="tipiVetures"
                            value={values.tipiVetures}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="Heçbek, veturë (Coupe)">Heçbek, veturë (Coupe)</MenuItem>
                            <MenuItem value="SUV (Sport utility vehicle)">SUV (Sport utility vehicle)</MenuItem>
                            <MenuItem value="Kamion (Pickup truck)">Kamion (Pickup truck)</MenuItem>
                            <MenuItem value="MiniBus (Mini Van)">MiniBus (Mini Van)</MenuItem>
                            <MenuItem value="Kabriolet (Cabriolet)">Kabriolet (Cabriolet)</MenuItem>
                            <MenuItem value="Autobus (Bus)">Autobus (Bus)</MenuItem>
                            <MenuItem value="Vetur e vogel (Mini car)">Vetur e vogel (Mini car)</MenuItem>
                            <MenuItem value="Makinë sportive (Roadster)">Makinë sportive (Roadster)</MenuItem>
                        </Select>
                        {errors.tipiVetures && <FormHelperText>{errors.tipiVetures}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}


const mapStateToProps = state => ({
    dRegjistrimList: state.dRegjistrim.list
})

const mapActionToProps = {
    createDRegjistrim: actions.create,
    updateDRegjistrim: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DRegjistrimForm));