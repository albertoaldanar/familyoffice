import React, { Fragment, useState } from "react";
import { Card, Row } from "react-bootstrap";
//@ts-ignore
import famhold from '../../assets/images/brand/famhold.png';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from '@react-pdf/renderer';
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
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    image: {
      width: 120,
      height: 'auto',
      position: 'absolute',
      left: 20, top: 25,
      marginBottom: 60,
    },
    title: {
      fontSize: 16,
      marginBottom: 10,
      marginTop: 30,
    },
    topRightText: {
      fontSize: 10,
      textAlign: 'right',
      marginBottom: 10,
      color: 'gray'
    },
    content: {
      fontSize: 12,
      textAlign: 'justify',
      marginBottom: 20,
    },
    list: {
      marginTop: 5,
      fontSize: 8,
      color: 'gray'
    },
  });

  const MyDocument = ({ data }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.topRightText}>
          {reportsData.from.month}-{reportsData.from.year} a {reportsData.to.month}-{reportsData.to.year}
        </Text>

        <Image style={styles.image} src={famhold} />

        <Text style={styles.title}>{data.title}</Text>

        <View>
          {reportsData.content.map((item, index) => (
            <Text key={index} style={styles.list}>- {item}</Text>
          ))}
        </View>
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
          <PDFDownloadLink document={<MyDocument data={pdfData} />} fileName="dynamic.pdf">
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
