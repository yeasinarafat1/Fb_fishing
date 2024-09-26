import * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  username: string;
  password: string;
}

export default function EmailTemplate({
  username,
  password,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Your account credentials</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to Our Service</Heading>
          <Text style={text}>Hello,</Text>
          <Text style={text}>
            Your account has been created successfully. Here are your login
            credentials:
          </Text>
          <Section style={credentialContainer}>
            <Text style={credentialText}>
              <strong>Username:</strong> {username}
            </Text>
            <Text style={credentialText}>
              <strong>Password:</strong> {password}
            </Text>
          </Section>
          <Text style={text}>
            For security reasons, we recommend changing your password after your
            first login.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            This is an automated message, please do not reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "left" as const,
};

const credentialContainer = {
  background: "#f4f4f4",
  borderRadius: "4px",
  padding: "16px",
  margin: "16px 0",
};

const credentialText = {
  margin: "8px 0",
  color: "#333",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "14px",
  lineHeight: "24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "12px",
  lineHeight: "16px",
};
