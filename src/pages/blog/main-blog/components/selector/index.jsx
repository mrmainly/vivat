import React from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Selector = ({ data, handleSetTopics, isLoadingTopics }) => {
  if (isLoadingTopics) {
    return "";
  }

  return (
    <FormControl sx={{ width: 150, bgcolor: "white", ml: 1 }} size="small">
      <InputLabel id="demo-simple-select-label">Теги</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Теги"
        defaultValue={data[0]?.name}
        // value={data}
        onChange={handleSetTopics}
      >
        {data?.map((item, index) => (
          <MenuItem value={item.name} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;
