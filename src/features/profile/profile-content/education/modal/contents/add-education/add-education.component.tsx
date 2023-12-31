import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle
} from './styles'

import { EducationContent } from '../../education-modal-context/types'
import { useContext } from 'react'
import ExperiencesModalContext from '../../education-modal-context'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { descriptionStyles } from '../../styles'
import useEducationFormState from '../use-education-form-state'
import useAddEducationForm from './use-form'

const AddEducationModalContent = ({ className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext)
  const {
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
    title,
    entity,
    endDate
  } = useEducationFormState()

  const education = {
    title,
    entity,
    endDate
  }

  const { onSubmitForm } = useAddEducationForm({ education })

  return (
    <Box className={className} sx={modalStyle}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(EducationContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Agregar educacion</Typography>

        <Typography sx={descriptionStyles}>
          Escribe acerca de la educacion profesional que quieres agregar
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box className='inputContainer'>
              <TextField
                sx={textFieldStyles}
                id='role'
                label='Cargo / Puesto'
                onChange={onChangeTitle}
              />
            </Box>

            <Box className='inputStyles'>
              <Box className='inputContainer pr-5px'>
                <TextField
                  sx={textFieldStyles}
                  id='businessName'
                  label='Empresa'
                  onChange={onChangeEntity}
                />
              </Box>
              <Box className='inputContainer pl-5px'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={textFieldStyles}
                    label='Fecha Final'
                    onChange={onChangeEndDate}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type='submit' sx={buttonStyle}>
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

interface Props {
  className?: string
}

export default AddEducationModalContent
