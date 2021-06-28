import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactDOMServer from 'react-dom/server'
import { Link } from 'react-router-dom';

import apiClient from '../../apiClient.js';



import './invoice.styles.scss';

const Invoice = ({ invoiceData, redirectUrl }) => {

    console.log(invoiceData);

    const { t } = useTranslation();

    const handleClick = () => {

        const invoice = document.querySelector('#invoice').innerHTML;
        console.log(invoice);

        // add authentication
        // const cookie = await apiClient.get('/sanctum/csrf-cookie')
        const response = apiClient.post(`/api/generate-pdf`, {
            invoice: invoice,
            id: invoiceData.orderID
        },{
            responseType: 'blob',
        }).then((response) => {
            // var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            // var fileLink = document.createElement('a');
            // fileLink.href = fileURL;
            // fileLink.setAttribute('download', 'file.pdf');
            // document.body.appendChild(fileLink);
            // fileLink.click();

            // console.log(fileURL);
            // console.log(fileLink)
            let blob = new Blob([response.data], { type: 'application/pdf' })
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'test.pdf'
            link.click()

            console.log(blob);
            console.log('link');
            console.log(response.data);
       
       });

        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'file.pdf'); //or any other extension
        // document.body.appendChild(link);
        // link.click();

        // const data = response.data

        // console.log(data)

    }
    
    const date = new Date(invoiceData.order_date*1000)

    const lineItems = invoiceData.line_items.map(item => {
        return (
            <tr class="item" id="item">
                <td class="desc">
                    {
                        item.name
                    }
                </td>
                <td class="id num">
                    {
                        item.productID
                    }
                </td>
                <td className="opt">
                    {t('Invoice.color')}: {item.color} 
                    <br />
                    {t('Invoice.size')}: {item.size}
                </td>
                <td class="qty">
                    {
                        item.quantity
                    }
                </td>
                <td class="amt">
                    {
                        ((item.price * item.quantity) / 100 ).toFixed(2)
                    }
                    €
                </td>
            </tr>
        )
    })

    return (
        <div class="row expanded invoice">
            <main class="columns">
                <div class="inner-container">
                <header class="row align-center action-buttons">
                    <Link to={redirectUrl ? redirectUrl : '/shop'} class="button redirect-btn"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        {t('Invoice.go-back')}
                    </Link>
                    <button class="button print-btn" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                            <rect x="7" y="13" width="10" height="8" rx="2" />
                        </svg>
                        {t('Invoice.print-invoice')}
                    </button>
                </header>
                <section class="row">
                <div class="callout large invoice-container" id="invoice">
                    <table class="invoice">
                        <tr class="header">
                            <td class="invoice-id">
                                <h2>
                                    {t('Invoice.invoice')}
                                </h2>
                                <span>
                                    {t('Invoice.invoice-nr')} # <strong>
                                        {
                                            invoiceData.orderID
                                        }
                                    </strong>
                                    
                                </span>
                            </td>
                            <td className="logo">
                                {/* <img src="https://www.dropbox.com/s/d2qser6yy5ui4nc/easternwaves.svg?raw=1" alt="Company logo" /> */}
                                <div>
                                    © Skjolds
                                </div>
                            </td>
                        </tr>
                        <tr class="intro">
                            <td class="customer">
                            {t('Invoice.greeting')}, <span>
                                    {
                                        invoiceData.customer_name
                                    }!
                                </span>
                            <br></br>
                                {t('Invoice.thank-you')}
                            <br></br>
                                {t('Invoice.order-information')}
                            </td>
                            <td class="text-right">
                                    {
                                        date.toDateString()
                                    }
                            </td>
                        </tr>
                        <tr class="details">
                            <td colspan="2">
                            <table>
                                <thead>
                                <tr id="item-header">
                                    <th class="desc">
                                        {t('Invoice.item-name')}
                                    </th>
                                    <th class="id">
                                        {t('Invoice.item-id')}
                                    </th>
                                    <th class="opt">
                                        {t('Invoice.item-options')}
                                    </th>
                                    <th class="qty">
                                        {t('Invoice.item-quantity')}
                                    </th>
                                    <th class="amt">
                                        {t('Invoice.item-subtotal')}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    lineItems
                                }
                                </tbody>
                            </table>
                            </td> 
                        </tr>
                        <tr class="totals">
                            <td></td>
                            <td>
                            <table>
                                <tr class="subtotal">
                                    <td class="num">
                                        {t('Invoice.subtotal')}
                                    </td>
                                    <td class="num">
                                        {
                                            (invoiceData.order_total_amount / 100).toFixed(2)
                                        }
                                        €
                                    </td>
                                </tr>
                                <tr class="fees">
                                    <td class="num">
                                        {t('Invoice.shipping-handling')}
                                    </td>
                                    <td class="num">0.00€</td>
                                </tr>
                                <tr class="tax">
                                    <td class="num">
                                        {t('Invoice.tax')} <span className="tax-percent">(0%)</span>
                                    </td>
                                    <td class="num" id="total-underline">0.00€</td>
                                </tr>
                                <tr class="total">
                                    <td>
                                        {t('Invoice.total')}
                                    </td>
                                    <td>
                                        {
                                            (invoiceData.order_total_amount / 100).toFixed(2)
                                        }
                                        €
                                    </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                    </table>
                    
                    <section class="additional-info">
                    <div class="row">
                        <div class="columns">
                            <h4>
                                {t('Invoice.shipping-info')}
                            </h4>
                            <p>{invoiceData.customer_name}<br></br>
                            {invoiceData.customer_address.street}<br></br>
                            {invoiceData.customer_address.city}, {invoiceData.customer_address.postal_code}<br></br>
                            {invoiceData.customer_address.country}</p>
                        </div>
                    </div>
                    </section>
                </div>
                </section>
                </div>
            </main>
        </div>
    )
}

export default Invoice;
