import { Box, Grid } from "@mui/material";

import { BlogCard, BlogCardMain } from "../../../../../components";

interface ThemeMainProps {
  theme: any;
}

const ThemeMain: React.FC<ThemeMainProps> = ({ theme }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={5} xl={5} md={5} sm={5} xs={12}>
          {theme.slice(0, 1).map((item: any, index: number) => (
            <BlogCardMain key={index} {...item} />
          ))}
        </Grid>
        <Grid item lg={7} xl={7} md={7} sm={7} xs={12}>
          <Grid container spacing={2}>
            {theme.slice(1, 4).map((item: any, index: number) => (
              <Grid item key={index} lg={6} xl={6} md={6} sm={6} xs={12}>
                <BlogCard {...item} type="v2" />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeMain;
