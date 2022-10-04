import { MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const BlogMenuItemStyle = styled(MenuItem)(({ theme }) => ({
    width: "max-content",
    marginBottom: 10,
}));

const BlogMenuItem = ({ children, name, value, type, rout }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(rout, {
            state: {
                name: name,
                value: value,
                type: type,
            },
        });
    };

    return (
        <BlogMenuItemStyle onClick={handleNavigate}>
            {children}
        </BlogMenuItemStyle>
    );
};

export default BlogMenuItem;
