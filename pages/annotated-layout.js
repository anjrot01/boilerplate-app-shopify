import React, { useState } from "react";

import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  SettingToggle,
  TextField,
  TextStyle
} from "@shopify/polaris";

const AnnotatedLayout = () => {
  const [descuento, setDiscount] = useState({ discount: "10%" });
  const [enabled, setEnable] = useState(false);

  const { discount } = descuento;

  const contentStatus = enabled ? "Disable" : "Enable";
  const textStatus = enabled ? "enabled" : "disabled";

  const handleChange = field => {
    return value => setDiscount({ [field]: value });
  };

  const handleSubmit = () => {
    setDiscount({
      discount
    });
    console.log("submission", descuento);
  };

  const handleToggle = () => {
    if (!enabled) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };

  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Descuento Sugerido"
          description="Add a product to Sample App, it will automatically be discounted."
        >
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  value={discount}
                  onChange={handleChange("discount")}
                  label="Discount percentage"
                  type="discount"
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Price updates"
          description="Temporarily disable all Sample App price updates"
        >
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: handleToggle
            }}
            enabled={enabled}
          >
            This setting is{" "}
            <TextStyle variation="strong">{textStatus}</TextStyle>.
          </SettingToggle>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default AnnotatedLayout;
