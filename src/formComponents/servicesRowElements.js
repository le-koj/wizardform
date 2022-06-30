import { useState } from "react";
import React from "react";

export function CleProDeoRow(props) {
    const rowTitle = useState(props.rowTitle);
    const [Clean, setClean] = useState(0);
    const [Protect, setProtect] = useState(0);
    const [Deodorize, setDeodorize] = useState(0);

    if (Clean < 0) {
      setClean(0);
    }

    if (Protect < 0) {
      setProtect(0);
    }

    if (Deodorize < 0) {
      setDeodorize(0);
    }

    return (
        <React.Fragment>
        <tr>
            <th>{rowTitle}</th>
            <td>
              <input
                type="number"
                className="input-control"
                id="room-clean"
                name="room-clean"
                group="clean"
                placeholder={Clean}
                value={Clean}
                onChange={(e) => setClean(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                type="number"
                className="input-control"
                id="room-protect"
                name="room-protect"
                group="protect"
                placeholder={Protect}
                value={Protect}
                onChange={(e) => setProtect(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                type="number"
                className="input-control"
                id="room-deodorize"
                name="room-deodorize"
                group="deodorize"
                placeholder={Deodorize}
                value={Deodorize}
                onChange={(e) => setDeodorize(parseInt(e.target.value))}
              />
            </td>
          </tr>
          </React.Fragment>
    );
}