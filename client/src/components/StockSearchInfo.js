import React from 'react';
import { Table } from 'react-materialize';

export default (props) => {
  return (
      <Table className="companyInfo">
        <thead>
          <tr>
            <th data-field="title"></th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <strong><td className="coInfoTitle">Company Name</td></strong>
            <td>{props.stockInfo.companyName}</td>
          </tr>
          <tr>
            <strong><td className="coInfoTitle">Current Price</td></strong>
            <td>{props.stockPrice}</td>
          </tr>
          <tr>
            <strong><td className="coInfoTitle">Exchange</td></strong>
            <td>{props.stockInfo.exchange}</td>
          </tr>
          <tr>
            <strong><td className="coInfoTitle">Sector</td></strong>
            <td>{props.stockInfo.sector}</td>
          </tr>
          <tr>
            <strong><td className="coInfoTitle">Description</td></strong>
            <td>{props.stockInfo.description}</td>
          </tr>
          <tr>
            <strong><td className="coInfoTitle">Website</td></strong>
            <td><a href={props.stockInfo.website} target="_blank" rel="noopener noreferrer">{props.stockInfo.website}</a></td>
          </tr>
        </tbody>
      </Table>
  )
}