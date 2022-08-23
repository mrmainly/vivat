import React, { useState } from "react";
import {
	Box,
	Grid,
	MenuItem,
	CircularProgress,
	FormControl,
	InputLabel,
	Select,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { BlogCard, MyText, BlogCardMain, SkeletonBlog } from "../../components";
import ROUTES from "../../routes";
import ThemeMain from "./components/ThemeMain";
import { useGetBlogQuery, useGetTopicQuery } from "../../services/BlogService";

const BlogMenuItem = styled(MenuItem)(({ theme }) => ({
	width: "max-content",
	marginBottom: 10,
}));

const BoxTheme = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: 20,
	marginBottom: 20,
}));

const Blog = () => {
	const [topic, setTopic] = useState("");
	const { data: popularity, isLoading } = useGetBlogQuery({
		query: "popularity_all_time",
		type: "query",
	});
	const { data: created } = useGetBlogQuery({
		query: "created",
		type: "query",
	});
	const {
		data: theme,
		isFetching,
		error,
	} = useGetBlogQuery({
		query: topic,
		type: "topic",
	});
	const { data: topics } = useGetTopicQuery("");

	const navigate = useNavigate();

	return (
		<>
			{isLoading ? (
				<SkeletonBlog />
			) : (
				<Box>
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Grid item lg={3.5} xl={3.5} md={4} sm={12} xs={12}>
							<BlogMenuItem
								onClick={() =>
									navigate(ROUTES.BLOG_THEME, {
										state: {
											name: "Популярное",
											value: "popularity_all_time",
											type: "query",
										},
									})
								}
							>
								<MyText variant="h5">Популярное</MyText>
							</BlogMenuItem>
							<Grid container spacing={2}>
								{popularity?.results.length > 0
									? popularity.results
										.slice(0, 3)
										.map((item: any, index: number) => (
											<Grid
												item
												key={index}
												lg={12}
												xl={12}
												md={12}
												xs={12}
												sm={12}
											>
												<BlogCard {...item} />
											</Grid>
										))
									: ""}
							</Grid>
						</Grid>
						<Grid item lg={5} xl={5} md={4} sm={6} xs={12}>
							{created?.results.length > 0
								? created.results
									.slice(0, 1)
									.map((item: any, index: number) => (
										<BlogCardMain key={index} {...item} />
									))
								: ""}
						</Grid>
						<Grid item lg={3.5} xl={3.5} md={4} sm={6} xs={12}>
							<BlogMenuItem
								onClick={() =>
									navigate(ROUTES.BLOG_THEME, {
										state: {
											name: "Последние статьи",
											value: "created",
											type: "query",
										},
									})
								}
							>
								<MyText variant="h5">Последние статьи</MyText>
							</BlogMenuItem>
							<Grid container spacing={2}>
								{created?.results.length > 0
									? created.results
										.slice(1, 3)
										.map((item: any, index: number) => (
											<Grid
												item
												key={index}
												lg={12}
												xl={12}
												md={12}
												sm={12}
												xs={12}
											>
												<BlogCard {...item} />
											</Grid>
										))
									: ""}
							</Grid>
						</Grid>
					</Grid>
					<BoxTheme>
						{theme?.results
							?.slice(0, 1)
							.map((item: any, index: number) => (
								<MenuItem
									key={index}
									onClick={() =>
										navigate(ROUTES.BLOG_THEME, {
											state: {
												name: item.tags.name,
												value: item.tags.name,
												type: "theme",
											},
										})
									}
								>
									<MyText variant="h5">
										{item.tags.name}
									</MyText>
								</MenuItem>
							))}
						<FormControl
							sx={{ width: 150, bgcolor: "white", ml: 1 }}
							size="small"
						>
							<InputLabel id="demo-simple-select-label">
								Теги
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Теги"
								defaultValue={isFetching ? "" : topics[0].name}
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
							>
								{topics?.map((item: any, index: number) => (
									<MenuItem value={item.name} key={index}>
										{item.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
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
					) : theme?.results.length ? (
						<ThemeMain theme={theme?.results} />
					) : (
						"Нет блогов"
					)}
				</Box>
			)}
		</>
	);
};

export default Blog;
