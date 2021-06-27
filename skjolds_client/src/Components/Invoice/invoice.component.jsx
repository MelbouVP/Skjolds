import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { Link } from 'react-router-dom';



import './invoice.styles.scss';

const Invoice = ({ invoiceData, redirectUrl }) => {

    console.log(invoiceData);

    const handleClick = () => {

        const invoice = document.querySelector('.invoice-container');
        console.log(invoice);
    }



    const date = new Date(invoiceData.order_date*1000)

    const lineItems = invoiceData.line_items.map(item => {
        return (
            <tr class="item">
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
                <td>
                    color: {item.color} 
                    <br />
                    size: {item.size}
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
                        Go back to {redirectUrl ? redirectUrl : 'shop'}
                    </Link>
                    <button class="button print-btn" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                            <rect x="7" y="13" width="10" height="8" rx="2" />
                        </svg>
                        Print Invoice
                    </button>
                </header>
                <section class="row">
                <div class="callout large invoice-container">
                    <table class="invoice">
                        <tr class="header">
                            <td class="invoice-id">
                                <h2>
                                    Invoice
                                </h2>
                                <span class="num">
                                    Order #
                                    {
                                        invoiceData.orderID
                                    }
                                </span>
                            </td>
                            <td className="logo">
                                <img src="https://www.dropbox.com/s/d2qser6yy5ui4nc/easternwaves.svg?raw=1" alt="Company logo" />
                                <div>
                                    Skjolds
                                </div>
                            </td>
                        </tr>
                        <tr class="intro">
                            <td class="customer">
                            Hello, {
                                invoiceData.customer_name
                            }
                            <br></br>
                            Thank you for your order.
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
                                <tr>
                                    <th class="desc">Item name</th>
                                    <th class="id">Item ID</th>
                                    <th class="qty">Options</th>
                                    <th class="qty">Quantity</th>
                                    <th class="amt">Subtotal</th>
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
                                <td class="num">Subtotal</td>
                                <td class="num">
                                    {
                                        (invoiceData.order_total_amount / 100).toFixed(2)
                                    }
                                    €
                                </td>
                                </tr>
                                <tr class="fees">
                                <td class="num">Shipping & Handling</td>
                                <td class="num">0.00€</td>
                                </tr>
                                <tr class="tax">
                                <td class="num">Tax (0%)</td>
                                <td class="num">0.00€</td>
                                </tr>
                                <tr class="total">
                                <td>Total</td>
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
                            <h4>Shipping Information</h4>
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
