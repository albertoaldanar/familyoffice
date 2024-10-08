import React, { Fragment, useState } from "react";
import { Chart } from "chart.js";
import { Card, Row, Form, Col, Button } from "react-bootstrap";
import Select from "react-select";
//@ts-ignore
import famhold from "../../assets/images/brand/famhold.png";
//@ts-ignore
import famholdIcon from "../../assets/images/brand/famholdIconDarkGreen.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { reportsData } from "./reportsData";

export default function Reports() {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;
  const currentDate = new Date();
  const pastMonth = new Date(
    currentDate.setMonth(currentDate.getMonth() - 1)
  ).toLocaleString("es-ES", { month: "long" });
  const pastMonthCapitalized =
    pastMonth.charAt(0).toUpperCase() + pastMonth.slice(1);
  const currentYear = new Date().getFullYear();

  const defaultCurrency = "MXN";
  const accountCreationDate = { month: "Mayo", year: 2022 };
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [currency, setCurrency] = useState(defaultCurrency);
  const [monthStart, setMonthStart] = useState({
    value: pastMonthCapitalized,
    label: pastMonthCapitalized,
  });

  const [yearStart, setYearStart] = useState({
    value: currentYear,
    label: currentYear,
  });

  const [monthEnd, setMonthEnd] = useState({
    value: "",
    label: "",
  });
  const [yearEnd, setYearEnd] = useState({
    value: null,
    label: null,
  });

  const [reportTypeSelected, setReportTypeSelected] = useState({
    value: "Reporte mensual",
    label: "Reporte mensual",
  });

  const [adminSections, setAdminSections] = useState([
    { label: "Obligaciones personas morales", checked: true },
    { label: "Obligaciones personas físicas", checked: true },
    { label: "Obligaciones de activos", checked: true },
    { label: "Otros pagos variado", checked: true },
  ]);
  
  const [investmentSections, setInvestmentSections] = useState([
    { label: "Balance patrimonial", checked: true },
    { label: "Inversiones bursatiles", checked: true },
    { label: "Capital privado", checked: true },
    { label: "Bienes raices arrendados", checked: true },
    { label: "Cuentas bancarias persona moral", checked: true },
    { label: "Cuentas bancarias persona física", checked: true },
  ]);
  
  const [governanceSections, setGovernanceSections] = useState([
    { label: "Comite de inversion", checked: true },
    { label: "Consejo Familiar", checked: true },
    { label: "Virtual Family Office", checked: true },
  ]);
  

  const accountCreationMonthIndex = months.indexOf(accountCreationDate.month);
  const pastMonthIndex = months.indexOf(pastMonthCapitalized);

  const OptionsStartYear = [];
  for (let year = accountCreationDate.year; year <= currentYear; year++) {
    OptionsStartYear.push({ label: year.toString(), value: year });
  }

  const OptionsStartMonth = [];
  if (yearStart.value === accountCreationDate.year) {
    if (yearStart.value === currentYear) {
      for (let i = accountCreationMonthIndex; i <= pastMonthIndex; i++) {
        OptionsStartMonth.push({ label: months[i], value: months[i] });
      }
    } else if (yearStart.value < currentYear) {
      for (let i = accountCreationMonthIndex; i < months.length; i++) {
        OptionsStartMonth.push({ label: months[i], value: months[i] });
      }
    }
  } else if (
    yearStart.value > accountCreationDate.year &&
    yearStart.value < currentYear
  ) {
    for (let i = 0; i < months.length; i++) {
      OptionsStartMonth.push({ label: months[i], value: months[i] });
    }
  } else if (
    yearStart.value > accountCreationDate.year &&
    yearStart.value === currentYear
  ) {
    for (let i = 0; i <= pastMonthIndex; i++) {
      OptionsStartMonth.push({ label: months[i], value: months[i] });
    }
  }

  if (
    reportTypeSelected.value === "Reporte de periodo" &&
    yearStart.value === currentYear
  ) {
    OptionsStartMonth.length = 0;
    for (let i = 0; i <= pastMonthIndex - 1; i++) {
      OptionsStartMonth.push({ label: months[i], value: months[i] });
    }
  }

  const OptionsEndYear = [];

  for (let i = yearStart.value; i <= currentYear; i++) {
    OptionsEndYear.push({ label: i, value: i });
  }

  // Check if the yearStart is equal to currentYear
  if (yearStart.value === currentYear) {
    OptionsEndYear.length = 0; // Reset the array
    OptionsEndYear.push({ label: currentYear, value: currentYear });
  }

  // Additional logic when monthStart is 'Diciembre'
  else if (yearStart.value < currentYear && monthStart.value === "Diciembre") {
    // Reset OptionsEndYear
    OptionsEndYear.length = 0;

    // Add only the years greater than yearStart.value and less than or equal to currentYear
    for (let i = yearStart.value + 1; i <= currentYear; i++) {
      OptionsEndYear.push({ label: i, value: i });
    }
  }

  const OptionsEndMonth = [];

  if (yearEnd.value === yearStart.value) {
    // If the end year is the same as the start year
    if (yearEnd.value === currentYear) {
      // Add months from the following month of startMonth to pastMonthCapitalized
      for (
        let i = months.indexOf(monthStart.value) + 1;
        i <= pastMonthIndex;
        i++
      ) {
        OptionsEndMonth.push({ label: months[i], value: months[i] });
      }
    } else {
      // Add months from the following month of startMonth to 'Diciembre'
      for (
        let i = months.indexOf(monthStart.value) + 1;
        i < months.length;
        i++
      ) {
        OptionsEndMonth.push({ label: months[i], value: months[i] });
      }
    }
  } else {
    // If the end year is different from the start year
    if (yearEnd.value === currentYear) {
      // Add months from 'Enero' to pastMonthCapitalized
      for (let i = 0; i <= pastMonthIndex; i++) {
        OptionsEndMonth.push({ label: months[i], value: months[i] });
      }
    } else {
      // Add months from 'Enero' to 'Diciembre'
      for (let i = 0; i < months.length; i++) {
        OptionsEndMonth.push({ label: months[i], value: months[i] });
      }
    }
  }

  const ReportTypeOptions = [
    { value: "Reporte mensual", label: "Reporte mensual" },
    { value: "Reporte de periodo", label: "Reporte de periodo" },
  ];

  const pdfData = {
    title: "Reporte de Familia " + reportsData.familyName,
    content: "This is the dynamically passed content for the PDF.",
    imageUrl: "https://example.com/path-to-your-image.jpg",
  };

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      flexDirection: "column",
      backgroundColor: "white",
    },
    image: {
      width: 100,
      height: "auto",
      position: "absolute",
      left: 20,
      top: 25,
      marginBottom: 60,
    },
    title: {
      justifyContent: "flex-end",
      fontSize: 12,
      marginBottom: 10,
      marginTop: 20,
    },
    topRightText: {
      fontSize: 10,
      textAlign: "right",
      marginBottom: 10,
      fontStyle: "italic",
      color: "gray",
    },
    content: {
      fontSize: 12,
      textAlign: "justify",
      marginBottom: 20,
    },
    list: {
      marginTop: 6,
      fontSize: 10,
      color: "gray",
    },
    cateogoryList: {
      marginTop: 3,
      textAlign: "right",
      fontSize: 8,
      color: "gray",
    },
    categoryTitle: {
      fontSize: 15,
      fontWeight: "ultralight",
    },
    subCategoryTitle: {
      fontSize: 14,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
    },
    subCategorySectionHighlights: {
      marginLeft: 20,
    },
    subCategorySection: {
      marginLeft: 20,
      marginRight: 20,
    },
    entitieText: {
      fontSize: 10,
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
    },
    subtitle: {
      fontSize: 10,
      color: "white",
    },
    subtitleContainer: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: "#004745",
      padding: 5,
    },
    subtitleContainerNoMargin: {
      marginTop: 10,
      marginRight: 0,
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: "#004745",
      padding: 5,
    },
    banner: {
      marginBottom: 10,
      padding: 8,
      backgroundColor: "#f2f2f2",
      borderRadius: 5,
      fontSize: 9,
      marginTop: 5,
    },
    bannerText: {
      marginBottom: 6,
    },
    tableHeader: {
      flexDirection: "row",
      backgroundColor: "#f5f5f5",
      color: "#004745",
      paddingTop: 5,
      borderRadius: 5,
      paddingRight: 2,
      paddingLeft: 2,
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 2,
      borderBottomColor: "gray",
      fontSize: 10,
    },
    tableRow: {
      flexDirection: "row",
      fontSize: 9,
    },
    tableRowTotal: {
      flexDirection: "row",
      justifyContent: "space-around",
      fontSize: 9,
    },
    tableCell: {
      flex: 1,
      padding: 2,
    },
    debtAndCollectingContainer: {
      marginTop: 18,
      marginBottom: 18,
    },
    conceptTitle: {
      fontSize: 11,
      marginBottom: 10,
      textAlign: "left",
    },
    conceptMiniTitle: {
      fontSize: 7,
      marginBottom: 4,
      textAlign: "left",
      color: "gray",
    },
    mainTitleContainer: {
      color: "#004745",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#f5f5f5",
      borderColor: "#004745",
      borderRadius: 5,
      padding: 13,
      marginTop: 25,
      marginBottom: 5,
    },
    itemContainer: {
      borderColor: "gray",
      borderWidth: 0.3,
      borderRadius: 0,
      paddingBottom: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    chartImage: {
      width: "100%",
      height: 50,
    },
    icon: {
      height: 15,
      width: 15,
      marginRight: 10,
    },
    tableRowDivider: {
      borderBottomWidth: 1,
      marginVertical: 10,
      borderColor: "#000", // Adjust color and width as needed
    },
    tableCellBold: {
      fontWeight: "bold",
      fontSize: 10, // Adjust font size as needed
    },
  });

  const generateChartImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sales",
            data: [10, 20, 30, 40, 50],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Convert chart to base64 image
    return canvas.toDataURL("image/png");
  };

  const renderHighlights = () => {
    return (
      <>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}>Highlights del periodo</Text>
        </View>
        <View style={styles.subCategorySectionHighlights}>
          {reportsData.highlights.map((highlight, index) => (
            <Text key={index} style={styles.list}>
              - {highlight}
            </Text>
          ))}
        </View>
      </>
    );
  };

  const renderCompaniesObligations = (companiesData) => {
    return (
      <View>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}>
            {" "}
            Obligaciones personas morales
          </Text>
        </View>
        {companiesData.map((company, idx) => (
          <View key={idx} style={styles.itemContainer}>
            <Text style={styles.entitieText}>
              {" "}
              {idx + 1}. {company.companyName}
            </Text>

            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                a) Declaraciones fiscales y resultados:
              </Text>
            </View>
            {company.taxes.map((tax, taxIdx) => (
              <View style={styles.subCategorySection} key={taxIdx}>
                <View style={styles.banner}>
                  <Text style={styles.bannerText}>
                    Total ventas: {tax.totalSales} {reportsData.currency}
                  </Text>
                  <Text style={styles.bannerText}>
                    Total egresos: {tax.totalExpenses} {reportsData.currency}
                  </Text>
                  <Text style={styles.bannerText}>
                    Utilidad neta: {tax.netProfit} {reportsData.currency}
                  </Text>
                  <Text style={styles.bannerText}>
                    Declaraciones mensuales: {tax.amountTaxReportMonthly}
                  </Text>
                  <Text style={styles.bannerText}>
                    Declaraciones anuales: {tax.amountTaxReportYearly}
                  </Text>
                </View>

                <View>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Tipo</Text>
                    <Text style={styles.tableCell}>IVA</Text>
                    <Text style={styles.tableCell}>ISR</Text>
                    <Text style={styles.tableCell}>Declaración de:</Text>
                    <Text style={styles.tableCell}>Dia declaración</Text>
                  </View>

                  {tax.reportList.map((report, reportIdx) => (
                    <View key={reportIdx} style={styles.tableRow}>
                      <Text style={styles.tableCell}>{report.type}</Text>
                      <Text style={styles.tableCell}>
                        {report.iva ? "Si" : "No"}
                      </Text>
                      <Text style={styles.tableCell}>
                        {report.isr ? "Si" : "No"}
                      </Text>
                      <Text style={styles.tableCell}>
                        {report.forMonth === "--" ? "" : report.forMonth}{" "}
                        {report.forYear}
                      </Text>
                      <Text style={styles.tableCell}>{report.reportDay}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}

            {/* Debt Section */}
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                b) Creditos y prestamos por pagar:
              </Text>
            </View>
            {company.debt.map((debtItem, debtIdx) => (
              <View key={debtIdx} style={styles.subCategorySection}>
                {/* Debt Details */}
                {debtItem.debt.map((debtDetail, detailIdx) => (
                  <View
                    key={detailIdx}
                    style={styles.debtAndCollectingContainer}
                  >
                    <Text style={styles.conceptTitle}>
                      - {debtDetail.concept}
                    </Text>
                    <Text style={styles.conceptMiniTitle}>
                      Acreedor: {debtDetail.creditor}
                    </Text>
                    <Text style={styles.conceptMiniTitle}>
                      Tasa de interes: {debtDetail.interestRate}%
                    </Text>
                    <View style={styles.banner}>
                      <Text style={styles.bannerText}>
                        Monto total de deuda: {debtDetail.totalDebt}
                      </Text>
                      <Text style={styles.bannerText}>
                        Monto por pagar inicio del periodo:{" "}
                        {debtDetail.amountPayableBeginDate}
                      </Text>
                      <Text style={styles.bannerText}>
                        Monto por pagar fin del periodo:{" "}
                        {debtDetail.amountPayableEndDate}
                      </Text>
                    </View>

                    {/* Payments Table */}
                    <View>
                      <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Año</Text>
                        <Text style={styles.tableCell}>Mes</Text>
                        <Text style={styles.tableCell}>Monto</Text>
                        <Text style={styles.tableCell}>Día de pago</Text>
                      </View>

                      {debtDetail.payments.map((payment, paymentIdx) => (
                        <View key={paymentIdx} style={styles.tableRow}>
                          <Text style={styles.tableCell}>{payment.year}</Text>
                          <Text style={styles.tableCell}>{payment.month}</Text>
                          <Text style={styles.tableCell}>{payment.amount}</Text>
                          <Text style={styles.tableCell}>
                            {payment.paymentDay}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            ))}

            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>c) Prestamos por cobrar:</Text>
            </View>
            {company.collecting.map((debtItem, debtIdx) => (
              <View key={debtIdx} style={styles.subCategorySection}>
                {/* collecting Details */}
                {debtItem.debt.map((debtDetail, detailIdx) => (
                  <View
                    key={detailIdx}
                    style={styles.debtAndCollectingContainer}
                  >
                    <Text style={styles.conceptTitle}>
                      - {debtDetail.concept}
                    </Text>
                    <Text style={styles.conceptMiniTitle}>
                      Deudor: {debtDetail.debtor}
                    </Text>
                    <Text style={styles.conceptMiniTitle}>
                      Tasa de interes: {debtDetail.interestRate}%
                    </Text>
                    <View style={styles.banner}>
                      <Text style={styles.bannerText}>
                        Monto total de deuda: {debtDetail.totalDebt}
                      </Text>
                      <Text style={styles.bannerText}>
                        Monto por pagar inicio del periodo:{" "}
                        {debtDetail.amountReceivableBeginDate}
                      </Text>
                      <Text style={styles.bannerText}>
                        Monto por pagar fin del periodo:{" "}
                        {debtDetail.amountReceivableEndDate}
                      </Text>
                    </View>

                    {/* collecting Table */}
                    <View>
                      <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Año</Text>
                        <Text style={styles.tableCell}>Mes</Text>
                        <Text style={styles.tableCell}>Monto</Text>
                        <Text style={styles.tableCell}>Día de pago</Text>
                      </View>

                      {debtDetail.payments.map((payment, paymentIdx) => (
                        <View key={paymentIdx} style={styles.tableRow}>
                          <Text style={styles.tableCell}>{payment.year}</Text>
                          <Text style={styles.tableCell}>{payment.month}</Text>
                          <Text style={styles.tableCell}>{payment.amount}</Text>
                          <Text style={styles.tableCell}>
                            {payment.paymentDay}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  const renderFamilyMembersObligations = (memberData) => {
    return (
      <View break={true}>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}>
            {" "}
            Obligaciones personas físicas
          </Text>
        </View>
        {memberData.map((member, idx) => (
          <View key={idx} style={styles.itemContainer}>
            <Text style={styles.entitieText}>
              {" "}
              {idx + 1}. {member.familyMemberName}
            </Text>

            {member.taxes.length > 0 && (
              <>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>
                    a) Declaraciones fiscales:
                  </Text>
                </View>
                {member.taxes.map((tax, taxIdx) => (
                  <View style={styles.subCategorySection} key={taxIdx}>
                    <View>
                      <Text style={styles.conceptMiniTitle}>
                        Regimen Fiscal: {member.taxRegime}
                      </Text>
                      <Text style={styles.conceptMiniTitle}>
                        Frecuencia de declaraciones:{" "}
                        {member.taxReportFrequency.join(", ")}
                      </Text>
                      <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Tipo</Text>
                        <Text style={styles.tableCell}>IVA</Text>
                        <Text style={styles.tableCell}>ISR</Text>
                        <Text style={styles.tableCell}>Declaración de:</Text>
                        <Text style={styles.tableCell}>Dia declaración</Text>
                      </View>

                      {tax.reportList.map((report, reportIdx) => (
                        <View key={reportIdx} style={styles.tableRow}>
                          <Text style={styles.tableCell}>{report.type}</Text>
                          <Text style={styles.tableCell}>
                            {report.iva ? "Si" : "No"}
                          </Text>
                          <Text style={styles.tableCell}>
                            {report.isr ? "Si" : "No"}
                          </Text>
                          <Text style={styles.tableCell}>
                            {report.forMonth === "--" ? "" : report.forMonth}{" "}
                            {report.forYear}
                          </Text>
                          <Text style={styles.tableCell}>
                            {report.reportDay}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </>
            )}

            {/* DEUDAS */}
            {member.debt.length > 0 && (
              <>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>
                    b) Creditos y prestamos por pagar:
                  </Text>
                </View>
                {member.debt.map((debtItem, debtIdx) => (
                  <View key={debtIdx} style={styles.subCategorySection}>
                    {debtItem.debt.map((debtDetail, detailIdx) => (
                      <View
                        key={detailIdx}
                        style={styles.debtAndCollectingContainer}
                      >
                        <Text style={styles.conceptTitle}>
                          - {debtDetail.concept}
                        </Text>
                        <Text style={styles.conceptMiniTitle}>
                          Acreedor: {debtDetail.creditor}
                        </Text>
                        <Text style={styles.conceptMiniTitle}>
                          Tasa de interes: {debtDetail.interestRate}%
                        </Text>
                        <View style={styles.banner}>
                          <Text style={styles.bannerText}>
                            Monto total de deuda: {debtDetail.totalDebt}
                          </Text>
                          <Text style={styles.bannerText}>
                            Monto por pagar inicio del periodo:{" "}
                            {debtDetail.amountPayableBeginDate}
                          </Text>
                          <Text style={styles.bannerText}>
                            Monto por pagar fin del periodo:{" "}
                            {debtDetail.amountPayableEndDate}
                          </Text>
                        </View>

                        <View>
                          <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}>Año</Text>
                            <Text style={styles.tableCell}>Mes</Text>
                            <Text style={styles.tableCell}>Monto</Text>
                            <Text style={styles.tableCell}>Día de pago</Text>
                          </View>

                          {debtDetail.payments.map((payment, paymentIdx) => (
                            <View key={paymentIdx} style={styles.tableRow}>
                              <Text style={styles.tableCell}>
                                {payment.year}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.month}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.amount}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.paymentDay}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                ))}
              </>
            )}
            {member.collecting.length > 0 && (
              <>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>c) Prestamos por cobrar:</Text>
                </View>
                {member.collecting.map((debtItem, debtIdx) => (
                  <View key={debtIdx} style={styles.subCategorySection}>
                    {/* PRESTAMOS POR COBRAR */}
                    {debtItem.debt.map((debtDetail, detailIdx) => (
                      <View
                        key={detailIdx}
                        style={styles.debtAndCollectingContainer}
                      >
                        <Text style={styles.conceptTitle}>
                          - {debtDetail.concept}
                        </Text>
                        <Text style={styles.conceptMiniTitle}>
                          Deudor: {debtDetail.debtor}
                        </Text>
                        <Text style={styles.conceptMiniTitle}>
                          Tasa de interes: {debtDetail.interestRate}%
                        </Text>
                        <View style={styles.banner}>
                          <Text style={styles.bannerText}>
                            Monto total de deuda: {debtDetail.totalDebt}
                          </Text>
                          <Text style={styles.bannerText}>
                            Monto por cobrar inicio del periodo:{" "}
                            {debtDetail.amountReceivableBeginDate}
                          </Text>
                          <Text style={styles.bannerText}>
                            Monto por cobrar fin del periodo:{" "}
                            {debtDetail.amountReceivableEndDate}
                          </Text>
                        </View>

                        <View>
                          <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}>Año</Text>
                            <Text style={styles.tableCell}>Mes</Text>
                            <Text style={styles.tableCell}>Monto</Text>
                            <Text style={styles.tableCell}>Día de pago</Text>
                          </View>

                          {debtDetail.payments.map((payment, paymentIdx) => (
                            <View key={paymentIdx} style={styles.tableRow}>
                              <Text style={styles.tableCell}>
                                {payment.year}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.month}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.amount}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.paymentDay}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                ))}
              </>
            )}

            {member.insurances.lifeInsurances.length > 0 && (
              <>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>d) Seguros de vida:</Text>
                </View>

                {member.insurances.lifeInsurances.map((insurance, insIdx) => (
                  <View key={insIdx} style={styles.subCategorySection}>
                    {/* SEGUROS DE VIDA */}
                    <View style={styles.banner}>
                      <Text style={styles.bannerText}>
                        Compañía de seguros: {insurance.insuranceCompany}
                      </Text>
                      <Text style={styles.bannerText}>
                        Frecuencia de pagos: {insurance.paymentFrequency}
                      </Text>
                      <Text style={styles.bannerText}>
                        Vigencia: {insurance.from} - {insurance.to}
                      </Text>
                    </View>

                    <View>
                      <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Año</Text>
                        <Text style={styles.tableCell}>Mes</Text>
                        <Text style={styles.tableCell}>Vigencia del</Text>
                        <Text style={styles.tableCell}>Vigencia al</Text>
                      </View>

                      {insurance.payments.map((payment, paymentIdx) => (
                        <View key={paymentIdx} style={styles.tableRow}>
                          <Text style={styles.tableCell}>{payment.year}</Text>
                          <Text style={styles.tableCell}>{payment.month}</Text>
                          <Text style={styles.tableCell}>{payment.from}</Text>
                          <Text style={styles.tableCell}>{payment.to}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </>
            )}

            {member.insurances.lifeInsurances.length > 0 && (
              <>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>e) Seguros médico:</Text>
                </View>

                {member.insurances.medicalInsurances.map(
                  (insurance, insIdx) => (
                    <View key={insIdx} style={styles.subCategorySection}>
                      {/* SEGUROS MEDICOS */}
                      <View style={styles.banner}>
                        <Text style={styles.bannerText}>
                          Compañía de seguros: {insurance.insuranceCompany}
                        </Text>
                        <Text style={styles.bannerText}>
                          Frecuencia de pagos: {insurance.paymentFrequency}
                        </Text>
                        <Text style={styles.bannerText}>
                          Vigencia: {insurance.from} - {insurance.to}
                        </Text>
                      </View>

                      <View>
                        <View style={styles.tableHeader}>
                          <Text style={styles.tableCell}>Año</Text>
                          <Text style={styles.tableCell}>Mes</Text>
                          <Text style={styles.tableCell}>Vigencia del</Text>
                          <Text style={styles.tableCell}>Vigencia al</Text>
                        </View>

                        {insurance.payments.map((payment, paymentIdx) => (
                          <View key={paymentIdx} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{payment.year}</Text>
                            <Text style={styles.tableCell}>
                              {payment.month}
                            </Text>
                            <Text style={styles.tableCell}>{payment.from}</Text>
                            <Text style={styles.tableCell}>{payment.to}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )
                )}
              </>
            )}
          </View>
        ))}
      </View>
    );
  };

  const renderAssetsObligations = (assetData) => {
    return (
      <View break={true}>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}> Obligaciones de activos </Text>
        </View>

        {assetData.realState.length > 0 && (
          <View>
            {assetData.realState.map((asset, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. {asset.name}
                </Text>
                {asset.taxProperty.payments.length > 0 && (
                  <>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>a) Prediales:</Text>
                    </View>

                    <View style={styles.subCategorySection}>
                      <Text style={styles.conceptMiniTitle}>
                        Frecuencia de pago: {asset.taxProperty.paymentFrequency}
                      </Text>
                      <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Monto</Text>
                        <Text style={styles.tableCell}>Vigencia del</Text>
                        <Text style={styles.tableCell}>Vigencia al</Text>
                      </View>
                      {asset.taxProperty.payments.map((tax, taxIdx) => (
                        <View style={styles.tableRow}>
                          <Text style={styles.tableCell}>{tax.amount}</Text>
                          <Text style={styles.tableCell}>{tax.from}</Text>
                          <Text style={styles.tableCell}>{tax.to}</Text>
                        </View>
                      ))}
                    </View>
                  </>
                )}

                {asset.mantainance.payments.length > 0 && (
                  <>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>b) Mantenimientos:</Text>
                    </View>

                    <View style={styles.subCategorySection}>
                      <View>
                        <Text style={styles.conceptMiniTitle}>
                          Nombre de mantenimiento: {asset.mantainance.name}
                        </Text>
                        <View style={styles.tableHeader}>
                          <Text style={styles.tableCell}>Monto</Text>
                          <Text style={styles.tableCell}>Año</Text>
                          <Text style={styles.tableCell}>Mes</Text>
                        </View>
                        {asset.mantainance.payments.map((mant, taxIdx) => (
                          <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>{mant.amount}</Text>
                            <Text style={styles.tableCell}>{mant.year}</Text>
                            <Text style={styles.tableCell}>{mant.month}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </>
                )}

                {asset.debt.length > 0 && (
                  <>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        c) Creditos hipotecarios:
                      </Text>
                    </View>
                    {asset.debt.map((debtItem, debtIdx) => (
                      <View key={debtIdx} style={styles.subCategorySection}>
                        {/* PRESTAMOS POR COBRAR */}
                        <View key={debtIdx}>
                          <Text style={styles.conceptMiniTitle}>
                            Acreedor: {debtItem.debtor}
                          </Text>
                          <Text style={styles.conceptMiniTitle}>
                            Tasa de interes: {debtItem.interestRate}%
                          </Text>
                          <View style={styles.banner}>
                            <Text style={styles.bannerText}>
                              Monto total de deuda: {debtItem.totalDebt}
                            </Text>
                            <Text style={styles.bannerText}>
                              Monto por cobrar inicio del periodo:{" "}
                              {debtItem.amountPayableBeginDate}
                            </Text>
                            <Text style={styles.bannerText}>
                              Monto por cobrar fin del periodo:{" "}
                              {debtItem.amountPayableEndDate}
                            </Text>
                          </View>

                          <View>
                            <View style={styles.tableHeader}>
                              <Text style={styles.tableCell}>Año</Text>
                              <Text style={styles.tableCell}>Mes</Text>
                              <Text style={styles.tableCell}>Monto</Text>
                              <Text style={styles.tableCell}>Día de pago</Text>
                            </View>

                            {debtItem.payments.map((payment, paymentIdx) => (
                              <View key={paymentIdx} style={styles.tableRow}>
                                <Text style={styles.tableCell}>
                                  {payment.year}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {payment.month}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {payment.amount}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {payment.paymentDay}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      </View>
                    ))}
                  </>
                )}

                {asset.rentCollecting.tenant && (
                  <>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        d) Cobro de arrendamiento:
                      </Text>
                    </View>

                    <View style={styles.subCategorySection}>
                      <View>
                        <Text style={styles.conceptMiniTitle}>
                          Nombre de arrendatario: {asset.rentCollecting.tenant}
                        </Text>
                        <View style={styles.tableHeader}>
                          <Text style={styles.tableCell}>Monto</Text>
                          <Text style={styles.tableCell}>Año</Text>
                          <Text style={styles.tableCell}>Mes</Text>
                        </View>
                        {asset.rentCollecting.collecting.map((mant, taxIdx) => (
                          <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>{mant.amount}</Text>
                            <Text style={styles.tableCell}>{mant.year}</Text>
                            <Text style={styles.tableCell}>{mant.month}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </>
                )}

                {asset.insurances.length > 0 && (
                  <>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        e) Seguros inmobiliario:
                      </Text>
                    </View>

                    {asset.insurances.map((insurance, insIdx) => (
                      <View key={insIdx} style={styles.subCategorySection}>
                        {/* SEGUROS MEDICOS */}
                        <View style={styles.banner}>
                          <Text style={styles.bannerText}>
                            Compañía de seguros: {insurance.insuranceCompany}
                          </Text>
                          <Text style={styles.bannerText}>
                            Frecuencia de pagos: {insurance.paymentFrequency}
                          </Text>
                          <Text style={styles.bannerText}>
                            Vigencia: {insurance.from} - {insurance.to}
                          </Text>
                        </View>

                        <View>
                          <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}>Año</Text>
                            <Text style={styles.tableCell}>Mes</Text>
                            <Text style={styles.tableCell}>Vigencia del</Text>
                            <Text style={styles.tableCell}>Vigencia al</Text>
                          </View>

                          {insurance.payments.map((payment, paymentIdx) => (
                            <View key={paymentIdx} style={styles.tableRow}>
                              <Text style={styles.tableCell}>
                                {payment.year}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.month}
                              </Text>
                              <Text style={styles.tableCell}>
                                {payment.from}
                              </Text>
                              <Text style={styles.tableCell}>{payment.to}</Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  const renderOtherPayments = (otherPaymentsData) => {
    return (
      <View break={true}>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}> Otros pagos variados </Text>
        </View>
        {otherPaymentsData.map((payment, idx) => (
          <View key={idx} style={styles.itemContainer}>
            <Text style={styles.entitieText}>
              {" "}
              {idx + 1}. {payment.name}
            </Text>

            <View style={styles.subCategorySection}>
              <Text style={styles.conceptMiniTitle}>
                Frecuencia de pago: {payment.paymentFrequency}
              </Text>
            </View>

            {payment.payments.length > 0 && (
              <>
                <View style={styles.subCategorySection}>
                  <View>
                    <View style={styles.tableHeader}>
                      <Text style={styles.tableCell}>Mes</Text>
                      <Text style={styles.tableCell}>Año</Text>
                      <Text style={styles.tableCell}>Monto</Text>
                      <Text style={styles.tableCell}>Dia de pago:</Text>
                    </View>

                    {payment.payments.map((transfer, reportIdx) => (
                      <View key={reportIdx} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{transfer.month}</Text>
                        <Text style={styles.tableCell}>{transfer.year}</Text>
                        <Text style={styles.tableCell}>
                          {transfer.amount} {transfer.currecny}
                        </Text>
                        <Text style={styles.tableCell}>
                          {transfer.paymentDay}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </>
            )}
          </View>
        ))}
      </View>
    );
  };

  const renderInvestmentsAndAssets = (investmentData) => {
    return (
      <View break={true}>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}> Inversiones y activos </Text>
        </View>

        {investmentData.stockInvestments.length > 0 && (
          <View>
            <View style={styles.subtitleContainerNoMargin}>
              <Text style={styles.subtitle}>Inversiones bursatiles:</Text>
            </View>
            {investmentData.stockInvestments.map((asset, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. {asset.bank}-{asset.accountNumber}
                </Text>

                <View style={styles.subCategorySection}>
                  <View style={styles.banner}>
                    <Text style={styles.bannerText}>
                      Valor al inicio del periodo: {asset.totalValueBeginDate}
                    </Text>
                    <Text style={styles.bannerText}>
                      Valor al inicio del periodo: {asset.totalValueEndDate}
                    </Text>
                    <Text style={styles.bannerText}>
                      <Text>
                        Propietarios de inversión:{" "}
                        {asset.owners
                          .map((owner) => `${owner.name}-${owner.pct}`)
                          .join(", ")}
                      </Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.subCategorySection}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Mes</Text>
                    <Text style={styles.tableCell}>Año</Text>
                    <Text style={styles.tableCell}>Valuación</Text>
                  </View>
                  {asset.valuations.map((inv, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{inv.month}</Text>
                      <Text style={styles.tableCell}>{inv.year}</Text>
                      <Text style={styles.tableCell}>{inv.amount}</Text>
                    </View>
                  ))}

                  {/* <Image style={styles.chartImage} src={generateChartImage()} /> */}
                </View>
              </View>
            ))}
          </View>
        )}

        {investmentData.bankAccountsCompanies.length > 0 && (
          <View>
            <View style={styles.subtitleContainerNoMargin}>
              <Text style={styles.subtitle}>
                Cuentas bancarias personas morales:
              </Text>
            </View>
            {investmentData.bankAccountsCompanies.map((company, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. {company.name}
                </Text>

                <View style={styles.subCategorySection}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Banco</Text>
                    <Text style={styles.tableCell}>Cuenta</Text>
                    <Text style={styles.tableCell}>Moneda</Text>
                    <Text style={styles.tableCell}>Valor inicio periodo</Text>
                    <Text style={styles.tableCell}>Valor fin periodo</Text>
                  </View>
                  {company.accounts.map((inv, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{inv.bank}</Text>
                      <Text style={styles.tableCell}>{inv.accountNumber}</Text>
                      <Text style={styles.tableCell}>{inv.currency}</Text>
                      <Text style={styles.tableCell}>
                        {inv.totalValueBeginDate} {inv.currency}
                      </Text>
                      <Text style={styles.tableCell}>
                        {inv.totalValueEndDate} {inv.currency}
                      </Text>
                    </View>
                  ))}

                  {/* <Image style={styles.chartImage} src={generateChartImage()} /> */}
                </View>
              </View>
            ))}
          </View>
        )}

        {investmentData.bankAccountsFamilyMembers.length > 0 && (
          <View>
            <View style={styles.subtitleContainerNoMargin}>
              <Text style={styles.subtitle}>
                Cuentas bancarias personas físicas:
              </Text>
            </View>
            {investmentData.bankAccountsFamilyMembers.map((member, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. {member.name}
                </Text>

                <View style={styles.subCategorySection}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Banco</Text>
                    <Text style={styles.tableCell}>Cuenta</Text>
                    <Text style={styles.tableCell}>Moneda</Text>
                    <Text style={styles.tableCell}>Valor inicio periodo</Text>
                    <Text style={styles.tableCell}>Valor fin periodo</Text>
                  </View>
                  {member.accounts.map((inv, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{inv.bank}</Text>
                      <Text style={styles.tableCell}>{inv.accountNumber}</Text>
                      <Text style={styles.tableCell}>{inv.currency}</Text>
                      <Text style={styles.tableCell}>
                        {inv.totalValueBeginDate} {inv.currency}
                      </Text>
                      <Text style={styles.tableCell}>
                        {inv.totalValueEndDate} {inv.currency}
                      </Text>
                    </View>
                  ))}

                  {/* <Image style={styles.chartImage} src={generateChartImage()} /> */}
                </View>
              </View>
            ))}
          </View>
        )}

        {investmentData.privateEquityFunds.length > 0 && (
          <View>
            <View style={styles.subtitleContainerNoMargin}>
              <Text style={styles.subtitle}>Capital privado - Fondos:</Text>
            </View>
            {investmentData.privateEquityFunds.map((asset, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. {asset.fundName}
                </Text>

                <View style={styles.subCategorySection}>
                  <View style={styles.banner}>
                    <Text style={styles.bannerText}>
                      Retornos totales al inicio del periodo:{" "}
                      {asset.totalReturnsBeginDate} {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      Retornos totales al inicio del periodo:{" "}
                      {asset.totalReturnsEndDate} {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      <Text>
                        Propietarios de inversión:{" "}
                        {asset.owners
                          .map((owner) => `${owner.name} - ${owner.pct}`)
                          .join(", ")}
                      </Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.subCategorySection}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Mes</Text>
                    <Text style={styles.tableCell}>Año</Text>
                    <Text style={styles.tableCell}>Retorno</Text>
                  </View>
                  {asset.returnsInPeriod.map((inv, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{inv.month}</Text>
                      <Text style={styles.tableCell}>{inv.year}</Text>
                      <Text style={styles.tableCell}>{inv.amount}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {investmentData.privateEquityCapital.length > 0 && (
          <View>
            <View style={styles.subtitleContainerNoMargin}>
              <Text style={styles.subtitle}>Capital privado - Capital:</Text>
            </View>
            {investmentData.privateEquityCapital.map((asset, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. Inversion a empresa - {asset.investmentCompany}
                </Text>

                <View style={styles.subCategorySection}>
                  <View style={styles.banner}>
                    <Text style={styles.bannerText}>
                      Capital invertido en empresa: {asset.investmentAmount}{" "}
                      {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      Valuación previa a inversión: {asset.valuationPreMoney}{" "}
                      {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      Valuación inicio del periodo: {asset.valuationBeginDate}{" "}
                      {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      Valuación fin del periodo: {asset.valuationEndDate}{" "}
                      {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      Porcentaje de participiación: {asset.sharePercentage}{" "}
                    </Text>
                    <Text style={styles.bannerText}>
                      <Text>
                        Propietarios de inversión:{" "}
                        {asset.owners
                          .map((owner) => `${owner.name} - ${owner.pct}`)
                          .join(", ")}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {investmentData.realStateRents.length > 0 && (
          <View>
            <View style={styles.subtitleContainerNoMargin}>
              <Text style={styles.subtitle}>Bienes raices arrendados:</Text>
            </View>
            {investmentData.realStateRents.map((asset, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <Text style={styles.entitieText}>
                  {" "}
                  {idx + 1}. {asset.propertyName}
                </Text>

                <View style={styles.subCategorySection}>
                  <View style={styles.banner}>
                    <Text style={styles.bannerText}>
                      Total cobrado en el periodo:{" "}
                      {asset.totalCollectingInPeriod} {asset.currency}
                    </Text>
                    <Text style={styles.bannerText}>
                      <Text>
                        Propietarios de inversión:{" "}
                        {asset.owners
                          .map((owner) => `${owner.name} - ${owner.pct}`)
                          .join(", ")}
                      </Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.subCategorySection}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Mes</Text>
                    <Text style={styles.tableCell}>Año</Text>
                    <Text style={styles.tableCell}>Cobro de renta</Text>
                  </View>
                  {asset.collecting.map((inv, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{inv.month}</Text>
                      <Text style={styles.tableCell}>{inv.year}</Text>
                      <Text style={styles.tableCell}>
                        {inv.amount} {asset.currency}
                      </Text>
                    </View>
                  ))}

                  {/* <Image style={styles.chartImage} src={generateChartImage()} /> */}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  const renderGovernance = (governanceData) => {
    return (
      <View break={true}>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}>Governanza</Text>
        </View>

        <View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Comite de inversión:</Text>
          </View>
          {governanceData.investmentCommittee.meetings.length > 0 && (
            <>
              <View style={styles.subCategorySection}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableCell}>Nombre de junta</Text>
                  <Text style={styles.tableCell}>Dia de junta</Text>
                  <Text style={styles.tableCell}>Participantes</Text>
                </View>
                {governanceData.investmentCommittee.meetings.map(
                  (meet, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{meet.meetingName}</Text>
                      <Text style={styles.tableCell}>{meet.meetingDay}</Text>
                      <Text style={styles.tableCell}>{meet.participants}</Text>
                    </View>
                  )
                )}
              </View>
            </>
          )}
          {governanceData.investmentCommittee.voatings.length > 0 && (
            <>
              <View style={styles.subCategorySection}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableCell}>Nombre de votación</Text>
                  <Text style={styles.tableCell}>Dia de junta</Text>
                  <Text style={styles.tableCell}>Participantes</Text>
                </View>
                {governanceData.investmentCommittee.voatings.map(
                  (meet, taxIdx) => (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>{meet.meetingName}</Text>
                      <Text style={styles.tableCell}>{meet.result}</Text>
                      <Text style={styles.tableCell}>{meet.participants}</Text>
                    </View>
                  )
                )}
              </View>
            </>
          )}

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Consejo familiar:</Text>
          </View>

          {governanceData.familyCouncil.meetings.length > 0 && (
            <>
              <View style={styles.subCategorySection}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableCell}>Nombre de junta</Text>
                  <Text style={styles.tableCell}>Dia de junta</Text>
                  <Text style={styles.tableCell}>Participantes</Text>
                </View>
                {governanceData.familyCouncil.meetings.map((meet, taxIdx) => (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>{meet.meetingName}</Text>
                    <Text style={styles.tableCell}>{meet.meetingDay}</Text>
                    <Text style={styles.tableCell}>{meet.participants}</Text>
                  </View>
                ))}
              </View>
            </>
          )}

          {governanceData.familyCouncil.voatings.length > 0 && (
            <>
              <View style={styles.subCategorySection}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableCell}>Nombre de votación</Text>
                  <Text style={styles.tableCell}>Resultado de votaciones</Text>
                  <Text style={styles.tableCell}>Participantes</Text>
                </View>
                {governanceData.familyCouncil.voatings.map((meet, taxIdx) => (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>{meet.voatingName}</Text>
                    <Text style={styles.tableCell}>{meet.result}</Text>
                    <Text style={styles.tableCell}>{meet.participants}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      </View>
    );
  };

  const renderWealthBalance = (wealthBalance) => {
    return (
      <View break={true}>
        <View style={styles.mainTitleContainer}>
          <Image style={styles.icon} src={famholdIcon} />
          <Text style={styles.categoryTitle}> Balance Patrimonial </Text>
        </View>

        <View>
          {/* Assets Section */}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Valor de activos:</Text>
          </View>

          <View style={styles.subCategorySection}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Nombre del activo</Text>
              <Text style={styles.tableCell}>Valuación inicio periodo</Text>
              <Text style={styles.tableCell}>Valuación final periodo</Text>
            </View>

            {[
              { name: "Bienes raíces", ...wealthBalance.realState },
              { name: "Cuentas bancarias", ...wealthBalance.bankAccounts },
              { name: "Empresas", ...wealthBalance.companies },
              {
                name: "Inversiones bursátiles",
                ...wealthBalance.stockInvestments,
              },
              { name: "Vehículos", ...wealthBalance.vehicles },
              {
                name: "Arte y colecciones",
                ...wealthBalance.artAndCollections,
              },
              { name: "Préstamos cobrables", ...wealthBalance.loansCollecting },
              {
                name: "Fondos de capital privado",
                ...wealthBalance.privateEquityFund,
              },
              {
                name: "Capital de inversión privada",
                ...wealthBalance.privateEquityCapital,
              },
            ].map((asset, idx) => (
              <View style={styles.tableRow} key={idx}>
                <Text style={styles.tableCell}>{asset.name}</Text>
                <Text style={styles.tableCell}>
                  {asset.valuationStartDate} {wealthBalance.currency}
                </Text>
                <Text style={styles.tableCell}>
                  {asset.valuationEndDate} {wealthBalance.currency}
                </Text>
              </View>
            ))}

            <View style={styles.tableRowDivider} />

            <View style={styles.tableRowTotal}>
              <Text style={styles.tableCellBold}></Text>
              <Text style={styles.tableCellBold}>
                {wealthBalance.totalAssetValue.valuationStartDate}{" "}
                {wealthBalance.currency}
              </Text>
              <Text style={styles.tableCellBold}>
                {wealthBalance.totalAssetValue.valuationEndDate}{" "}
                {wealthBalance.currency}
              </Text>
            </View>
          </View>

          {/* Liabilities Section */}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Valor de pasivos:</Text>
          </View>

          <View style={styles.subCategorySection}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Nombre del pasivo</Text>
              <Text style={styles.tableCell}>Valor inicio periodo</Text>
              <Text style={styles.tableCell}>Valor final periodo</Text>
            </View>

            {[
              { name: "Deudas y créditos por pagar", ...wealthBalance.debt },
            ].map((asset, idx) => (
              <View style={styles.tableRow} key={idx}>
                <Text style={styles.tableCell}>{asset.name}</Text>
                <Text style={styles.tableCell}>
                  {asset.valuationStartDate} {wealthBalance.currency}
                </Text>
                <Text style={styles.tableCell}>
                  {asset.valuationEndDate} {wealthBalance.currency}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const MyDocument = ({ data }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.topRightText}>
          <i
            style={{ marginRight: 9 }}
            className="fe fe-briefcase text-black fs-15"
          ></i>{" "}
          {reportsData.from.month}-{reportsData.from.year} a{" "}
          {reportsData.to.month}-{reportsData.to.year}
        </Text>

        <Image style={styles.image} src={famhold} />

        <Text style={styles.title}>{data.title}</Text>

        <View>
          {reportsData.content.map((item, index) => (
            <Text key={index} style={styles.cateogoryList}>
              - {item}
            </Text>
          ))}
        </View>

        {renderHighlights()}
        {renderCompaniesObligations(reportsData.companiesObligations)}
        {renderFamilyMembersObligations(reportsData.familyMembersObligations)}
        {renderAssetsObligations(reportsData.assetsObligations)}
        {renderOtherPayments(reportsData.otherPayments)}
        {renderInvestmentsAndAssets(reportsData.investmentsAndAssets)}
        {renderWealthBalance(reportsData.wealthBalance)}
        {renderGovernance(reportsData.governance)}
      </Page>
    </Document>
  );

  const onReportTypeChange = (valueSelected) => {
    if (valueSelected.value === "Reporte de periodo") {
      setMonthStart({ label: "", value: "" });
      //@ts-ignore
      setYearStart({ label: "", value: "" });
    } else {
      setYearStart({
        label: currentYear,
        value: currentYear,
      });

      setMonthStart({
        value: pastMonthCapitalized,
        label: pastMonthCapitalized,
      });
    }

    setReportTypeSelected({
      label: valueSelected.label,
      value: valueSelected.value,
    });
    setMonthEnd({ value: "", label: "" });
    setYearEnd({ value: "", label: "" });
  };

  const onStarYearChange = (valueSelected) => {
    setMonthStart({ label: "", value: "" });
    setMonthEnd({ value: "", label: "" });
    setYearEnd({ value: "", label: "" });
    setYearStart({ label: valueSelected.label, value: valueSelected.value });
  };

  const onStartMonthChanges = (valueSelected) => {
    setYearEnd({ value: "", label: "" });
    setMonthEnd({ value: "", label: "" });
    setMonthStart({ label: valueSelected.label, value: valueSelected.value });
  };

  const renderReportFilters = () => {
    return (
      <>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Tipo de reporte</Form.Label>
            <Select
              options={ReportTypeOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => onReportTypeChange(value)}
              placeholder="Año"
              value={reportTypeSelected}
            />
          </Form.Group>
        </Row>

        {reportTypeSelected.value === "Reporte mensual" ? (
          <>
            <Form.Label style={{ marginTop: 20 }}>Fecha de reporte</Form.Label>
            <Row style={{ marginTop: 5 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>Año</p>
                <Select
                  options={OptionsStartYear}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => onStarYearChange(value)}
                  placeholder="Año"
                  value={yearStart}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>Mes</p>
                <Select
                  options={OptionsStartMonth}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setMonthStart(value)}
                  placeholder="Año"
                  value={monthStart}
                />
              </Form.Group>
            </Row>
          </>
        ) : (
          <>
            <Form.Label style={{ marginTop: 20 }}>
              Fecha inicio periodo de reporte
            </Form.Label>
            <Row style={{ marginTop: 5 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>Año</p>
                <Select
                  options={OptionsStartYear}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => onStarYearChange(value)}
                  placeholder="Año"
                  value={yearStart}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>Mes</p>
                <Select
                  options={OptionsStartMonth}
                  isDisabled={!yearStart.value}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => onStartMonthChanges(value)}
                  placeholder="Año"
                  value={monthStart}
                />
              </Form.Group>
            </Row>

            <Form.Label style={{ marginTop: 20 }}>
              Fecha fin periodo de reporte
            </Form.Label>
            <Row style={{ marginTop: 5 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>Año</p>
                <Select
                  options={OptionsEndYear}
                  isDisabled={!(yearStart.value && monthStart.value)}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setYearEnd(value)}
                  placeholder=""
                  value={yearEnd}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>Mes</p>
                <Select
                  options={OptionsEndMonth}
                  isDisabled={
                    !(yearStart.value && monthStart.value && yearEnd.value)
                  }
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setMonthEnd(value)}
                  placeholder=""
                  value={monthEnd}
                />
              </Form.Group>
            </Row>
          </>
        )}
      </>
    );
  };

  const renderReportCategorySelection = () => {
    const handleCheckboxChange = (section, category, isChecked) => {
      if (category === "Administración") {
        setAdminSections((prevSections) =>
          prevSections.map((item) =>
            item.label === section.label ? { ...item, checked: isChecked } : item
          )
        );
      } else if (category === "Inversiones") {
        setInvestmentSections((prevSections) =>
          prevSections.map((item) =>
            item.label === section.label ? { ...item, checked: isChecked } : item
          )
        );
      } else if (category === "Governance") {
        setGovernanceSections((prevSections) =>
          prevSections.map((item) =>
            item.label === section.label ? { ...item, checked: isChecked } : item
          )
        );
      }
    };
  
    return (
      <>
        <Row style={{ marginTop: 20, marginBottom: 40 }}>
          <Form.Label style={{ marginBottom: 15 }}>
           Secciones del reporte
            </Form.Label>
          <Form.Group as={Col} md="4" className="form-group">  
            <p style={{ color: "gray", fontSize: 12 }}>Administración</p>
            {adminSections.map((section, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                // className="custom-checkbox"
                name="administracion"
                label={section.label}
                checked={section.checked}
                onChange={(e) =>
                  handleCheckboxChange(section, "Administración", e.target.checked)
                }
                style={{ marginLeft: 15, marginTop: 8 }}
              />
            ))}
          </Form.Group>
  
          {/* Inversiones Column */}
          <Form.Group as={Col} md="4" className="form-group">
          <p style={{ color: "gray", fontSize: 12 }}>Inversiones</p>
            {investmentSections.map((section, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                // className="custom-checkbox"
                label={section.label}
                checked={section.checked}
                onChange={(e) =>
                  handleCheckboxChange(section, "Inversiones", e.target.checked)
                }
                style={{ marginLeft: 15, marginTop: 8 }}
              />
            ))}
          </Form.Group >
          {/* Governance Column */}
          <Form.Group as={Col} md="4" className="form-group">
          <p style={{ color: "gray", fontSize: 12 }}>Governance</p>
            {governanceSections.map((section, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                // className="custom-checkbox"
                label={section.label}
                checked={section.checked}
                onChange={(e) =>
                  handleCheckboxChange(section, "Governance", e.target.checked)
                }
                style={{ marginLeft: 15, marginTop: 8 }}
              />
            ))}
          </Form.Group >
        </Row>
      </>
    );
  };
  
  
  
  return (
    <Fragment>
      <Row>
        <div
          style={{
            minHeight: 550,
            paddingLeft: 30
          }}
        >
          <Card.Title style={{ marginTop: 40 }}>
            <i
              style={{ marginRight: 9 }}
              className="fe fe-download text-black fs-15"
            ></i>
            Reportes de resultados y actividad
          </Card.Title>
          {renderReportFilters()}
          {renderReportCategorySelection()}

          <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 40
              }}
            >
              <div></div>
              <Button className="custom-button" type="submit">
                Generar reporte
              </Button>
            </div>
        </div>
      </Row>
    </Fragment>
  );
}
