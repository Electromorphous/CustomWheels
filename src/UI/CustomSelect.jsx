import {
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

function CustomSelect({ value, handleChange, label, options }) {
  return (
    <div style={{ position: "absolute", top: 30, left: 20 }}>
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
    </div>
  );
}

export default CustomSelect;
