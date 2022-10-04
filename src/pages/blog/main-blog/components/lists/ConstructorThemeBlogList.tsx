const ConstructorThemeBlogList = () => {
    return (
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
    )
}

export default ConstructorThemeBlogList