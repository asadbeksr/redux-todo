import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import ActiveTasks from "./ActiveTasks";
import FinishedTasks from "./FinishedTasks";
export default function UnstyledTabsBasic() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled>
        <TabUnstyled className="active-btn">Active</TabUnstyled>
        <TabUnstyled className="finished-btn">Finished</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        Active tasks :
        <ActiveTasks />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
        Finished tasks:
        <FinishedTasks />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}
