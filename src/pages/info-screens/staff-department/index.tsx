import React from "react";

import { FormattedMessage } from "react-intl";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

import theme from "../../../theme";

const StaffDepartment = () => {
  return (
    <div>
      <InfoBlog title={<FormattedMessage id="human_resource_department"/>}>
        <Box>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                <FormattedMessage id="human_resource_department_1"/>
            </MyText>
            <MyText variant="body2" sx={{ mt: 1.2 }}>
                <FormattedMessage id="human_resource_department_1_1"/>
            </MyText>
            <MyText variant="body2" sx={{ mt: 1.2 }}>
                <FormattedMessage id="human_resource_department_1_2"/>
            </MyText>
        </Box>

        <Box sx={{ mt: 2.4 }}>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                Иванов Иван Иванович
            </MyText>
            <Box sx={{ display: "flex", mt: 0.8 }}>
                <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                    <FormattedMessage id="phone_number_2"/>
                </MyText>
                <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                    +7 (914) 280-13-13
                </MyText>
            </Box>
            <Box sx={{ display: "flex", mt: 0.8 }}>
                <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                    <FormattedMessage id="mail_2"/>
                </MyText>
                <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                    farmvivat@mail.ru
                </MyText>
            </Box>
        </Box>
        <Box sx={{ mt: 2.4 }}>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                Иванов Иван Иванович
            </MyText>
            <Box sx={{ display: "flex", mt: 0.8 }}>
                <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                    <FormattedMessage id="phone_number_2"/>
                </MyText>
                <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                    +7 (914) 280-13-13
                </MyText>
            </Box>
            <Box sx={{ display: "flex", mt: 0.8 }}>
                <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                    <FormattedMessage id="mail_2"/>
                </MyText>
                <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                    farmvivat@mail.ru
                </MyText>
            </Box>
        </Box>

        <Box sx={{ mt: 2.4 }}>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                <FormattedMessage id="human_resource_department_2"/>
            </MyText>
            <MyText variant="body2" sx={{ mt: 1.2 }}>
                <FormattedMessage id="office_address"/>
            </MyText>
        </Box>
      </InfoBlog>
    </div>
  );
};

export default StaffDepartment;
