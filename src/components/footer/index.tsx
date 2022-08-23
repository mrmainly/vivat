import React from "react";

import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import { MyContainer, MyText, BorderLine } from "..";
import ROUTES from "../../routes";

import { FormattedMessage } from "react-intl";

const GridItem = styled(Grid)(({ theme }) => ({
	marginTop: 10,
	marginBottom: 10,
	[theme.breakpoints.down("sm")]: {
		display: "flex",
		alignItem: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
}));

const FooterBox = styled(Box)(({ theme }) => ({
	background: "white",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const Footer = () => {
	const Array = [
		{
			columns: [
				{
					label: "VIVAT",
					href: "",
				},
				{
					label: "8 (914) 280-13-13",
					href: "",
				},
				{
					label: "farmvivat@mail.ru",
					href: "",
				},
				{
					label: "ИНН 7707083893",
					href: "",
				},
				{
					label: "ОГРН 1027700132195",
					href: "",
				},
				{
					label: <FormattedMessage id="office_address" />,
					href: "",
				},
			],
		},
		{
			title: <FormattedMessage id="about_company" />,
			columns: [
				{
					label: <FormattedMessage id="about_us" />,
					href: ROUTES.ABOUT_US,
				},
				{
					label: <FormattedMessage id="privacy_policy" />,
					href: ROUTES.PRIVACY_POLICY,
				},
				{
					label: <FormattedMessage id="contacts" />,
					href: ROUTES.CONTACTS,
				},
				{
					label: <FormattedMessage id="pharmacy" />,
					href: ROUTES.ADDRESS,
				},
				{
					label: <FormattedMessage id="license" />,
					href: ROUTES.LICENSES,
				},
			],
		},
		{
			title: <FormattedMessage id="help" />,
			columns: [
				{
					label: <FormattedMessage id="news" />,
					href: ROUTES.BLOG,
				},
				{
					label: <FormattedMessage id="medication_booking" />,
					href: ROUTES.BOOKING,
				},
				{
					label: <FormattedMessage id="payment_receipt_order" />,
					href: ROUTES.PAYMENT_RECEIVING,
				},
			],
		},
		{
			title: <FormattedMessage id="career" />,
			columns: [
				{
					label: <FormattedMessage id="benefits_working" />,
					href: ROUTES.BENEFITS,
				},
				{
					label: <FormattedMessage id="vacancy" />,
					href: ROUTES.VACANCY,
				},
				{
					label: <FormattedMessage id="human_resource_department" />,
					href: ROUTES.STAFF_DEPARTMENT,
				},
			],
		},
		{
			title: <FormattedMessage id="cooperation" />,
			columns: [
				{
					label: <FormattedMessage id="manufacturers" />,
					href: ROUTES.MANUFACTURERS,
				},
				{
					label: <FormattedMessage id="advertising_in_website" />,
					href: ROUTES.ADVERTISING,
				},
				{
					label: <FormattedMessage id="technical_support" />,
					href: ROUTES.TECHNICAL_SUPPORT,
				},
			],
		},
	];
	return (
		<FooterBox>
			<MyContainer
				wrapper={false}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					minHeight: 300,
					color: "#55CD61",
					padding: 2,
					flexDirection: "column",
				}}
			>
				<Grid container sx={{ mb: 2 }}>
					{Array.map((item, index) => (
						<GridItem
							item
							key={index}
							lg={2.4}
							xl={2.4}
							md={3}
							sm={6}
							xs={12}
						>
							<MyText
								variant="h6"
								style={{
									color: "#343434",
									fontWeight: 700,
								}}
							>
								{item.title}
							</MyText>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								{item.columns.map((item, index) => (
									<Box key={index} sx={{ mt: 0.5 }}>
										{item.href ? (
											<Link
												to={item.href}
												key={index}
												style={{
													lineHeight: "200%",
													textDecoration: "none",
													color: "#828282",
													width: "max-width",
												}}
											>
												{item.label}
											</Link>
										) : (
											<MyText
												key={index}
												style={{
													lineHeight: "160%",
													textDecoration: "none",
													color: "#686868",
													width: "max-width",
												}}
											>
												{item.label}
											</MyText>
										)}
									</Box>
								))}
							</Box>
						</GridItem>
					))}
				</Grid>
				<BorderLine />
			</MyContainer>
		</FooterBox>
	);
};

export default Footer;
