import React, { Fragment, useState } from "react";
import { Card, Row } from "react-bootstrap";
//@ts-ignore
import famhold from "../../assets/images/brand/famhold.png";
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
  const defaultCurrency = "MXN";
  const [currency, setCurrency] = useState(defaultCurrency);
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
      width: 120,
      height: "auto",
      position: "absolute",
      left: 20,
      top: 25,
      marginBottom: 60,
    },
    title: {
      justifyContent: "flex-end",
      fontSize: 16,
      marginBottom: 10,
      marginTop: 30,
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
      textAlign: 'right',
      fontSize: 8,
      color: "gray",
    },
    categoryTitle: {
      fontSize: 14,
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
      marginLeft: 40,
    },
    entitieText: {
      fontSize: 12,
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 20,
    },
    subtitle: {
      fontSize: 10,
      color: 'white'
    },
    subtitleContainer: {
      marginTop: 15,
      marginLeft: 40,
      marginBottom: 15,
      borderRadius: 5,
      backgroundColor: '#99babd',
      padding: 5,
    },
    banner: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: "#f2f2f2",
      borderRadius: 5,
      fontSize: 11,
      marginTop: 5
    },
    bannerText: {
      marginBottom: 6,
    },
    tableHeader: {
      marginTop: 10,
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "black",
      fontSize: 10,
    },
    tableRow: {
      flexDirection: "row",
      fontSize: 9,
    },
    tableCell: {
      flex: 1,
      padding: 2,
    },
    debtAndCollectingContainer: {
      marginTop: 18, 
      marginBottom: 18
    },
    conceptTitle: {
      fontSize: 11,
      marginBottom: 10,
      textAlign: 'left',
    },
    conceptMiniTitle: {
      fontSize: 7,
      marginBottom: 4,
      textAlign: 'left',
      color: 'gray'
    }, 
    mainTitleContainer: {
      color: 'white', 
      backgroundColor: '#004745', 
      borderRadius: 5, 
      padding: 10,
      marginTop: 30,
      marginBottom: 10
    }
  });

  const renderHighlights = () => {
    return (
      <>
       <View style={styles.mainTitleContainer}>
          <Text style={styles.categoryTitle}>Highlights del periodo:</Text>
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
          <Text style={styles.categoryTitle}> Obligaciones personas morales:</Text>
        </View>
        {companiesData.map((company, idx) => (
          <View key={idx}>
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
              <Text style={styles.subtitle}>b) Creditos y prestamos por pagar:</Text>
            </View>
            {company.debt.map((debtItem, debtIdx) => (
              <View key={debtIdx} style={styles.subCategorySection}>
                {/* Debt Banner */}
                {/* <View style={styles.banner}>
                  <Text style={styles.bannerText}>
                    Total deudas {company.companyName}: {debtItem.debtTotal} {reportsData.currency}
                  </Text>
                  <Text style={styles.bannerText}>
                    Monto por pagar inicio del periodo: {debtItem.amountPayableBeginDate}
                  </Text>
                  <Text style={styles.bannerText}>
                    Monto por pagar fin del periodo: {debtItem.amountPayableEndDate}
                  </Text>
                </View> */}

                {/* Debt Details */}
                {debtItem.debt.map((debtDetail, detailIdx) => (
                  <View key={detailIdx} style={styles.debtAndCollectingContainer}>
                    <Text style={styles.conceptTitle}>
                      -{debtDetail.concept}
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
                        Monto por pagar fin del periodo: {debtDetail.amountPayableEndDate}
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
                {/* Debt Banner */}
                {/* <View style={styles.banner}>
                  <Text style={styles.bannerText}>
                    Total deudas {company.companyName}: {debtItem.debtTotal} {reportsData.currency}
                  </Text>
                  <Text style={styles.bannerText}>
                    Monto por pagar inicio del periodo: {debtItem.amountPayableBeginDate}
                  </Text>
                  <Text style={styles.bannerText}>
                    Monto por pagar fin del periodo: {debtItem.amountPayableEndDate}
                  </Text>
                </View> */}

                {/* collecting Details */}
                {debtItem.debt.map((debtDetail, detailIdx) => (
                  <View key={detailIdx} style={styles.debtAndCollectingContainer}>
                    <Text style={styles.conceptTitle}>
                      -{debtDetail.concept}
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
                        Monto por pagar fin del periodo: {debtDetail.amountReceivableEndDate}
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


  const renderFamilyMembersObligations = (companiesData) => {
    return (
      <View>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.categoryTitle}> Obligaciones personas físicas:</Text>
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
        {renderFamilyMembersObligations(reportsData.companiesObligations)}
      </Page>
    </Document>
  );

  return (
    <Fragment>
      <Row>
        <Card
          style={{
            minHeight: 550,
            marginTop: 20,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
            <i
              style={{ marginRight: 9 }}
              className="fe fe-download text-black fs-15"
            ></i>
            Reportes de resultados y actividad
          </Card.Title>
          <PDFDownloadLink
            document={<MyDocument data={pdfData} />}
            fileName="dynamic.pdf"
          >
            {/* // @ts-ignore */}
            {({ loading }: { loading: boolean }) => (
              <span>{loading ? "Loading document..." : "Download PDF"}</span>
            )}
          </PDFDownloadLink>
        </Card>
      </Row>
    </Fragment>
  );
}
