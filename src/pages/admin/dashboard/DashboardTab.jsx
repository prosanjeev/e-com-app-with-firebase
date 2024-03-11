import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import AllOrder from "../../order/AllOrder";
import AllProduct from "../../allproducts/AllProducts";

const DashboardTab = () => {

  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Products</Tab>
          <Tab>Orders</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading>All Products</Heading>
           <AllProduct/>
          </TabPanel>
          <TabPanel>
          <AllOrder />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );
};

export default DashboardTab;
