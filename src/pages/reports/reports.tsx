import React, { Fragment, useState } from "react";
import { Card, Col, Row, Dropdown, Button } from "react-bootstrap";
//@ts-ignore
import famhold from '../../assets/images/brand/famhold.png'
import { Link } from "react-router-dom";
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from '@react-pdf/renderer';

export default function Reports() {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;
  const defaultCurrecny = "MXN";
  const [currency, setCurrency] = useState(defaultCurrecny);

  const pdfData = {
    title: "Report familia",
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
      width: 150,
      height: 'auto',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
    },
    content: {
      fontSize: 12,
      textAlign: 'justify',
      marginBottom: 20,
    },
  });
  
  const MyDocument = ({ data }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          style={styles.image}
          src={famhold}
        />
  
        <Text style={styles.title}>{data.title}</Text>
  
        <View>
          <Text style={styles.content}>{data.content}</Text>
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
            {/*// @ts-ignore */}
            {({ loading }: { loading: boolean }) => (
              <span>{loading ? "Loading document..." : "Download PDF"}</span>
            )}
          </PDFDownloadLink>
        </Card>
      </Row>
    </Fragment>
  );
}
