import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Wrapper, StyledTitle, Content, Description, Price } from "./styles";
import OptionsList from "/src/components/ui/options-list/options-list";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductInfo({ product }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsList = [
    {
      title: "Oписание",
      content: (
        <Content>
          <Description>{product.description}</Description>
          <Price>{`${product.price} руб. / ${product.weight} гр.`}</Price>
        </Content>
      ),
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />,
    },
  ];

  return (
    <Wrapper>
      <StyledTitle as="h2" size="small">
        {product.name}
      </StyledTitle>
      <Box sx={{ width: "100%" }}>
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabsList.map((item, index) => (
              <Tab disableRipple label={item.title} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {tabsList.map((item, index) => (
          <CustomTabPanel value={value} index={index}>
            {item.content}
          </CustomTabPanel>
        ))}
      </Box>
    </Wrapper>
  );
}

export default ProductInfo;
