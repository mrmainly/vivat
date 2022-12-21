import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FormattedMessage } from "react-intl";

const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: 12,
    width: "70%",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

function createData(first: any, second: any, third: any) {
    return { first, second, third };
}

const PaymentReceiving = () => {
    const array = [
        {
            title: (
                <FormattedMessage id="payment_receipt_order_4_1" />
            ),
            columns: [
                <FormattedMessage id="payment_receipt_order_4_1_1" />,
                <FormattedMessage id="payment_receipt_order_4_1_2" />,
                <FormattedMessage id="payment_receipt_order_4_1_3" />,
            ],
        },
        {
            title: (
                <FormattedMessage id="payment_receipt_order_4_2" />
            ),
            columns: [
                <FormattedMessage id="payment_receipt_order_4_2_1" />,
                <FormattedMessage id="payment_receipt_order_4_2_2" />,
                <FormattedMessage id="payment_receipt_order_4_2_3" />,
                <FormattedMessage id="payment_receipt_order_4_2_4" />,
                <FormattedMessage id="payment_receipt_order_4_2_5" />,
            ],
        },
    ];
    const rows = [
        createData(
            <FormattedMessage id="payment_receipt_order_3_2_1" />,
            <FormattedMessage id="payment_receipt_order_3_2_2" />,
            <FormattedMessage id="payment_receipt_order_3_2_3" />
        ),
        createData(
            <FormattedMessage id="payment_receipt_order_3_3_1" />,
            <FormattedMessage id="payment_receipt_order_3_3_2" />,
            <FormattedMessage id="payment_receipt_order_3_3_3" />
        ),
    ];

    return (
        <div>
            <InfoBlog
                title={
                    <FormattedMessage id="payment_receipt_order" />
                }
            >
                <MyText variant="body2">
                    <FormattedMessage id="payment_receipt_order_1" />
                </MyText>
                <MyText variant="body2" sx={{ mt: 1.2 }}>
                    <FormattedMessage id="payment_receipt_order_2" />
                </MyText>
                <ol>
                    <li style={{ fontSize: 14 }}>
                        <MyText variant="body2" sx={{ mt: 1.2 }}>
                            <FormattedMessage id="payment_receipt_order_2_1" />
                        </MyText>
                    </li>
                    <li style={{ fontSize: 14 }}>
                        <MyText variant="body2" sx={{ mt: 1.2 }}>
                            <FormattedMessage id="payment_receipt_order_2_2" />
                        </MyText>
                    </li>
                </ol>

                <MyText
                    variant="body1"
                    sx={{ mt: 3.2, fontWeight: 600 }}
                >
                    <FormattedMessage id="payment_receipt_order_3" />
                </MyText>
                <CustomTableContainer>
                    <Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        backgroundColor: "#E4FFE3",
                                    }}
                                >
                                    <FormattedMessage id="payment_receipt_order_3_1_1" />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: "#E4FFE3",
                                    }}
                                    align="left"
                                >
                                    <FormattedMessage id="payment_receipt_order_3_1_2" />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: "#E4FFE3",
                                    }}
                                    align="left"
                                >
                                    <FormattedMessage id="payment_receipt_order_3_1_3" />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.first}
                                    sx={{
                                        "&:last-child td, &:last-child th":
                                            {
                                                border: 0,
                                                backgroundColor:
                                                    "#EDF1F4",
                                            },
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        {row.first}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.second}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.third}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CustomTableContainer>
                <MyText variant="body2" sx={{ mt: 1.2, ml: 1.8 }}>
                    <FormattedMessage id="payment_receipt_order_3_4" />
                </MyText>
                <MyText variant="body2" sx={{ mt: 3.2 }}>
                    <FormattedMessage id="payment_receipt_order_3_5" />
                </MyText>
                <MyText variant="body2" sx={{ mt: 3.2 }}>
                    Доставка товаров, не перечисленных в п.2 Правил
                    выдачи разрешения на осуществление розничной
                    торговли безрецептурных лекарственных препаратов
                    для медицинского применения дистанционным
                    способом, осуществления такой торговли и доставки
                    указанных лекарственных препаратов гражданам,
                    утвержденных Постановлением Правительства РФ от 16
                    мая 2020 г. N 697 производится без ограничений
                </MyText>
                <MyText variant="body2" sx={{ mt: 3.2 }}>
                    Заказы собирает заведующий аптеки: Торопова Марина
                    Константиновна . Телефон: +79142801313
                </MyText>

                <MyText
                    variant="body1"
                    sx={{ mt: 3.2, fontWeight: 600 }}
                >
                    <FormattedMessage id="payment_receipt_order_4" />
                </MyText>
                {array.map((item, index) => (
                    <Box key={index} sx={{ mt: 1.2 }}>
                        <MyText variant="body2">{item.title}</MyText>
                        <Box>
                            {item.columns.map((item, index) => (
                                <li
                                    style={{
                                        fontSize: 14,
                                        marginTop: 12,
                                        marginLeft: 6,
                                    }}
                                    key={index}
                                >
                                    {item}
                                </li>
                            ))}
                        </Box>
                    </Box>
                ))}
            </InfoBlog>
        </div>
    );
};

export default PaymentReceiving;
