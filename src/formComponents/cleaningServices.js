import React, { useState } from "react";
import { CleProDeoRow } from "./servicesRowElements";
import { ToggleButton } from "./buttonComponent";

export function CarpetCleaning(props) {
    const Display = props.displayForm;

    if (Display === false) {
        return null;
      }
  
    return (
        <React.Fragment>
        <table className="service-table">
          <thead className="thead">
            <tr>
              <th></th>
              <th>CLEAN</th>
              <th>PROTECT</th>
              <th>DEODORIZE</th>
            </tr>
          </thead>
  
          <tbody>
            <CleProDeoRow rowTitle={'Room(s)'}/>
            <CleProDeoRow rowTitle={'Bath/Laundry'}/>
            <CleProDeoRow rowTitle={'Entry/Hall'}/>
            <CleProDeoRow rowTitle={'Staircase'}/>
          </tbody>
        </table>
        </React.Fragment>
      );
}

export function UpholsteryCleaning(props) {
    const Display = props.displayForm;

    if (Display === false) {
        return null;
      }
  
    return (
        <React.Fragment>
        <table className="service-table">
          <thead className="thead">
            <tr>
              <th></th>
              <th>CLEAN</th>
              <th>PROTECT</th>
              <th>DEODORIZE</th>
            </tr>
          </thead>
  
          <tbody>
            <CleProDeoRow rowTitle={'Sofa'}/>
            <CleProDeoRow rowTitle={'Loveseat'}/>
            <CleProDeoRow rowTitle={'Chair'}/>
            <CleProDeoRow rowTitle={'Ottoman'}/>
            <CleProDeoRow rowTitle={'Dining Room Chair'}/>
          </tbody>
        </table>
        </React.Fragment>
      );
}