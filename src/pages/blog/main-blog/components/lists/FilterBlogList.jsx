import { Grid } from "@mui/material";

import BlogMenuItem from "../buttons/BlogMenuItem";
import { MyText, BlogCard } from "../../../../../components";
import ROUTES from "../../../../../routes";

const FilterBlogList = ({ data, name, value }) => {
  return (
    <Grid item lg={3.5} xl={3.5} md={4} sm={6} xs={12}>
      <BlogMenuItem
        rout={ROUTES.BLOG_THEME}
        name={name}
        value={value}
        type="query"
      >
        <MyText variant="h5">{name}</MyText>
      </BlogMenuItem>
      <Grid container spacing={2}>
        {data.results.slice(1, 3).map((item, index) => (
          <Grid item key={index} lg={12} xl={12} md={12} sm={12} xs={12}>
            <BlogCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default FilterBlogList;
