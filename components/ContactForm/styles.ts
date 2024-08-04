import { styled, Box, Dialog, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    maxWidth: 400,
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

export const SuccessIcon = styled(CheckCircleOutlineIcon)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
}));
