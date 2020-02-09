import React from "react";
import { Popover, Button } from "antd";

const Debugging: React.FC<{ recordId: string; data: object }> = ({
  recordId,
  data
}) => {
  return (
    <Popover
      content={
        <pre>
          <code>{JSON.stringify(data, null, 4)}</code>
        </pre>
      }
      title={recordId}
      placement="bottomRight"
      trigger="click"
    >
      <Button type="primary" size="small">
        Debugging
      </Button>
    </Popover>
  );
};

export default Debugging;
