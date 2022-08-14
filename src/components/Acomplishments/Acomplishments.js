import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxText } from "./AcomplishmentsStyles";
import Button from "../../styles/GlobalComponents/Button";


const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      <Box>
        <BoxTitle>Goldmann Sachs Engineering Virtual Program</BoxTitle>
        <br/>
        <Button
          onClick={() =>
            (window.location =
              "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_sHxfpRaYdX44u8JXi_1657653467072_completion_certificate.pdf")
          }
        >
          Credentials
        </Button>
      </Box>
      <Box>
        <BoxTitle>Flipkart GRID 4.0 - Ecommerce and Tech Quiz</BoxTitle>
        <br />
        <Button
        onClick={() =>
          (window.location =
            "https://unstop.com/certificate-preview/dc6a31ee-5ab0-4507-82dc-81cd3d03723f?utm_campaign=")}>
          Credentials</Button>
      </Box>
    </Boxes>
      <Boxes>
      <Box>
        <BoxTitle>30 days of Google Cloud Skill badges</BoxTitle>
        <br/><br/><br/>
        <Button onClick={() => window.location = ("https://www.cloudskillsboost.google/public_profiles/2f07d574-76d1-462b-a283-cfede04fab0c")}>Credentials</Button>
      </Box>
      </Boxes>
  </Section>
);

export default Acomplishments;
