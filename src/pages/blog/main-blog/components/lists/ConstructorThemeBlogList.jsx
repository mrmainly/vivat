import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../../../components";
import BlogMenuItem from "../buttons/BlogMenuItem";
import ROUTES from "../../../../../routes";
import ThemeMain from "./ThemeMain";
import Selector from "../selector";

const BoxTheme = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 20,
  marginBottom: 20,
}));

const ConstructorThemeBlogList = ({
  isFetching,
  data,
  handleSetTopics,
  topics,
  isLoadingTopics,
}) => {
  return (
    <div>
      <BoxTheme>
        {data?.results?.slice(0, 1).map((item, index) => (
          <BlogMenuItem
            key={index}
            rout={ROUTES.BLOG_THEME}
            name={item.tags.name}
            value={item.tags.name}
            type="theme"
          >
            <MyText variant="h5">{item.tags.name}</MyText>
          </BlogMenuItem>
        ))}
        <Selector
          data={topics}
          handleSetTopics={handleSetTopics}
          isLoadingTopics={isLoadingTopics}
        />
      </BoxTheme>
      {isFetching ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <CircularProgress />
        </Box>
      ) : data?.results.length ? (
        <ThemeMain theme={data?.results} />
      ) : (
        "Нет блогов"
      )}
    </div>
  );
};

export default ConstructorThemeBlogList;
