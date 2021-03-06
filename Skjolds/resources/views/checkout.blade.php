@extends('master')

@section('page-style-files')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/checkout-page.css') }}" >
@endsection    
    

@section('content')
    <div class="checkout-page">
        <div class="checkout-page__container">

            <div class="checkout__container">

                <div class="checkout-cart">

                    <div class="checkout-cart__header">
                        <h1>Checkout</h1>
                    </div>

                    <div class="checkout-cart__content">

                        <div class="content__cart-item">
                            <div class="cart-item__image">
                                <img src="/images/Felicciti 2019 Off-shoulders Dress.jpg" alt="Women dress">
                            </div>
                            <div class="cart-item__summary">
                                <div class="summary__price">
                                    50.00€
                                </div>
                                <div class="summary__name">
                                    <h3>Felicciti 2018 Off-shoulders Dress</h3>
                                </div>
                                <div class="summary__options">
                                    <div class="summary__options--size">
                                        <p>Size:</p>
                                        <span>XS</span>
                                    </div>
                                    <div class="summary__options--color">
                                        <p>Color:</p>
                                        <span>Blue</span>
                                    </div>
                                    <div class="summary__options--quantity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)"/></svg>
                                        <div class="quantity__count">1</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z" transform="translate(-12.885 -8.625)"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-item__remove-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M37.523,10.523l-3-3-12,12-12-12-3,3,12,12-12,12,3,3,12-12,12,12,3-3-12-12Z" transform="translate(-7.523 -7.523)" fill="#3d3d3d"/></svg>
                            </div>
                        </div>

                        <div class="content__cart-item">
                            <div class="cart-item__image">
                                <img src="images/Wachs 2016 men jacket.jpg" alt="Men jacket">
                            </div>
                            <div class="cart-item__summary">
                                <div class="summary__price">
                                    65.00€
                                </div>
                                <div class="summary__name">
                                    <h3>Felicciti 2018 Off-shoulders Dress</h3>
                                </div>
                                <div class="summary__options">
                                    <div class="summary__options--size">
                                        <p>Size:</p>
                                        <span>L</span>
                                    </div>
                                    <div class="summary__options--color">
                                        <p>Color:</p>
                                        <span>Blue</span>
                                    </div>
                                    <div class="summary__options--quantity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)"/></svg>
                                        <div class="quantity__count">2</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z" transform="translate(-12.885 -8.625)"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-item__remove-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M37.523,10.523l-3-3-12,12-12-12-3,3,12,12-12,12,3,3,12-12,12,12,3-3-12-12Z" transform="translate(-7.523 -7.523)" fill="#3d3d3d"/></svg>
                            </div>
                        </div>

                        <div class="content__cart-item">
                            <div class="cart-item__image">
                                <img src="images/Roadmatia 2020 brown women trousers.jpg" alt="Woman trousers">
                            </div>
                            <div class="cart-item__summary">
                                <div class="summary__price">
                                    59.99€
                                </div>
                                <div class="summary__name">
                                    <h3>Roadmatia 2020 brown women trousers</h3>
                                </div>
                                <div class="summary__options">
                                    <div class="summary__options--size">
                                        <p>Size:</p>
                                        <span>S</span>
                                    </div>
                                    <div class="summary__options--color">
                                        <p>Color:</p>
                                        <span>Blue</span>
                                    </div>
                                    <div class="summary__options--quantity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)"/></svg>
                                        <div class="quantity__count">1</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z" transform="translate(-12.885 -8.625)"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-item__remove-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M37.523,10.523l-3-3-12,12-12-12-3,3,12,12-12,12,3,3,12-12,12,12,3-3-12-12Z" transform="translate(-7.523 -7.523)" fill="#3d3d3d"/></svg>
                            </div>
                        </div>

                    </div>

                    <div class="checkout-cart__continue-btn">
                        <a href="/shop">
                            Continue shopping
                        </a>
                    </div>

                </div>


                <div class="checkout-summary">
                    <div class="checkout-summary__container">

                        <div class="summary__header">
                            <h2>Order summary</h2>
                            <span>Item count: 4</span>
                            <div class="header__sub-total">
                                <p>Sub-total:</p>
                                <p>239.99€</p>
                                <p>Delivery:</p>
                                <p>0.00€</p>
                            </div>
                        </div>

                        <div class="summary__content">
                            <p>Total:</p>
                            <p>239.99€</p>
                            <div class="summary__action-btn">
                                <button type="submit">
                                    <a href="/order">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 30 24"><path d="M30,6H6A2.977,2.977,0,0,0,3.015,9L3,27a2.99,2.99,0,0,0,3,3H30a2.99,2.99,0,0,0,3-3V9A2.99,2.99,0,0,0,30,6Zm0,21H6V18H30Zm0-15H6V9H30Z" transform="translate(-3 -6)" fill="#fff"/></svg>
                                        <span>Checkout</span>
                                    </a>    
                                </button>
                            </div>
                        </div>

                        <div class="summary__payment">
                            <p>We accept:</p>
                            <div class="summary__payment--options">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30.849" height="13.53" viewBox="0 0 30.849 13.53"><path d="M14.895,27.878h1.437v.378H15.273l-.151.832h.832l-.076.378h-.832l-.076.907h1.058v.378H14.517l.378-2.873Zm2.042,2.5h1.134l-.076.378H16.483l.378-2.873h.454l-.378,2.5Zm1.89-2.5h1.512l-.076.378H19.2l-.076.832h.832l-.076.378h-.832l-.151.907h1.134l-.076.378H18.449l.378-2.873Zm2.268.378a1.373,1.373,0,0,1,.983-.454,1.03,1.03,0,0,1,.756.3l-.227.378a.877.877,0,0,0-.6-.3q-.907,0-1.058,1.134a1.065,1.065,0,0,0,.151.794.694.694,0,0,0,.6.34,1.089,1.089,0,0,0,.756-.378V30.6a1.226,1.226,0,0,1-.756.227q-1.287,0-1.134-1.512a1.77,1.77,0,0,1,.529-1.058Zm2.193-.378H25.4l-.076.378h-.907l-.3,2.5h-.454l.378-2.5h-.832l.076-.378Zm4.083.378a.9.9,0,0,1-.076.794.884.884,0,0,1-.6.491l.681,1.21h-.454l-.681-1.21h-.227l-.151,1.21H25.48l.378-2.873h.907a.59.59,0,0,1,.6.378Zm-.529.681q.378-.681-.151-.681h-.454l-.151.907h.454l.3-.227Zm3.629.378q-.3,1.514-1.437,1.512a1.043,1.043,0,0,1-.87-.454,1.405,1.405,0,0,1-.265-1.058q.3-1.512,1.437-1.512,1.285,0,1.134,1.512Zm-.529-.832a.684.684,0,0,0-.6-.378q-.907,0-1.058,1.21a1.186,1.186,0,0,0,.151.832.68.68,0,0,0,.6.378c.6,0,.956-.4,1.058-1.21a1.192,1.192,0,0,0-.151-.832Zm3.478-.6-.378,2.873h-.378l-1.058-2.193-.378,2.193h-.378l.454-2.873h.378L32.664,30l.378-2.117ZM31.453,24.1h.076v.076h-.076v.076h.076v.076H31.6l-.076-.076.076-.076a.068.068,0,0,0-.076-.076h-.151v.227h.076V24.1ZM7.767,18.276a1,1,0,0,0-1.13-.813H2.6l-.03.2c2.771.708,5.046,2.214,6.071,5.062l-.874-4.444ZM8.9,24.06,8.641,22.72a6.047,6.047,0,0,0-3.255-3.284L7.42,27.118h2.636l3.932-9.656H11.337L8.9,24.06Zm7.035,3.072,1.566-9.67H15l-1.567,9.67ZM22.755,17.3c-2.47,0-4.2,1.311-4.217,3.193-.015,1.387,1.235,2.154,2.184,2.622.979.467,1.3.783,1.3,1.2,0,.648-.783.934-1.491.934a4.739,4.739,0,0,1-2.35-.5l-.332-.166L17.5,26.756a7.285,7.285,0,0,0,2.787.513c2.621.015,4.324-1.3,4.353-3.3,0-1.1-.677-1.928-2.109-2.622-.873-.436-1.4-.753-1.4-1.2,0-.406.451-.829,1.431-.829a4.155,4.155,0,0,1,1.868.362l.226.12L25,17.7a6.212,6.212,0,0,0-2.244-.407Zm6.719.166a1.237,1.237,0,0,0-1.311.813l-3.706,8.856h2.621c.423-1.189.528-1.446.528-1.446H30.8s.076.332.3,1.446h2.32L31.4,17.463H29.473ZM28.313,23.7s.211-.558.995-2.7c-.015.015.211-.558.332-.919l.18.829c.467,2.3.573,2.787.573,2.787h-2.08Z" transform="translate(-2.571 -17.297)"/></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="25.708" height="15.424" viewBox="0 0 25.708 15.424"><path d="M23.136,16.35a7.682,7.682,0,0,0-5.142,1.965,7.712,7.712,0,1,0,0,11.494A7.712,7.712,0,1,0,23.136,16.35ZM8.323,25.907l.445-2.8-1.018,2.8H7.178v-2.8l-.509,2.8H5.905l.636-3.691H7.687v2.291l.827-2.291H9.724l-.636,3.691H8.323Zm3.563-.764a4.176,4.176,0,0,1-.127.573v.191h-.636v-.318a.921.921,0,0,1-.827.382.685.685,0,0,1-.509-.191,1.029,1.029,0,0,1-.191-.636,1,1,0,0,1,.318-.827A1.811,1.811,0,0,1,11,24h.318v-.191c0-.169-.17-.255-.509-.255a3.571,3.571,0,0,0-.827.127c.041-.169.085-.382.127-.636A2.589,2.589,0,0,1,11,22.853q1.081,0,1.082.891a3.028,3.028,0,0,1-.064.573q-.06.414-.127.827Zm2.291-1.527a1.958,1.958,0,0,0-.573-.064c-.254,0-.382.085-.382.255a.257.257,0,0,0,.064.191l.255.127a.941.941,0,0,1,.573.827q0,1.018-1.209,1.018a3.773,3.773,0,0,1-.827-.064c.041-.169.085-.4.127-.7a3.459,3.459,0,0,0,.7.127c.3,0,.445-.085.445-.255a.265.265,0,0,0-.064-.191.811.811,0,0,0-.318-.191.856.856,0,0,1-.573-.827q0-1.017,1.145-1.018a2.948,2.948,0,0,1,.764.064l-.128.7Zm1.654.064h-.445a2.41,2.41,0,0,1-.064.573,1.983,1.983,0,0,1-.032.255.5.5,0,0,1-.1.255v.255a.225.225,0,0,0,.255.255.567.567,0,0,0,.255-.064l-.127.7A1.924,1.924,0,0,1,15,25.97a.562.562,0,0,1-.636-.636,2.99,2.99,0,0,1,.127-.827l.318-2.036h.764l-.064.445H15.9l-.064.764ZM18.313,24.7H16.722a.613.613,0,0,0,.127.445.777.777,0,0,0,.573.191,1.683,1.683,0,0,0,.827-.255l-.127.764a2.251,2.251,0,0,1-.827.127,1.181,1.181,0,0,1-1.336-1.336,1.9,1.9,0,0,1,.382-1.273,1.152,1.152,0,0,1,.954-.509,1.122,1.122,0,0,1,.827.318,1.042,1.042,0,0,1,.255.764,4.012,4.012,0,0,1-.064.764Zm1.273-.573a12.485,12.485,0,0,0-.318,1.782H18.44l.064-.191q.253-1.781.382-2.8h.764l-.064.445a.815.815,0,0,1,.382-.382.277.277,0,0,1,.382-.064,4.747,4.747,0,0,0-.318.891c-.17-.042-.319.064-.446.318Zm2.863,1.718a1.583,1.583,0,0,1-.7.127,1.273,1.273,0,0,1-1.018-.445,1.556,1.556,0,0,1-.382-1.145,2.461,2.461,0,0,1,.509-1.591,1.46,1.46,0,0,1,1.273-.636,3.05,3.05,0,0,1,.891.191l-.127.764a1.587,1.587,0,0,0-.7-.191.854.854,0,0,0-.764.382,1.631,1.631,0,0,0-.255,1.018.878.878,0,0,0,.191.636.6.6,0,0,0,.509.255,1.583,1.583,0,0,0,.7-.191l-.127.828ZM25.281,24a1.892,1.892,0,0,0-.032.318c-.043.213-.086.5-.127.859a4.443,4.443,0,0,1-.127.732h-.636v-.318a.921.921,0,0,1-.827.382.685.685,0,0,1-.509-.191,1.029,1.029,0,0,1-.191-.636,1,1,0,0,1,.318-.827A1.706,1.706,0,0,1,24.167,24h.318a.261.261,0,0,0,.064-.191c0-.169-.17-.255-.509-.255a3.571,3.571,0,0,0-.827.127,2.061,2.061,0,0,1,.127-.636,2.589,2.589,0,0,1,.891-.191q1.081,0,1.082.891a1.846,1.846,0,0,1-.031.255Zm1.241.127a12.856,12.856,0,0,0-.318,1.782h-.827l.064-.191q.252-1.391.382-2.8h.764a1.441,1.441,0,0,1-.064.445.813.813,0,0,1,.382-.382.455.455,0,0,1,.382-.064,1.7,1.7,0,0,0-.318.891c-.17-.042-.318.064-.446.318Zm2.163,1.782.064-.255a.847.847,0,0,1-.7.318.745.745,0,0,1-.7-.318,1.517,1.517,0,0,1-.318-.891,1.958,1.958,0,0,1,.445-1.336,1,1,0,0,1,.891-.509,1.1,1.1,0,0,1,.764.382l.127-1.082h.827l-.636,3.691h-.764Zm-18.326-.891c0,.213.085.318.255.318A.431.431,0,0,0,11,25.143a.778.778,0,0,0,.191-.573H11c-.424,0-.636.149-.636.445Zm7.19-1.4a.18.18,0,0,1-.127-.064H17.3q-.382,0-.509.509h.891v-.191l-.064-.127a.192.192,0,0,0-.064-.127Zm6.045,1.4c0,.213.085.318.255.318a.431.431,0,0,0,.382-.191.777.777,0,0,0,.191-.573h-.191c-.424,0-.636.149-.636.445Zm4.9-1.4a.537.537,0,0,0-.445.318,1.349,1.349,0,0,0-.127.7q0,.573.382.573a.551.551,0,0,0,.445-.255,1.262,1.262,0,0,0,.191-.764c0-.382-.15-.573-.446-.573Z" transform="translate(-5.141 -16.35)"/></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21"><path d="M25.151,20.006a.584.584,0,1,1-.583-.548A.552.552,0,0,1,25.151,20.006ZM8.964,19.458a.549.549,0,1,0,.568.548A.545.545,0,0,0,8.964,19.458Zm6.12-.014a.466.466,0,0,0-.495.408h.995A.463.463,0,0,0,15.083,19.444Zm5.615.014a.549.549,0,1,0,0,1.1.539.539,0,0,0,.583-.548A.546.546,0,0,0,20.7,19.458Zm5.516,1.223c0,.014.016.023.016.052s-.016.023-.016.052c-.016.014-.016.023-.026.037a.07.07,0,0,1-.057.023c-.016.014-.026.014-.057.014a.112.112,0,0,1-.057-.014c-.016,0-.026-.014-.042-.023s-.026-.023-.026-.037a.079.079,0,0,1-.016-.052c0-.023,0-.037.016-.052a.085.085,0,0,1,.026-.052.187.187,0,0,1,.042-.023.1.1,0,0,1,.057-.014.074.074,0,0,1,.057.014c.026.014.042.014.057.023S26.2,20.658,26.214,20.681Zm-.115.066c.026,0,.026-.014.042-.014a.053.053,0,0,0,0-.075c-.016,0-.026-.014-.057-.014H26v.164h.042v-.066h.016l.057.066h.042l-.057-.061ZM30,4.57v16.5a2.386,2.386,0,0,1-2.5,2.25H2.5A2.386,2.386,0,0,1,0,21.07V4.57A2.386,2.386,0,0,1,2.5,2.32h25A2.386,2.386,0,0,1,30,4.57ZM3.333,11.114c0,3.586,3.234,6.492,7.214,6.492a7.85,7.85,0,0,0,3.984-1.083,6.561,6.561,0,0,1,0-10.8,7.8,7.8,0,0,0-3.984-1.083C6.568,4.631,3.333,7.542,3.333,11.114ZM15,16.214a6.1,6.1,0,0,0,0-10.2A6.1,6.1,0,0,0,15,16.214ZM7.589,19.791a.7.7,0,0,0-.766-.689.774.774,0,0,0-.667.3.712.712,0,0,0-.635-.3.688.688,0,0,0-.552.253v-.206H4.542v1.72h.427c0-.886-.13-1.416.469-1.416.531,0,.427.478.427,1.416h.411c0-.858-.13-1.416.469-1.416.531,0,.427.469.427,1.416H7.6V19.791Zm2.339-.642H9.516v.206a.786.786,0,0,0-.609-.253.906.906,0,1,0,0,1.809.755.755,0,0,0,.609-.253v.216h.411Zm2.109,1.2c0-.7-1.193-.384-1.193-.713,0-.267.62-.225.964-.052l.172-.3c-.49-.286-1.573-.281-1.573.384s1.193.389,1.193.7c0,.3-.7.272-1.078.038l-.182.3C10.922,21.056,12.036,20.981,12.036,20.348Zm1.844.436-.115-.319c-.2.1-.635.206-.635-.192V19.5h.682v-.347H13.13v-.525H12.7v.525h-.4v.342h.4v.783c0,.825.9.675,1.177.511Zm.693-.628h1.432c0-.759-.385-1.059-.906-1.059a.889.889,0,0,0-.948.9c0,.961,1.177,1.12,1.76.666l-.2-.281c-.406.3-1.021.272-1.141-.23Zm3.078-1.008a.651.651,0,0,0-.792.206v-.206h-.427v1.72h.427V19.9c0-.544.495-.473.667-.394Zm.552.858c0-.534.6-.708,1.078-.394l.2-.3c-.6-.427-1.7-.192-1.7.7,0,.928,1.167,1.116,1.7.7l-.2-.3C18.8,20.714,18.2,20.531,18.2,20.006Zm3.474-.858H21.25v.206a.915.915,0,1,0,0,1.3v.216h.427Zm1.755,0a.669.669,0,0,0-.792.206v-.206h-.411v1.72h.411V19.9c0-.516.469-.483.667-.394Zm2.1-.7H25.12v.9a.915.915,0,1,0,0,1.3v.216h.411Zm.4-3.52v.216h.042V14.93h.1v-.037h-.24v.037h.1Zm.344,5.8a.131.131,0,0,0-.016-.075c-.016-.014-.026-.037-.042-.052s-.042-.023-.057-.038-.057-.014-.083-.014a.607.607,0,0,1-.073.014.273.273,0,0,0-.057.038.074.074,0,0,0-.042.052.131.131,0,0,0-.016.075.125.125,0,0,0,.016.066.074.074,0,0,0,.042.052.181.181,0,0,0,.057.037.155.155,0,0,0,.073.014.174.174,0,0,0,.083-.014c.016-.014.042-.023.057-.037s.026-.038.042-.052A.125.125,0,0,0,26.271,20.733Zm.167-5.845h-.073l-.083.164-.083-.164h-.073v.253h.042v-.192l.083.164h.057l.073-.164v.192h.057Zm.229-3.773c0-3.572-3.234-6.483-7.214-6.483a7.85,7.85,0,0,0-3.984,1.083,6.561,6.561,0,0,1,0,10.8A7.832,7.832,0,0,0,19.453,17.6c3.979,0,7.214-2.9,7.214-6.488Z" transform="translate(0 -2.32)"/></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="30.849" height="8.221" viewBox="0 0 30.849 8.221"><path d="M19.564,22.171H18.409a.333.333,0,0,0-.276.146L16.54,24.664l-.675-2.255a.334.334,0,0,0-.32-.238H14.41a.2.2,0,0,0-.189.264l1.272,3.733-1.2,1.688a.2.2,0,0,0,.163.316h1.154a.335.335,0,0,0,.274-.143l3.841-5.543a.2.2,0,0,0-.164-.314Zm-7.721,2.237a1.281,1.281,0,0,1-1.3,1.1.89.89,0,0,1-.952-1.117,1.286,1.286,0,0,1,1.288-1.106.968.968,0,0,1,.766.313.989.989,0,0,1,.195.813Zm1.6-2.237H12.3a.2.2,0,0,0-.2.169l-.05.321-.08-.116a1.637,1.637,0,0,0-1.358-.482,2.642,2.642,0,0,0-2.565,2.312,2.168,2.168,0,0,0,.428,1.765,1.8,1.8,0,0,0,1.447.584,2.2,2.2,0,0,0,1.591-.657l-.051.319a.2.2,0,0,0,.2.231h1.035a.333.333,0,0,0,.329-.281l.621-3.933a.2.2,0,0,0-.2-.231Zm-6.9.027c-.131.861-.789.861-1.425.861H4.762l.254-1.608a.2.2,0,0,1,.2-.169h.166c.433,0,.842,0,1.053.246a.8.8,0,0,1,.117.669Zm-.277-2.247h-2.4a.333.333,0,0,0-.329.282l-.97,6.153a.2.2,0,0,0,.2.231H3.917a.333.333,0,0,0,.329-.281l.262-1.66a.333.333,0,0,1,.329-.282H5.6a2.464,2.464,0,0,0,2.731-2.281,1.847,1.847,0,0,0-.306-1.548,2.224,2.224,0,0,0-1.748-.613Zm25.641.169-.985,6.265a.2.2,0,0,0,.2.231h.991a.333.333,0,0,0,.329-.282l.971-6.153a.2.2,0,0,0-.2-.231H32.111a.2.2,0,0,0-.2.169Zm-2.956,4.287a1.281,1.281,0,0,1-1.3,1.1.89.89,0,0,1-.952-1.117A1.286,1.286,0,0,1,28,23.282a.968.968,0,0,1,.766.313.989.989,0,0,1,.195.813Zm1.6-2.237H29.41a.2.2,0,0,0-.2.169l-.05.321-.081-.116a1.636,1.636,0,0,0-1.357-.482,2.642,2.642,0,0,0-2.565,2.312,2.168,2.168,0,0,0,.428,1.765,1.8,1.8,0,0,0,1.447.584,2.2,2.2,0,0,0,1.591-.657l-.051.319a.2.2,0,0,0,.2.231h1.035a.333.333,0,0,0,.329-.281l.621-3.933a.2.2,0,0,0-.2-.231Zm-6.9.027c-.131.861-.789.861-1.425.861h-.362l.254-1.608a.2.2,0,0,1,.2-.169h.166c.433,0,.842,0,1.053.246a.8.8,0,0,1,.116.669Zm-.277-2.247h-2.4a.333.333,0,0,0-.329.282l-.97,6.153a.2.2,0,0,0,.2.231h1.231a.233.233,0,0,0,.23-.2l.275-1.745a.333.333,0,0,1,.329-.282h.759a2.464,2.464,0,0,0,2.731-2.281,1.847,1.847,0,0,0-.306-1.548,2.224,2.224,0,0,0-1.748-.613Z" transform="translate(-2.571 -19.952)"/></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="28.044" height="15.424" viewBox="0 0 28.044 15.424"><path d="M3.973,31.774V23.526H5.324l.3-.743H6.3l.3.743H9.255v-.56l.231.56h1.375l.244-.572v.572H17.69v-1.2l.122-.012c.11,0,.122.085.122.171v1.047h3.4v-.28a6,6,0,0,0,2.7.28l.3-.743h.682l.3.743h2.763v-.706l.414.706h2.215v-4.6h-2.19v.536l-.3-.536H25.967v.536l-.28-.536H22.657a2.764,2.764,0,0,0-1.327.268v-.268H19.236v.268a1.287,1.287,0,0,0-.888-.268H10.7l-.523,1.181-.523-1.181H7.247v.536l-.268-.536H4.922L3.973,21.1V16.35H32.017V24.6h-1.46a1.653,1.653,0,0,0-.986.268V24.6H27.416a1.448,1.448,0,0,0-.95.268V24.6H22.62v.268a1.912,1.912,0,0,0-1.059-.268H19.017v.268A1.753,1.753,0,0,0,17.91,24.6H15.062L14.4,25.3,13.8,24.6H9.548v4.6h4.174l.669-.718.633.718h2.568V28.115h.255a2.815,2.815,0,0,0,1.1-.158V29.2h2.118V27.993h.1c.122,0,.146.012.146.146V29.2h6.439a1.825,1.825,0,0,0,1.071-.292V29.2H30.86a2.677,2.677,0,0,0,1.157-.207v2.783H3.973Zm8.508-8.905h-.8v-2.58l-1.144,2.58H9.84L8.7,20.288v2.58H7.089l-.3-.73H5.141l-.3.73H3.985L5.4,19.57H6.566L7.9,22.7V19.57h1.29l1.035,2.24.937-2.24h1.314v3.3ZM6.5,21.457l-.548-1.314-.536,1.314H6.5ZM16.9,27.446v1.108H15.366l-.974-1.1-1.01,1.1H10.266v-3.3H13.43l.974,1.083,1-1.083h2.519c.743,0,1.327.256,1.327,1.083,0,1.326-1.449,1.107-2.349,1.107ZM13.881,26.9l-.852-.962H11.045v.6h1.728V27.2H11.045v.657H12.98l.9-.962Zm1.826-4.029H13.065v-3.3h2.641v.694h-1.85v.6h1.8v.669h-1.8v.657h1.85Zm.4,5.38V25.608L14.9,26.91Zm2.751-6.9c.45.158.524.438.524.876v.645h-.791c-.012-.706.17-1.193-.706-1.193h-.852v1.193h-.779v-3.3l1.862.012c.633,0,1.3.1,1.3.876a.95.95,0,0,1-.56.888Zm-.937,4.589H16.9v.84h1.01c.28,0,.5-.134.5-.438s-.219-.4-.487-.4Zm.11-5.672h-1v.731h.986c.268,0,.524-.061.524-.377S18.275,20.264,18.031,20.264Zm4.2,6.756c.438.158.524.45.524.876v.657h-.791v-.548c0-.56-.183-.657-.706-.657h-.84v1.205h-.791v-3.3H21.5c.621,0,1.29.11,1.29.889a.926.926,0,0,1-.56.876Zm-1.558-4.151h-.8v-3.3h.8v3.3Zm.743,3.067h-1v.743H21.4c.268,0,.523-.061.523-.39,0-.3-.267-.353-.511-.353Zm8.593-3.067h-1.12L27.4,20.4v2.471H25.8l-.316-.73H23.849l-.3.73h-.913c-1.083,0-1.571-.56-1.571-1.619,0-1.107.5-1.68,1.619-1.68h.767v.718c-.828-.012-1.582-.195-1.582.937,0,.56.134.95.767.95h.353l1.12-2.593h1.181L26.613,22.7V19.583h1.2l1.388,2.288V19.583h.8v3.286Zm-4.151,5.684H23.229v-3.3h2.629v.682H24.02v.6h1.8V27.2h-1.8v.657l1.838.012v.681Zm-.645-7.1-.536-1.314-.548,1.314Zm2.654,7.1H26.333v-.706h1.534c.195,0,.414-.049.414-.3,0-.706-2.033.268-2.033-1.3a.99.99,0,0,1,1.12-.986H28.95v.694H27.5c-.207,0-.438.037-.438.3,0,.718,2.045-.329,2.045,1.254,0,.779-.536,1.047-1.241,1.047Zm4.151-.426a1.251,1.251,0,0,1-1.071.426H29.424v-.706h1.521c.195,0,.4-.061.4-.3,0-.694-2.033.268-2.033-1.3a1,1,0,0,1,1.132-.986h1.57v.694H30.581c-.219,0-.438.037-.438.3,0,.584,1.376-.012,1.874.645v1.229Z" transform="translate(-3.973 -16.35)"/></svg>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16"><path d="M.984,15.476c.113-.176.255-.205.476-.1.51.235,1.011.478,1.531.7a32.627,32.627,0,0,0,6.253,1.94q1.535.316,3.1.494a34.637,34.637,0,0,0,4.663.218c.854-.017,1.708-.075,2.557-.159a33.768,33.768,0,0,0,8.015-1.793.809.809,0,0,1,.447-.05c.329.075.442.377.2.582a3.429,3.429,0,0,1-.471.31,20.336,20.336,0,0,1-4.889,2.007,26.632,26.632,0,0,1-3.686.737,24.7,24.7,0,0,1-2.611.2,1.218,1.218,0,0,0-.123.013H15.415a1.218,1.218,0,0,0-.123-.013c-.177-.008-.353-.013-.525-.017a24.4,24.4,0,0,1-2.474-.222,25.11,25.11,0,0,1-3.946-.876A22.776,22.776,0,0,1,1.2,15.8a1.507,1.507,0,0,1-.216-.239ZM8.74,4.575,8.529,4.6a4.381,4.381,0,0,0-1.865.633c-.118.071-.226.147-.348.226A.16.16,0,0,1,6.3,5.4c-.02-.113-.039-.23-.064-.344-.034-.193-.147-.277-.373-.277H5.294c-.339,0-.4.054-.4.344v8.769a1.076,1.076,0,0,0,0,.126.223.223,0,0,0,.241.209c.344,0,.692,0,1.036,0a.228.228,0,0,0,.245-.209,1.076,1.076,0,0,0,0-.126V10.859c.054.038.083.059.108.08a3.888,3.888,0,0,0,2.994.645,2.937,2.937,0,0,0,2.15-1.462,3.778,3.778,0,0,0,.506-1.848,4.175,4.175,0,0,0-.4-2.086A2.815,2.815,0,0,0,9.628,4.642c-.157-.029-.319-.042-.481-.063-.137,0-.27,0-.407,0ZM6.413,6.33A.141.141,0,0,1,6.5,6.192a3.813,3.813,0,0,1,2.238-.553,1.761,1.761,0,0,1,1.644,1.085,3.452,3.452,0,0,1,.241,1.383,3.583,3.583,0,0,1-.2,1.282,1.916,1.916,0,0,1-2.091,1.194A3.774,3.774,0,0,1,6.5,10a.145.145,0,0,1-.083-.138c0-.591,0-1.177,0-1.768s0-1.173,0-1.764Zm10.1-1.755c-.049,0-.1.013-.142.017a8.437,8.437,0,0,0-1.419.172c-.3.067-.589.159-.879.243a.309.309,0,0,0-.26.323c0,.138,0,.277,0,.415,0,.2.1.256.334.205.383-.084.766-.176,1.153-.239a6.347,6.347,0,0,1,1.826-.059A1.271,1.271,0,0,1,17.948,6a1.049,1.049,0,0,1,.26.687c.015.348.01.7.015,1.043a.284.284,0,0,1-.01.059c-.025,0-.044,0-.064,0a10.281,10.281,0,0,0-1.571-.205,4.874,4.874,0,0,0-1.634.163A2.332,2.332,0,0,0,13.5,8.789a1.9,1.9,0,0,0-.191,1.286A1.742,1.742,0,0,0,14.36,11.4a3.277,3.277,0,0,0,1.86.226,4.385,4.385,0,0,0,1.978-.771.369.369,0,0,1,.079-.046c.029.159.054.31.088.461a.264.264,0,0,0,.265.218c.265,0,.535,0,.8,0a.223.223,0,0,0,.236-.2.938.938,0,0,0,0-.117V6.736a2.87,2.87,0,0,0-.044-.54,1.657,1.657,0,0,0-.933-1.274,3.182,3.182,0,0,0-1.07-.3c-.177-.021-.353-.034-.53-.054-.191,0-.388,0-.584,0Zm1.718,5.35a.134.134,0,0,1-.074.126,4.12,4.12,0,0,1-1.836.624,1.956,1.956,0,0,1-.825-.075.911.911,0,0,1-.609-.557,1.186,1.186,0,0,1,0-.813,1.073,1.073,0,0,1,.8-.654A3.506,3.506,0,0,1,16.9,8.483c.412.029.815.1,1.227.142.079.008.1.042.1.109,0,.2,0,.4,0,.6S18.223,9.728,18.228,9.925Zm12.757,5.421c-.049-.209-.236-.289-.447-.348a5.011,5.011,0,0,0-1.031-.163,8.453,8.453,0,0,0-1.924.08,5.608,5.608,0,0,0-1.963.654.643.643,0,0,0-.182.147.187.187,0,0,0-.025.168c.02.063.1.08.177.075a.93.93,0,0,0,.108,0c.383-.034.761-.071,1.144-.1a11.3,11.3,0,0,1,1.684-.038,4.06,4.06,0,0,1,.707.113.436.436,0,0,1,.373.436,2.669,2.669,0,0,1-.172.976,16.047,16.047,0,0,1-.776,1.889.665.665,0,0,0-.049.126c-.025.121.059.2.2.172a.553.553,0,0,0,.236-.1,6.657,6.657,0,0,0,.623-.561,5.292,5.292,0,0,0,1.212-2.329c.039-.151.069-.306.1-.457v-.725ZM24.5,10.184q-.95-2.244-1.9-4.491c-.1-.239-.206-.473-.309-.708a.323.323,0,0,0-.314-.2c-.373,0-.746-.008-1.124,0a.145.145,0,0,0-.157.189,1.619,1.619,0,0,0,.093.256q1.443,3.048,2.9,6.1a.494.494,0,0,1,.01.494c-.162.306-.29.628-.456.934a1.091,1.091,0,0,1-.746.557,2.412,2.412,0,0,1-.756.046c-.123-.008-.245-.034-.368-.042-.167-.008-.25.054-.255.2s0,.278,0,.415c0,.23.1.335.363.373a6.183,6.183,0,0,0,.83.084,2.159,2.159,0,0,0,1.939-.9,5.244,5.244,0,0,0,.452-.771q1.745-3.758,3.465-7.524a1,1,0,0,0,.079-.23c.02-.117-.044-.184-.182-.184-.324,0-.653,0-.977,0a.374.374,0,0,0-.378.218c-.025.059-.054.113-.079.172l-1.708,4.19c-.123.3-.25.607-.378.93-.02-.046-.029-.071-.044-.1Z" transform="translate(-0.984 -4.57)"/></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="12" viewBox="0 0 30 12"><path d="M5.478,10.312A1.859,1.859,0,0,1,4,10.993,1.994,1.994,0,0,1,4.531,9.5,2.223,2.223,0,0,1,6,8.768a2.138,2.138,0,0,1-.52,1.544m.511.786c-.816-.046-1.514.452-1.9.452s-.984-.429-1.631-.416A2.418,2.418,0,0,0,.416,12.345C-.465,13.82.186,16,1.039,17.2c.417.594.914,1.247,1.57,1.224.623-.023.867-.393,1.617-.393s.975.393,1.631.384c.68-.014,1.106-.594,1.523-1.188a5.1,5.1,0,0,0,.68-1.366A2.167,2.167,0,0,1,6.734,13.9a2.194,2.194,0,0,1,1.073-1.841A2.337,2.337,0,0,0,5.989,11.1m4.706-1.654v8.9h1.42V15.3h1.964a2.863,2.863,0,0,0,3.051-2.937,2.83,2.83,0,0,0-3-2.923H10.695Zm1.42,1.165h1.636c1.233,0,1.936.64,1.936,1.763a1.694,1.694,0,0,1-1.94,1.772H12.115Zm7.6,7.807a2.353,2.353,0,0,0,2.09-1.137h.028v1.069h1.312V13.916c0-1.284-1.055-2.115-2.676-2.115-1.5,0-2.62.841-2.662,1.992h1.28a1.245,1.245,0,0,1,1.341-.909c.867,0,1.355.393,1.355,1.119V14.5l-1.772.105c-1.645.1-2.536.754-2.536,1.9A2,2,0,0,0,19.717,18.415ZM20.1,17.36c-.755,0-1.237-.356-1.237-.9,0-.562.464-.886,1.35-.936l1.575-.1v.5A1.527,1.527,0,0,1,20.1,17.36Zm4.8,3.408c1.383,0,2.034-.516,2.6-2.074L30,11.888H28.553l-1.669,5.258h-.028l-1.669-5.258H23.706l2.4,6.482-.131.393a1.123,1.123,0,0,1-1.2.927c-.112,0-.328-.014-.417-.023v1.069A5.039,5.039,0,0,0,24.906,20.768Z" transform="translate(0.004 -8.768)"/></svg>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection

@section('page-js-script')
    <script type="text/javascript">

    </script>
@endsection