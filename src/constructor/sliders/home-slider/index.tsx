import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ROUTES from "../../../routes";

interface HomeSliderProps {
    data?: any;
}

const HomeSliderBox = styled(Box)(({ theme }) => ({
    height: 500,
    borderRadius: 10,
    width: "98%",
    margin: "0 auto",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    "&:hover #customButton": {
        opacity: 1,
    },
    transition: "all 1s ease",
    [theme.breakpoints.down("md")]: {
        height: 300,
    },
    [theme.breakpoints.down("sm")]: {
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        borderRadius: 0,
        marginTop: "-50px",
    },
    [theme.breakpoints.down(570)]: {
        marginTop: "-60px",
    },
    [theme.breakpoints.down(530)]: {
        marginTop: "-90px",
    },
    [theme.breakpoints.down(500)]: {
        marginTop: "-110px",
    },
    [theme.breakpoints.down(470)]: {
        marginTop: "-120px",
    },
    [theme.breakpoints.down(400)]: {
        marginTop: "-140px",
    },
    [theme.breakpoints.down(350)]: {
        marginTop: "-160px",
    },
    [theme.breakpoints.down(330)]: {
        marginTop: "-170px",
    },
    // [theme.breakpoints.down(570)]: {
    //     backgroundPositionY: "bottom",
    //     height: 250,
    //     borderRadius: 10,
    // },
}));

const BottomCustom = styled(Button)(({ theme }) => ({
    marginBottom: 30,
    background: "#e2211c",
    fontSize: 20,
    opacity: 0,
    transition: "opacity .35s ease",
    [theme.breakpoints.down("sm")]: {
        fontSize: 10,
        padding: "4px 11px",
        position: "absolute",
        opacity: 1,
    },
}));

const ArrowBack = styled(Box)(({ theme }) => ({
    position: "absolute",
    zIndex: 1,
    left: "-50px",
    height: "100%",
}));

const ArrowNext = styled(Box)(({ theme }) => ({
    zIndex: 1,
    right: "-50px",
    position: "absolute",
    height: "100%",
    top: 0,
}));

function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
        <ArrowNext style={{ ...style }} onClick={onClick}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </Box>
        </ArrowNext>
    );
}

function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
        <ArrowBack style={{ ...style }} onClick={onClick}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
            </Box>
        </ArrowBack>
    );
}

const HomeSlider: React.FC<HomeSliderProps> = ({ data }) => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <Slider {...settings}>
            {data.map((item: any, index: number) => (
                <Box key={index}>
                    <HomeSliderBox
                        sx={{
                            background: item.banner_image
                                ? `url(${item.banner_image})`
                                : `url(/img/Frame1319-min.png)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <BottomCustom
                            variant="contained"
                            size="large"
                            id="customButton"
                            onClick={() =>
                                navigate(`${ROUTES.STOCK_DETAIL}/${item.id}`)
                            }
                        >
                            Посмотреть
                        </BottomCustom>
                    </HomeSliderBox>
                </Box>
            ))}
        </Slider>
    );
};

export default HomeSlider;
