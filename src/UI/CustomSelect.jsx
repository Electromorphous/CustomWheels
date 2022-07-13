import {
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

function CustomSelect({ value, handleChange, label, options }) {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel sx={{ color: "white" }}>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {options.map((obj, index) => (
          <MenuItem key={index} value={obj.value}>
            <Typography sx={{ color: "white" }}>{obj.name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
