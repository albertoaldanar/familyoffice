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
      fontSize: 12,
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
      backgroundColor: "#99babd",
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
      marginTop: 10,
      flexDirection: "row",
      borderBottomWidth: 0.5,
      paddingTop: 2,
      paddingBottom: 2,
      borderBottomColor: "gray",
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
      color: "white",
      backgroundColor: "#004745",
      borderRadius: 5,
      padding: 8,
      marginTop: 25,
      marginBottom: 20,
    },
    itemContainer: {
      borderColor: "#99babd",
      borderRadius: 5,
      borderWidth: 1.3,
      paddingBottom: 10,
      marginTop: 10,
      marginBottom: 20,
    },
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
          <Text style={styles.categoryTitle}>
            {" "}
            Obligaciones personas morales:
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
      <View>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.categoryTitle}>
            {" "}
            Obligaciones personas físicas:
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
      <View>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.categoryTitle}> Obligaciones de activos: </Text>
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
                      <Text style={styles.subtitle}>d) Cobro de arrendamiento:</Text>
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
                  <Text style={styles.subtitle}>e) Seguros inmobiliario:</Text>
                </View>

                {asset.insurances.map(
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
        )}
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
